var link = document.querySelector(".feedback-btn");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-feedback-close");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=user-mail]");
var area = popup.querySelector("[name=write-area]");

      var storage = localStorage.getItem("login");

      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-feedback-show");

        if (storage) {
          login.value = storage;
          password.focus();
        } else {
          login.focus();
        }

      });
      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-feedback-show");
        popup.classList.remove("modal-error");
      });
/**/
      form.addEventListener("submit", function(event) {
        if (!name.value) {
          event.preventDefault();
          popup.classList.remove("modal-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-error");
        } else {
        }
      });

/**/

 window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("modal-feedback-show")) {
            popup.classList.remove("modal-feedback-show");
            popup.classList.remove("modal-error");
          }
        }
      });