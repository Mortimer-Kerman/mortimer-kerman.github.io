const imageContainers = document.querySelectorAll('.image-container');
const modal = document.getElementById('modal');
const modalMedia = document.getElementById('modal-media'); modalMedia.displayed = 0;
const closeModal = document.querySelector('.close');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const caption = document.getElementById('caption');
const snackbar = document.getElementById("snackbar");

var snackTimeout = null;

let touchstartX = 0;
let touchendX = 0;
let touchlastX = 0;
let touchspeedX = 0;

const navcontainer = document.querySelector(".navbuttons-container");
navBarOpen = false;

imageContainers.forEach((container, index) => {
    container.querySelectorAll('img,.playIcon').forEach((elt) => elt.addEventListener('click', () => {
        displayImage(index, modalMedia, true);
    }));
});

document.querySelectorAll('.linkcopy').forEach(element => {
    element.addEventListener('click', () => {
        copyLink(element.id);
    });
});

function isMobile() {
    return window.matchMedia("(max-width: 1000px)").matches;
}

function modalOpen() {
    return modal.style.display === 'flex';
}

function displayImage(index, media, displayCaption) {
    const modalImage = media.querySelector('.modal-image');
    const modalVideo = media.querySelector('.modal-video');

    const image = imageContainers[index].querySelector('img');
    const imageCaption = imageContainers[index].querySelector('.caption');

    if (image.src.includes("videothumbs/"))
    {
        modalImage.style.display = 'none';
        modalVideo.style.display = '';
        modalImage.src = '';
        modalVideo.src = image.src.replace("videothumbs/","").slice(0,-4);
    }
    else
    {
        modalImage.style.display = ''
        modalVideo.style.display = 'none';
        modalImage.src = image.src;
        modalVideo.src = '';
    }

    if (imageCaption != null)
    {
        if (displayCaption) caption.textContent = imageCaption.textContent;
    }
    else caption.textContent = "";
    modal.style.display = 'flex';
    document.body.style.overflow = "hidden";

    media.displayed = index;

    updateMediaSize(media);
}

function closeDisplay() {
    modalMedia.querySelector('.modal-video').pause();
    modal.style.display = 'none';
    document.body.style.overflow = "auto";
}
closeModal.addEventListener('click', closeDisplay);

function prevImage() {
    displayImage(mod(modalMedia.displayed - 1, imageContainers.length), modalMedia, true);
}
prevButton.addEventListener('click', prevImage);

function nextImage() {
    displayImage(mod(modalMedia.displayed + 1, imageContainers.length), modalMedia, true);
}
nextButton.addEventListener('click', nextImage);

document.addEventListener('keydown', (event) => {
    if (modalOpen()) {
        if (event.key === 'ArrowLeft') prevImage();
        else if (event.key === 'ArrowRight') nextImage();
        else if (event.key === 'Escape') closeDisplay();
    }
}, false);

document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
    touchlastX = touchstartX;
    modalMedia.style.transition = "";
});

document.addEventListener('touchmove', e => {
    let currentTouchPos = e.changedTouches[0].screenX;
    touchspeedX = touchlastX - currentTouchPos;
    modalMedia.style.transform = `translateX(${currentTouchPos - touchstartX}px)`;
    touchlastX = currentTouchPos;
});

document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    if(modalOpen())
    {
        if(Math.abs(touchendX-touchstartX)>(window.screen.width/2) || touchspeedX>(window.screen.width/30) ) {
            if (touchendX > touchstartX) {
                modalMedia.style.transform = `translateX(${-window.screen.width*2}px)`;
                prevImage();
            }
            if (touchendX < touchstartX) {
                modalMedia.style.transform = `translateX(${window.screen.width*2}px)`;
                nextImage();
            }
        }
        modalMedia.style.transition = "transform 0.2s";
        modalMedia.style.transform = "";
    }
});

window.addEventListener('resize', () => {
    if (modalOpen()) updateMediaSize(modalMedia);
    updateNavBar();
});

function updateMediaSize(media) {
    const modalImage = media.querySelector('.modal-image');
    const modalVideo = media.querySelector('.modal-video');
    let windowRatio;
    let mediaRatio;

    if (modalImage.style.display == '') mediaRatio = modalImage.naturalWidth / modalImage.naturalHeight;
    else mediaRatio = modalVideo.videoWidth / modalVideo.videoHeight;

    if (isMobile()) {
        windowRatio = window.innerWidth / (window.innerHeight * 0.9);
        media.style.maxWidth = "100%";
        media.style.maxHeight = "90%";
    }
    else {
        windowRatio = (window.innerWidth * 0.9) / (window.innerHeight * 0.8);
        media.style.maxWidth = "90%";
        media.style.maxHeight = "80%";
    }

    if (mediaRatio > windowRatio) {
        media.style.width = media.style.maxWidth;
        media.style.height = "auto";
    }
    else {
        media.style.width = "auto";
        media.style.height = media.style.maxHeight;
    }
}

function showSnack(message) {
    if (snackTimeout) {
        clearTimeout(snackTimeout);
        hideSnack();
    }
    snackbar.className = "show";
    snackbar.innerHTML = message;
    snackTimeout = setTimeout(hideSnack, 3000);
}

function hideSnack() {
    var snackbar = document.getElementById("snackbar");
    snackbar.className = snackbar.className.replace("show", "");
    snackTimeout = null;
}

function copyDiscordID() {
    navigator.clipboard.writeText("mortimer_kerman");
    showSnack(getLoc("copiedUsername", `Copied Discord username to clipboard: mortimer_kerman`));
}

function copyLink(link) {
    url = `${window.location.protocol}//${window.location.hostname}${window.location.pathname}#${link}`;
    navigator.clipboard.writeText(url);
    showSnack(getLoc("copiedLink", `Copied link to clipboard`));
}

function mod(n, m) {
    return ((n % m) + m) % m;
}

function mentionBuddy(buddy) {
    window.scrollTo({top:document.body.scrollHeight});
    const buddyPP = document.getElementById(buddy);
    if (buddyPP.classList.contains("rotate")) buddyPP.classList.remove("rotate");
    buddyPP.classList.add("rotate");
    setTimeout(function () { buddyPP.classList.remove("rotate"); }, 1000);
}

function openNavBar()
{
    navcontainer.style.width = "90px";
    navcontainer.style.overflowX = "visible";
    navBarOpen = true;
}
  
function closeNavBar()
{
    navcontainer.style.width = "0";
    navcontainer.style.overflowX = "hidden";
    navBarOpen = false;
}

function resetNavBar()
{
    navcontainer.style.width = "unset";
    navcontainer.style.overflowX = "unset";
    navBarOpen = false;
}

function updateNavBar()
{
    if (isMobile())
    {
        if (!navBarOpen) closeNavBar();
    }
    else resetNavBar();
}
