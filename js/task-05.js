const formRef = document.querySelector("input#name-input");
const greetingRef = document.querySelector("span#name-output");

formRef.addEventListener("input", (event) => {
  if (event.currentTarget.value !== "") {
    greetingRef.textContent = event.currentTarget.value;
  } else {
    greetingRef.textContent = "Anonymous";
  }
});
