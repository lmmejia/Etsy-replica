//Carousel javascript
const track = document.querySelector('.carousel-track');
const images = Array.from(track.children); 
const mainImage = document.querySelector('.main-img'); 
const prevButton = document.querySelector('.button-prev'); 
const nextButton = document.querySelector('.button-next'); 

let currentIndex = 0; 

function updateMainImage(index) {
images.forEach(img => img.classList.remove('active'));
images[index].classList.add('active');

// Updates image
mainImage.src = images[index].src;
mainImage.alt = images[index].alt;
}

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



//heart button fill
const button = document.querySelector('.carousel-button');

const heartSVG1 = `
    <svg class="heart1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z"></path>
    </svg>
`;
const heartSVG2 = `
    <svg class="heart2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z"></path>
    </svg>
`;

button.addEventListener('click', function () {
    if (button.innerHTML.includes('M12,21')) {
        button.innerHTML = heartSVG2; 
    } else {
        button.innerHTML = heartSVG1; 
    }
});



//Dropdown
function toggleContent() {
  const hiddenParagraphs = document.querySelectorAll('.more');
  const button = document.querySelector('#read'); 
  const fadeParagraph = document.querySelector('.fade');

  hiddenParagraphs.forEach(p => {
    p.classList.toggle('visible'); 
  });
  
  if (fadeParagraph.classList.contains('fade')) {
    fadeParagraph.classList.remove('fade');  
  } else {
    fadeParagraph.classList.add('fade');  
  }

  //changes button text
  if (button.innerHTML == "Learn more about this item") {
    button.innerHTML = "Less"; 
  } 
  else {
    button.innerHTML = "Learn more about this item";
  }
}


