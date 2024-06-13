const imageContainers = document.querySelectorAll('.image-container');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalVideo = document.getElementById('modal-video');
const closeModal = document.querySelector('.close');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const caption = document.getElementById('caption');
const snackbar = document.getElementById("snackbar");

var snackTimeout = null;

let currentIndex = 0;

let touchstartX = 0;
let touchendX = 0;

imageContainers.forEach((container, index) => {
    container.addEventListener('click', () => {
        currentIndex = index;
        displayImage(currentIndex);
    });
});

function displayImage(index) {
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

    if (imageCaption != null) caption.textContent = imageCaption.textContent;
    else caption.textContent = "";
    modal.style.display = 'flex';
    document.body.style.overflow = "hidden";

    updateMediaSize();
}

function closeDisplay() {
    modalVideo.pause();
    modal.style.display = 'none';
    document.body.style.overflow = "auto";
}

function prevImage() {
    if (currentIndex > 0) currentIndex--;
    else currentIndex = imageContainers.length - 1;
    displayImage(currentIndex);
}

function nextImage() {
    if (currentIndex < imageContainers.length - 1) currentIndex++;
    else currentIndex = 0;
    displayImage(currentIndex);
}

closeModal.addEventListener('click', closeDisplay);

prevButton.addEventListener('click', prevImage);

nextButton.addEventListener('click', nextImage);

document.addEventListener('keydown', (event) => {
    if (modal.style.display === 'flex') {
        if (event.key === 'ArrowLeft') prevImage();
        else if (event.key === 'ArrowRight') nextImage();
        else if (event.key === 'Escape') closeDisplay();
    }
}, false);

document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    if(modal.style.display === 'flex') {
        if (touchendX > touchstartX) prevImage();
        if (touchendX < touchstartX) nextImage();
    }
});

window.addEventListener('resize', e => {
    if (modal.style.display === 'flex') updateMediaSize();
});

function updateMediaSize() {

    var modalMedia;
    var windowRatio;
    var mediaRatio;
    var isMobile = window.matchMedia("(max-width: 1000px)").matches;

    if (modalImage.style.display == '') {
        modalMedia = modalImage;
        mediaRatio = modalImage.naturalWidth / modalImage.naturalHeight;
    }
    else {
        modalMedia = modalVideo;
        mediaRatio = modalVideo.videoWidth / modalVideo.videoHeight;
    }

    if (isMobile) {
        windowRatio = window.innerWidth / (window.innerHeight * 0.9);
        modalMedia.style.maxWidth = "100%";
		modalMedia.style.maxHeight = "90%";
        if (mediaRatio > windowRatio) {
            modalMedia.style.width = "100%";
            modalMedia.style.height = "auto";
        }
        else {
            modalMedia.style.width = "auto";
            modalMedia.style.height = "90%";
        }
    }
    else {
        windowRatio = (window.innerWidth * 0.9) / (window.innerHeight * 0.8);
        modalMedia.style.maxWidth = "90%";
		modalMedia.style.maxHeight = "80%";
        if (mediaRatio > windowRatio) {
            modalMedia.style.width = "90%";
            modalMedia.style.height = "auto";
        }
        else {
            modalMedia.style.width = "auto";
            modalMedia.style.height = "80%";
        }
    }
}

document.querySelectorAll('div.github-logo').forEach((logo) => {
    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.setAttribute('viewBox', '0 0 24 24');
    svgElement.setAttribute('width', logo.getAttribute('width'));
    svgElement.setAttribute('height', logo.getAttribute('height'));
    svgElement.setAttribute('class', logo.getAttribute('class'));
    svgElement.setAttribute('fill', '#FFFFFF');
    svgElement.innerHTML = `<path d="M12 0a12 12 0 0 0-3.794 23.383c.6.112.821-.261.821-.577v-2.308c-3.338.728-4.042-1.607-4.042-1.607a3.162 3.162 0 0 0-1.318-1.742c-1.078-.738.081-.723.081-.723a2.52 2.52 0 0 1 1.83 1.231a2.544 2.544 0 0 0 3.478.99a2.544 2.544 0 0 1 .754-1.596c-2.643-.299-5.417-1.32-5.417-5.875a4.6 4.6 0 0 1 1.225-3.185a4.267 4.267 0 0 1 .116-3.14s1.007-.318 3.3 1.219a11.265 11.265 0 0 1 6 0c2.292-1.537 3.298-1.219 3.298-1.219a4.267 4.267 0 0 1 .116 3.140a4.6 4.6 0 0 1 1.225 3.185c0 4.567-2.775 5.576-5.424 5.867a2.848 2.848 0 0 1 .812 2.211v3.273c0 .32.218.694.831.577A12 12 0 0 0 12 0z"/>`;
    logo.parentNode.replaceChild(svgElement, logo);
});

