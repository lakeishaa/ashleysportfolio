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
