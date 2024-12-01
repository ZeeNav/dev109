const images = [
  {
      src: "https://ceoworld.biz/wp-content/uploads/2021/08/Bugs-Bunny.jpg",
      description: "Image 1: Bugs Bunny"
  },
  {
      src: "https://thewittyblog.com/wp-content/uploads/2020/04/pooh-e1587660064143.jpg",
      description: "Image 2: Winnie the Pooh"
  },
  {
      src: "https://images.moviesanywhere.com/3e2a9e774fc77bb450ce8724bb1c5d15/d6ecc248-d04f-4a3a-95e3-fcda262ad62f.jpg",
      description: "Image 3: Stuart little"
  },
  {
      src: "https://i.redd.it/wdfo3bbxdvva1.jpg",
      description: "Image 4: Scooby-Doo"
  },
  {
      src: "https://m.media-amazon.com/images/S/pv-target-images/4f995dde6b43fbe45bab9336476a66df17cc83270f06bc5e73492d21edcf7bef.jpg",
      description: "Image 5: Tom and Jerry"
  }
];

let currentIndex = 0;

const imageDisplay = document.getElementById('image-display');
const imageDescription = document.getElementById('image-description');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const updateImage = () => {
  imageDisplay.src = images[currentIndex].src;
  imageDescription.textContent = images[currentIndex].description;
};

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

let autoSlide = setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}, 5000);

imageDisplay.addEventListener('mouseover', () => clearInterval(autoSlide));
imageDisplay.addEventListener('mouseout', () => {
  autoSlide = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
  }, 5000);
});

updateImage();

