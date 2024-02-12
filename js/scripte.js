function myFunction(img) {
  document.getElementById("expandedImg").src = img.src;

  var fullScreenContainer = document.querySelector(".gallary-full-screen");
  fullScreenContainer.style.display = "block";

  function closeFullScreen() {
      fullScreenContainer.style.display = "none";
      fullScreenContainer.removeEventListener("click", closeFullScreen);
  }

  var closeButton = document.querySelector(".closebtn");
  closeButton.addEventListener("click", function (event) {
      event.stopPropagation();
      fullScreenContainer.style.display = "none";
  });

  fullScreenContainer.addEventListener("click", closeFullScreen);
}
