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