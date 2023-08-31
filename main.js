const imageContainers = document.querySelectorAll('.image-container');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalVideo = document.getElementById('modal-video');
const closeModal = document.querySelector('.close');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const caption = document.getElementById('caption');

let currentIndex = 0;

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

    
    caption.textContent = imageCaption.textContent;
    modal.style.display = 'flex';
    document.body.style.overflow = "hidden";
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

document.querySelectorAll('div.discord-logo').forEach((logo) => {
    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgElement.setAttribute('viewBox', '0 0 256 256');
    svgElement.setAttribute('width', logo.getAttribute('width'));
    svgElement.setAttribute('height', logo.getAttribute('height'));
    svgElement.setAttribute('class', logo.getAttribute('class'));
    svgElement.innerHTML = `<path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="#FFFFFF" fill-rule="nonzero"/>`;
    logo.parentNode.replaceChild(svgElement, logo);
});

document.querySelectorAll('div.github-logo').forEach((logo) => {
    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgElement.setAttribute('viewBox', '0 0 24 24');
    svgElement.setAttribute('width', logo.getAttribute('width'));
    svgElement.setAttribute('height', logo.getAttribute('height'));
    svgElement.setAttribute('class', logo.getAttribute('class'));
    svgElement.innerHTML = `<path d="M12 0a12 12 0 0 0-3.794 23.383c.6.112.821-.261.821-.577v-2.308c-3.338.728-4.042-1.607-4.042-1.607a3.162 3.162 0 0 0-1.318-1.742c-1.078-.738.081-.723.081-.723a2.52 2.52 0 0 1 1.83 1.231a2.544 2.544 0 0 0 3.478.99a2.544 2.544 0 0 1 .754-1.596c-2.643-.299-5.417-1.32-5.417-5.875a4.6 4.6 0 0 1 1.225-3.185a4.267 4.267 0 0 1 .116-3.14s1.007-.318 3.3 1.219a11.265 11.265 0 0 1 6 0c2.292-1.537 3.298-1.219 3.298-1.219a4.267 4.267 0 0 1 .116 3.140a4.6 4.6 0 0 1 1.225 3.185c0 4.567-2.775 5.576-5.424 5.867a2.848 2.848 0 0 1 .812 2.211v3.273c0 .32.218.694.831.577A12 12 0 0 0 12 0z" fill="#FFFFFF"/>`;
    logo.parentNode.replaceChild(svgElement, logo);
});

document.querySelectorAll('a').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
});

function isMobile() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

document.querySelector('html').setAttribute('isMobile', isMobile());
