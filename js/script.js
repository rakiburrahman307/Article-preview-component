const shareButtons = document.querySelectorAll(
  ".svg-container, .svg-container-mobile"
);
const socialMediaContainer = document.querySelector(".social-media");
// toggle the button
const handleToggleButton = () => {
  socialMediaContainer.classList.toggle("show");
};
// click multiple buttons
shareButtons.forEach((button) =>
  button.addEventListener("click", handleToggleButton)
);
