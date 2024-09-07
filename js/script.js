// Select the buttons and the social media container
const shareButtons = document.querySelectorAll('.svg-container, .svg-container-mobile');
const socialMediaContainer = document.querySelector('.social-media');

// Function to toggle the visibility of the social media container
function toggleShareIcons() {
  // Toggle the 'show' class to show/hide the social media container
  socialMediaContainer.classList.toggle('show');
}

// Add click event listeners to all share buttons
shareButtons.forEach(button => button.addEventListener('click', toggleShareIcons));
