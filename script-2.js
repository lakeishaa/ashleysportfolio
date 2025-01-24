document.addEventListener("DOMContentLoaded", () => {
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

  // Modal handling
  const modal = document.getElementById("imageModal");
  const closeBtn = document.getElementById("closeModal");
  const modalContent = document.getElementById("modalImage");

  // Ensure modal elements are found
  if (!modal || !closeBtn || !modalContent) {
    console.error("Modal elements are missing from the DOM.");
    return;
  }

  // Define video paths for each gallery item
  const videoPaths = {
    "CoupDeMainxBeabadoobee.gif": "./works/CoupDeMainxBeabadoobee.mov",
    "WildflowerCasesFruitTart.gif": "./works/WildflowerCasesFruitTart.MOV",
    "FarfetchFuse.gif": "./works/FarfetchFuse.mp4",
    "CelineKwan.gif": "./works/CelineKwan.mp4",
    "KateSpadeArmsSocialCampaign.gif":
      "./works/KateSpadeArmsSocialCampaign.MP4",
    "BigSillyTriviaxMeta.gif": "./works/BigSillyTriviaxMeta.mp4",
    "TaePark.gif": "./works/TaePark.mp4",
    "760Animation.gif": "./works/760Animation.mov",
    "YeahItsJewelryAnimation.gif": "./works/YeahItsJewelryAnimation.mov",
    "WildflowerCasesKittenAround.gif":
      "./works/WildflowerCasesKittenAround.MOV",
    "TheBigSillyTriviaGameIntro.gif": "./works/TheBigSillyTriviaGameIntro.mov",
    "CoupDeMainxMayaHawke.gif": "./works/CoupDeMainxMayaHawke.mp4",
    "flowerovlove.gif": "./works/flowerovlove.mov",
    "FarfetchHoliday.gif": "./works/FarfetchHoliday.mp4",
    "VonDutchTIkTokPromo.gif": "./works/VonDutchTIkTokPromo.MOV",
    "BigSillyTriviaxBarneysHourglass.gif":
      "./works/BigSillyTriviaxBarneysHourglass.mov",
    "JulietIvyPlaypen1.gif": "./works/JulietIvyPlaypen1.mov",
    "PrettyThoughtless.gif": "./works/PrettyThoughtless.mov",
    "Eleasium.gif": "./works/Eleasium.mp4",
  };

  // Handle click events on gallery images
  document.querySelectorAll(".gallery img").forEach((image) => {
    image.onclick = function () {
      const gifFileName = this.src.split("/").pop(); // Get the file name of the clicked GIF
      const videoPath = videoPaths[gifFileName]; // Find the corresponding video path

      if (!videoPath) {
        console.error(`Video not found for: ${gifFileName}`);
        return;
      }

      // Create a video element and set its attributes
      const videoElement = document.createElement("video");
      videoElement.src = videoPath;
      videoElement.controls = true;
      videoElement.autoplay = true;

      // Clear existing content and append the video
      modalContent.innerHTML = ""; // Clear previous content
      modalContent.appendChild(videoElement);

      // Show the modal
      modal.style.display = "block";
    };
  });

  // Close the modal on clicking the close button
  closeBtn.onclick = function () {
    modal.style.display = "none";
    modalContent.innerHTML = ""; // Clear video content when modal is closed
  };

  // Close the modal when clicking outside the video
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      modalContent.innerHTML = ""; // Clear video content when modal is closed
    }
  };

  // Client and Description functions
  const client = (name, logoUrl) => {
    const clientDiv = document.createElement("div");
    clientDiv.classList.add("client");

    const logo = document.createElement("img");
    logo.src = logoUrl;
    logo.alt = `${name} logo`;

    const clientName = document.createElement("p");
    clientName.textContent = name;

    clientDiv.appendChild(logo);
    clientDiv.appendChild(clientName);
    return clientDiv;
  };

  const description = (text) => {
    const descDiv = document.createElement("div");
    descDiv.classList.add("description");
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    descDiv.appendChild(paragraph);
    return descDiv;
  };

  // Example usage of client and description functions
  const clientsContainer = document.getElementById("clientsContainer");
  const descriptionContainer = document.getElementById("descriptionContainer");

  // Add example clients to the page
  if (clientsContainer) {
    clientsContainer.appendChild(client("Client Name", "client-logo-url.png"));
  }

  // Add an example description
  if (descriptionContainer) {
    descriptionContainer.appendChild(
      description("This is a sample description of the project.")
    );
  }
});
