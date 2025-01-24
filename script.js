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
    "CoupDeMainxBeabadoobee.gif": {
      video: "./works/CoupDeMainxBeabadoobee.mov",
      client: "Coup De Main",
      description: "Beabadoobee Zine Animated Promo",
    },
    "WildflowerCasesFruitTart.gif": {
      video: "./works/WildflowerCasesFruitTart.MOV",
      client: "Wildflower Cases",
      description: '"Fruit Tart" Social Campaign',
    },
    "FarfetchFuse.gif": {
      video: "./works/FarfetchFuse.mp4",
      client: "Farfetch Fuse",
      description: "Social Campaign",
    },
    "CelineKwan.gif": {
      video: "./works/CelineKwan.mp4",
      client: "Celine Kwan",
      description: '"Holly" t-shirt Social Campaign',
    },
    "KateSpadeArmsSocialCampaign.gif": {
      video: "./works/KateSpadeArmsSocialCampaign.MP4",
      client: "Kate Spade",
      description: "\"Social Campaign for 'the kate spade arms'\"",
    },
    "BigSillyTriviaxMeta.gif": {
      video: "./works/BigSillyTriviaxMeta.mp4",
      client: "The Big Silly Trivia Game",
      description: "The Big Silly Trivia Game x Meta Promo",
    },
    "TaePark.gif": {
      video: "./works/TaePark.mp4",
      client: "Tae Park",
      description: "Dog Mascot Tee Social Campaign",
    },
    "760Animation.gif": {
      video: "./works/760Animation.mov",
      client: "I'm not a morning person",
      description: "Graphics + Animation",
    },
    "YeahItsJewelryAnimation.gif": {
      video: "./works/YeahItsJewelryAnimation.mov",
      client: "Yeah It's Jewelry",
      description: "Social Campaign / Pop-up Store Visuals",
    },
    "WildflowerCasesKittenAround.gif": {
      video: "./works/WildflowerCasesKittenAround.MOV",
      client: "Wildflower Cases",
      description: '"Kitten Around" Social Campaign',
    },
    "TheBigSillyTriviaGameIntro.gif": {
      video: "./works/TheBigSillyTriviaGameIntro.mov",
      client: "The Big Silly Trivia Game",
      description: "The Big Silly Trivia Game x Meta Promo",
    },
    "CoupDeMainxMayaHawke.gif": {
      video: "./works/CoupDeMainxMayaHawke.mp4",
      client: "Coup De Main",
      description: "Maya Hawke Zine Animated Promo",
    },
    "flowerovlove.gif": {
      video: "./works/flowerovlove.mov",
      client: "Flowerovlove",
      description: "Live Show Backgrounds",
    },
    "FarfetchHoliday.gif": {
      video: "./works/FarfetchHoliday.mp4",
      client: "Farfetch",
      description: "Holiday Social Campaign",
    },
    "VonDutchTIkTokPromo.gif": {
      video: "./works/VonDutchTIkTokPromo.MOV",
      client: "Atlantic Records",
      description: '"Von Dutch" by Charli XCX Music Promo',
    },
    "BigSillyTriviaxBarneysHourglass.gif": {
      video: "./works/BigSillyTriviaxBarneysHourglass.mov",
      client: "The Big Silly Trivia Game",
      description: "TBSG x Barneys x Hourglass Promo",
    },
    "JulietIvyPlaypen1.gif": {
      video: "./works/JulietIvyPlaypen1.mov",
      client: "Juliet Ivy",
      description: '"playpen" EP Spotify Canvas',
    },
    "PrettyThoughtless.gif": {
      video: "./works/PrettyThoughtless.mov",
      client: "Pretty Thoughtless",
      description: "Podcast Intro",
    },
    "Eleasium.gif": {
      video: "./works/Eleasium.mp4",
      client: "Eleasium",
      description: "Web Animation",
    },
  };

  // Handle click events on gallery images
  document.querySelectorAll(".gallery img").forEach((image) => {
    image.onclick = function () {
      const gifFileName = this.src.split("/").pop(); // Get the file name of the clicked GIF
      const videoData = videoPaths[gifFileName]; // Find the corresponding video, client, and description

      if (!videoData) {
        console.error(`Video not found for: ${gifFileName}`);
        return;
      }

      // Create a video element and set its attributes
      const videoElement = document.createElement("video");
      videoElement.src = videoData.video;
      videoElement.setAttribute("controls", "true");
      videoElement.setAttribute("autoplay", "true");

      // Update the modal content
      modalContent.innerHTML = "";

      // Create and style client and description elements
      const clientElement = document.createElement("div");
      clientElement.textContent = videoData.client;
      clientElement.style.textAlign = "center"; // Center align client
      clientElement.style.marginBottom = "10px"; // Space between client and video
      clientElement.style.textColor = "white"; // Center align description
      modalContent.appendChild(clientElement);

      // Append the video
      modalContent.appendChild(videoElement);

      const descriptionElement = document.createElement("div");
      descriptionElement.textContent = videoData.description;
      descriptionElement.style.textAlign = "center"; // Center align description
      descriptionElement.style.marginBottom = "10px"; // Space between video and description
      descriptionElement.style.textColor = "white"; // Center align description
      descriptionElement.style.bottom = "0";
      descriptionElement.style.position = "fixed";
      descriptionElement.style.left = "50vw";
      descriptionElement.style.transform = "translate(-50%, -50%)";

      modalContent.appendChild(descriptionElement);

      // Show the modal
      modal.style.display = "block";
    };
  });

  // Close the modal when clicking outside of the modal content
  modal.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      modalContent.innerHTML = ""; // Clear modal content
    }
  };

  // Close the modal using the close button
  closeBtn.onclick = function () {
    modal.style.display = "none";
    modalContent.innerHTML = ""; // Clear modal content
  };
});
