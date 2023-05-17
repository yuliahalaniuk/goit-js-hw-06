const refs = {
  container: document.querySelector("#counter"),
  increamentBtn: document.querySelector("button[data-action='decrement']"),
  decrementBtn: document.querySelector("[data-action='increment']"),
  value: document.querySelector("#value"),
};

let counterValue = 0;

refs.increamentBtn.addEventListener("click", () => {
  counterValue -= 1;
  updateValueUI();
});

refs.decrementBtn.addEventListener("click", () => {
  counterValue += 1;
  updateValueUI();
});

const updateValueUI = function () {
  refs.value.textContent = counterValue;
};
