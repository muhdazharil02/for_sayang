// Array of images and texts to cycle through
const slides = [
    {
        img: "WhatsApp Image 2024-11-12 at 21.08.30_c83108e1.jpg",
        name: "Nurul Jannah",
        description: "A special person who brings joy, laughter, and kindness to the world."
    },
    {
        img: "WhatsApp Image 2024-11-13 at 22.15.53_254f6177.jpg",
        name: "Nurul Jannah - Adventurer",
        description: "An adventurous spirit who loves exploring new places and experiencing life."
    },
    {
        img: "WhatsApp Image 2024-11-13 at 22.18.46_983d7003.jpg",
        name: "Nurul Jannah - Dreamer",
        description: "A dreamer who inspires those around her to reach for the stars."
    }
];


let currentSlide = 0;
let buttonTimeout;

function nextSlide() {
    clearTimeout(buttonTimeout);

    // Increment the current slide index
    currentSlide = (currentSlide + 1) % slides.length;

    const photo = document.getElementById("profile-photo");
    const name = document.getElementById("name");
    const description = document.getElementById("description");
    const nextPageBtn = document.getElementById("next-page-btn");

    // Update content
    photo.src = slides[currentSlide].img;
    name.textContent = slides[currentSlide].name;
    description.textContent = slides[currentSlide].description;

    // Check if it's the last slide
    if (currentSlide === slides.length - 1) {
        // Add animation class to the last photo
        photo.classList.add("move");

        // Show the button with a 5-second delay
        buttonTimeout = setTimeout(() => {
            nextPageBtn.style.display = "block";
        }, 2000);
    } else {
        // Remove animation and hide the button for other slides
        photo.classList.remove("move");
        nextPageBtn.style.display = "none";
    }
}

// Function to go to the next page
function goToNextPage() {
    window.location.href = "pink-flowers.html"; // Replace with your target page URL
}

window.onload = () => {
    // Wait 3 seconds after page load, then show picture and final text
    setTimeout(() => {
        document.querySelector(".intro-text").style.display = "none"; // Hide intro text
        const content = document.querySelector(".content");
        content.classList.remove("hidden"); // Show final content
        content.style.animation = "fadeInContent 2s forwards"; // Apply fade-in effect
    }, 3000); // 3 seconds delay
};
