const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const filterButtons = document.querySelectorAll('[data-filter]');

let currentIndex = 0;
let images = Array.from(galleryItems);

// Lightbox logic
galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    currentIndex = index;
    showImage();
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
});

function showImage() {
  const img = images[currentIndex].querySelector('img');
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
}

// Filtering logic
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    images = [];

    galleryItems.forEach(item => {
      const category = item.getAttribute('data-category');
      if (filter === 'all' || filter === category) {
        item.style.display = 'block';
        images.push(item);
      } else {
        item.style.display = 'none';
      }
    });
  });
});