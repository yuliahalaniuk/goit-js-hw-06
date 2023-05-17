const controlEl = document.querySelector("input#font-size-control");
const textEl = document.querySelector("span#text");

controlEl.addEventListener("input", (event) => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
  console.log(`${event.currentTarget.value}`);
});
