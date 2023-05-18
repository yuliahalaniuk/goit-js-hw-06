function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  boxes: document.querySelector("#boxes"),
  numberInput: document.querySelector("input[type='number']"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
};

refs.createBtn.addEventListener("click", function () {
  let amount = Number(refs.numberInput.value);
  if (amount > 0) {
    createBoxes(amount);
  }
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const elem = document.createElement("div");

    elem.style.width = 30 + 10 * i + "px";
    elem.style.height = 30 + 10 * i + "px";
    elem.style.backgroundColor = getRandomHexColor();

    refs.boxes.append(elem);
  }
}

refs.destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  console.log(refs.boxes);
  refs.boxes.innerHTML = "";
}

// function createBoxes(amount) {
//   const newCode = `<div id='box-item'></div>`;
//   console.log(newCode);
//   // refs.boxes.insertAdjacentHTML("afterbegin", newCode);
//   // console.log(refs.boxes);
// }
