const inputEl = document.querySelector("input#validation-input");

inputEl.addEventListener("blur", (event) => {
  let dataLength = inputEl.getAttribute("data-length");
  let eventLength = event.currentTarget.value.length;

  if (eventLength != dataLength) {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
});
