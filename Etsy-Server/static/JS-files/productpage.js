const track = document.querySelector('.carousel-track');
const images = Array.from(track.children); // All images in the track
const mainImage = document.querySelector('.main-img'); // Main display image
const prevButton = document.querySelector('.button-prev'); // Prev button
const nextButton = document.querySelector('.button-next'); // Next button


let currentIndex = 0; // Track the current image index


// Function to update the main image
function updateMainImage(index) {
 // Remove the active class from all images
 images.forEach(img => img.classList.remove('active'));


 // Add the active class to the selected image
 images[index].classList.add('active');


 // Update the main image source and alt text
 mainImage.src = images[index].src;
 mainImage.alt = images[index].alt;
 console.log(`Main image updated to index: ${index}`); // Debug log
}


// Scroll to the selected image in the vertical carousel
function scrollToImage(index) {
 const selectedImage = images[index];
 selectedImage.scrollIntoView({
   behavior: 'smooth',
   block: 'nearest',
 });
 console.log(`Scrolled to image index: ${index}`); // Debug log
}


// Prev button logic
prevButton.addEventListener('click', () => {
 console.log('Prev button clicked'); // Debug log
 if (currentIndex > 0) {
   currentIndex--; // Move to the previous image
   updateMainImage(currentIndex);
   scrollToImage(currentIndex);
 }
});


// Next button logic
nextButton.addEventListener('click', () => {
 console.log('Next button clicked'); // Debug log
 if (currentIndex < images.length - 1) {
   currentIndex++; // Move to the next image
   updateMainImage(currentIndex);
   scrollToImage(currentIndex);
 }
});


// Add click event listeners to all images
images.forEach((img, index) => {
 img.addEventListener('click', () => {
   currentIndex = index; // Set the clicked image as the current index
   updateMainImage(currentIndex);
 });
});


// Initialize the first image
updateMainImage(0);




