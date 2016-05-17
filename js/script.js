var link = document.querySelector(".feedback-btn");
var popup = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".modal-feedback-close");
var storage = localStorage.getItem("login");
  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-feedback-show");
    overlay.classList.add("modal-overlay-show");
  });
  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-feedback-show");
    overlay.classList.remove("modal-overlay-show");
  });
 window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-feedback-show")) {
      popup.classList.remove("modal-feedback-show");
      overlay.classList.remove("modal-overlay-show");
    }
  }
});