document.querySelectorAll('div.discord-logo').forEach((logo) => {
    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.setAttribute('viewBox', '0 0 256 256');
    svgElement.setAttribute('width', logo.getAttribute('width'));
    svgElement.setAttribute('height', logo.getAttribute('height'));
    svgElement.setAttribute('class', logo.getAttribute('class'));
    svgElement.setAttribute('fill', '#FFFFFF');
    svgElement.innerHTML = `<path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill-rule="nonzero"/>`;
    logo.parentNode.replaceChild(svgElement, logo);
});

document.querySelectorAll('div.reddit-logo').forEach((logo) => {
    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.setAttribute('viewBox', '0 0 90 90');
    svgElement.setAttribute('width', logo.getAttribute('width'));
    svgElement.setAttribute('height', logo.getAttribute('height'));
    svgElement.setAttribute('class', logo.getAttribute('class'));
    svgElement.setAttribute('style', 'padding: 0px;');
    svgElement.setAttribute('fill', '#FFFFFF');
    svgElement.innerHTML = `<circle cx="45" cy="45" r="45"/><path d="M 75.011 45 c -0.134 -3.624 -3.177 -6.454 -6.812 -6.331 c -1.611 0.056 -3.143 0.716 -4.306 1.823 c -5.123 -3.49 -11.141 -5.403 -17.327 -5.537 l 2.919 -14.038 l 9.631 2.025 c 0.268 2.472 2.483 4.262 4.955 3.993 c 2.472 -0.268 4.262 -2.483 3.993 -4.955 s -2.483 -4.262 -4.955 -3.993 c -1.421 0.145 -2.696 0.973 -3.4 2.204 L 48.68 17.987 c -0.749 -0.168 -1.499 0.302 -1.667 1.063 c 0 0.011 0 0.011 0 0.022 l -3.322 15.615 c -6.264 0.101 -12.36 2.025 -17.55 5.537 c -2.64 -2.483 -6.801 -2.36 -9.284 0.291 c -2.483 2.64 -2.36 6.801 0.291 9.284 c 0.515 0.481 1.107 0.895 1.767 1.186 c -0.045 0.66 -0.045 1.32 0 1.98 c 0 10.078 11.745 18.277 26.23 18.277 c 14.485 0 26.23 -8.188 26.23 -18.277 c 0.045 -0.66 0.045 -1.32 0 -1.98 C 73.635 49.855 75.056 47.528 75.011 45 z M 30.011 49.508 c 0 -2.483 2.025 -4.508 4.508 -4.508 c 2.483 0 4.508 2.025 4.508 4.508 s -2.025 4.508 -4.508 4.508 C 32.025 53.993 30.011 51.991 30.011 49.508 z M 56.152 62.058 v -0.179 c -3.199 2.405 -7.114 3.635 -11.119 3.468 c -4.005 0.168 -7.919 -1.063 -11.119 -3.468 c -0.425 -0.515 -0.347 -1.286 0.168 -1.711 c 0.447 -0.369 1.085 -0.369 1.544 0 c 2.707 1.98 6.007 2.987 9.362 2.83 c 3.356 0.179 6.667 -0.783 9.407 -2.74 c 0.492 -0.481 1.297 -0.47 1.779 0.022 C 56.655 60.772 56.644 61.577 56.152 62.058 z M 55.537 54.34 c -0.078 0 -0.145 0 -0.224 0 l 0.034 -0.168 c -2.483 0 -4.508 -2.025 -4.508 -4.508 s 2.025 -4.508 4.508 -4.508 s 4.508 2.025 4.508 4.508 C 59.955 52.148 58.02 54.239 55.537 54.34 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />`;
    logo.parentNode.replaceChild(svgElement, logo);
});

document.querySelectorAll('div.playIcon').forEach((icon) => {
    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.setAttribute('viewBox', '0 0 459 459');
    svgElement.setAttribute('width', icon.getAttribute('width'));
    svgElement.setAttribute('height', icon.getAttribute('height'));
    svgElement.setAttribute('class', icon.getAttribute('class'));
    svgElement.innerHTML = `<path d="M229.5,0C102.751,0,0,102.751,0,229.5S102.751,459,229.5,459S459,356.249,459,229.5S356.249,0,229.5,0z M310.292,239.651 l-111.764,76.084c-3.761,2.56-8.63,2.831-12.652,0.704c-4.022-2.128-6.538-6.305-6.538-10.855V153.416 c0-4.55,2.516-8.727,6.538-10.855c4.022-2.127,8.891-1.857,12.652,0.704l111.764,76.084c3.359,2.287,5.37,6.087,5.37,10.151 C315.662,233.564,313.652,237.364,310.292,239.651z"/>`;
    icon.parentNode.replaceChild(svgElement, icon);
});

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
