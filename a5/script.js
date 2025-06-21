const images = [
  {
    src: "https://ceoworld.biz/wp-content/uploads/2021/08/Bugs-Bunny.jpg",
    description: "Bugs Bunny"
  },
  {
    src: "https://thewittyblog.com/wp-content/uploads/2020/04/pooh-e1587660064143.jpg",
    description: "Winnie the Pooh"
  },
  {
    src: "https://occ-0-8407-116.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABR6vn8BtaC8r6FhDOfMCliOri5vm4p5bCnxzV61blyd_QJP0qr8VdYGGyoFxkLfwDc1nDVqf4ilKrmD1XquOAlXD29EyAM4UbC4i.jpg?r=54a",
    description: "Ben 10"
  },
  {
    src: "https://i.redd.it/wdfo3bbxdvva1.jpg",
    description: "Scooby-Doo"
  },
  {
    src: "https://m.media-amazon.com/images/S/pv-target-images/4f995dde6b43fbe45bab9336476a66df17cc83270f06bc5e73492d21edcf7bef.jpg",
    description: "Tom and Jerry"
  }
];

let currentIndex = 0;

const imageDisplay = document.getElementById('image-display');
const imageDescription = document.getElementById('image-description');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateImage() {
  imageDisplay.src = images[currentIndex].src;
  imageDisplay.alt = images[currentIndex].description;
  imageDescription.textContent = images[currentIndex].description;
}


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
