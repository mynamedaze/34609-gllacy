var inpu = document.querySelector(".e-mail");
if (inpu.value !== "")
  {
    inpu.classList.add("form-filled");
  } else {
    inpu.classList.remove('form-filled');
  }