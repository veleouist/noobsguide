
// Lightbox 
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.getElementById('close');

// Add click event to all gallery images
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex'; // Show lightbox
        lightboxImg.src = img.src; // Set clicked image as lightbox image
    });
});

// Close the lightbox when the close button is clicked
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
