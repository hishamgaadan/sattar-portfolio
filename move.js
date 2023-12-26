// document.querySelector(".button0").onclick = function () {
//   window.scrollTo(1000, document.body.scrollHeight);
// };

// document.querySelector(".button0").onclick = function () {
//   document.body.scrollIntoView({ behavior: "smooth" });
// };

document.querySelector(".button0").onclick = function () {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};

document.querySelector(".button01").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// const text = `Hello there! I'm Sattar, a passionate 24-year-old graphic designer hailing from the vibrant and culturally rich landscape of Iraq. Creativity has always been my driving force, and I thrive ontransforming ideas into visually compelling designs.
// My journey in the world of graphic design has been an exciting one, marked by acommitment to excellence and a keen eye for detail.`;
// let index = 0;

// function type() {
//   document.querySelector(".effect1").textContent += text[index];
//   index++;
//   if (index >= text.length) {
//     clearInterval(timer);
//   }
// }

const text = `Hello there! I'm Sattar, a passionate 24-year-old graphic designer hailing from the vibrant and culturally rich landscape of Iraq. Creativity has always been my driving force, and I thrive ontransforming ideas into visually compelling designs.


My journey in the world of graphic design has been an exciting one, marked by acommitment to excellence and a keen eye for detail.`;
let index = 0;

function type() {
  document.querySelector(".effect1").textContent += text[index];
  index++;
  if (index >= text.length) {
    clearInterval(timer);
  }
}

const timer = setInterval(type, 100);

// const text = "Hello, world!";
// let index = 0;

// function type() {
//   document.querySelector("p").textContent += text[index];
//   index++;
//   if (index >= text.length) {
//     clearInterval(timer);
//   }
// }

// const timer = setInterval(type, 100);
// const text = "Hello,<br>world!";
// let index = 0;

// function type() {
//   const char = text[index];
//   if (char === "<") {
//     document.querySelector("p").innerHTML += "<br>";
//     index += 4; // skip over the '<br>' tag
//   } else {
//     document.querySelector(".effect").textContent += char;
//     index++;
//   }
//   if (index >= text.length) {
//     clearInterval(timer);
//   }
// }

// const timer = setInterval(type, 100);

// const timer = setInterval(type, 100);

// const images = document.querySelectorAll(".imgslide");
// const lightbox = document.createElement("div");
// lightbox.id = "lightbox";
// document.body.appendChild(lightbox);

// images.forEach((image) => {
//   image.addEventListener("click", (e) => {
//     lightbox.classList.add("active");
//     const img = document.createElement("img");
//     img.src = image.src;
//     while (lightbox.firstChild) {
//       lightbox.removeChild(lightbox.firstChild);
//     }
//     lightbox.appendChild(img);
//   });
// });

// lightbox.addEventListener("click", (e) => {
//   if (e.target !== e.currentTarget) return;
//   lightbox.classList.remove("active");
// });

const images = document.querySelectorAll(".imgslide");
const lightbox = document.querySelector("#lightbox");

let currentImageIndex = 0;

function showImage(index) {
  const img = document.createElement("img");
  img.src = images[index].src;
  while (lightbox.firstChild) {
    lightbox.removeChild(lightbox.firstChild);
  }
  lightbox.appendChild(img);
  currentImageIndex = index;
}

function nextImage() {
  if (currentImageIndex === images.length - 1) {
    showImage(0);
  } else {
    showImage(currentImageIndex + 1);
  }
}

function prevImage() {
  if (currentImageIndex === 0) {
    showImage(images.length - 1);
  } else {
    showImage(currentImageIndex - 1);
  }
}

images.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    lightbox.classList.add("active");
    showImage(index);
  });
});

const prevButton = document.createElement("button");
prevButton.id = "prevButton";
prevButton.textContent = "Prev";
prevButton.addEventListener("click", prevImage);
lightbox.appendChild(prevButton);

const nextButton = document.createElement("button");
nextButton.id = "nextButton";
nextButton.textContent = "Next";
nextButton.addEventListener("click", nextImage);
lightbox.appendChild(nextButton);

lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("active");
});


