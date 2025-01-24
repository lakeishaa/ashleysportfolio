let lastScrollTop = 0;
let isScrolling = false;
const stars = document.querySelectorAll(".star");
const rotationDirections = [];

// Assign random rotation directions (+1 or -1) for each star
stars.forEach(() => {
  rotationDirections.push(Math.random() > 0.5 ? 1 : -1);
});

const transformStars = () => {
  stars.forEach((star, index) => {
    const rotationSpeed = 10; // Rotation speed
    const scaleSpeed = 0.005; // Speed for scaling effect
    const rotationAngle =
      (lastScrollTop * rotationSpeed * rotationDirections[index]) % 360;

    // Scale oscillation (0.5 to 2.0 for a more dramatic effect)
    const scale = 1 + Math.sin(lastScrollTop * scaleSpeed + index) * 0.7;

    // Apply transform with rotation and scale
    star.style.transform = `rotate(${rotationAngle}deg) scale(${scale})`;
  });
};

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  lastScrollTop = scrollTop;
  if (!isScrolling) {
    isScrolling = true;
    requestAnimationFrame(() => {
      transformStars();
      isScrolling = false;
    });
  }
});

// MODAL HERE

// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal
var images = document.querySelectorAll(".gallery img");
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

// Loop through all images and add click event
images.forEach(function (image) {
  image.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;

    // Get the parent container of the clicked image
    var parent = this.closest(".item");

    // Get the client and description text
    var clientText = parent.querySelector("#client").innerText;
    var descriptionText = parent.querySelector("#description").innerText;

    // Display client and description text in the modal
    captionText.innerHTML = `<strong>Client:</strong> ${clientText}<br><strong>Description:</strong> ${descriptionText}`;
  };
});

// Get the close button
var closeBtn = document.getElementById("closeModal");

// When the user clicks on the close button, close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};
