const track = document.querySelector('.carousel-track');
const images = Array.from(track.children); 
const mainImage = document.querySelector('.main-img'); 
const prevButton = document.querySelector('.button-prev'); 
const nextButton = document.querySelector('.button-next'); 

let currentIndex = 0; 

function updateMainImage(index) {
images.forEach(img => img.classList.remove('active'));
images[index].classList.add('active');
// Updates image and alt
mainImage.src = images[index].src;
mainImage.alt = images[index].alt;
}

// Scroll to the selected image in the vertical carousel
function scrollToImage(index) {
const selectedImage = images[index];
selectedImage.scrollIntoView({
  behavior: 'smooth',
  block: 'nearest',
});
}

prevButton.addEventListener('click', () => {
if (currentIndex > 0) {
  currentIndex--;
  updateMainImage(currentIndex);
  scrollToImage(currentIndex);
  }
});

nextButton.addEventListener('click', () => {
if (currentIndex < images.length - 1) {
  currentIndex++;
  updateMainImage(currentIndex);
  scrollToImage(currentIndex);
  }
});


//makes track clickable
images.forEach((img, index) => {
img.addEventListener('click', () => {
  currentIndex = index; 
  updateMainImage(currentIndex);
  });
});

//default 1st image
updateMainImage(0);




