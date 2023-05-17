function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const generateBgButton = document.querySelector(".change-color");
const changedBgColor = document.querySelector("span.color");

const changeBg = () => {
  let randomBgColor = getRandomHexColor();
  document.body.style.backgroundColor = randomBgColor;
  changedBgColor.textContent = randomBgColor;
};

generateBgButton.addEventListener("click", changeBg);
