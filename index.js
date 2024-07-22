document.addEventListener("DOMContentLoaded", function() {
  // Select all FAQ titles
  let accordionTitles = document.getElementsByClassName("FAQ__title");

  // Iterate through each FAQ title
  for (let i = 0; i < accordionTitles.length; i++) {
    accordionTitles[i].addEventListener("click", function () {
      // Select the icon element within the current FAQ title
      let icon = this.querySelector(".fal");

      // Toggle between 'fa-plus' and 'fa-times' classes
      if (icon.classList.contains("fa-plus")) {
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-plus");
      }

      // Toggle the visibility of the FAQ content
      let content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
});
