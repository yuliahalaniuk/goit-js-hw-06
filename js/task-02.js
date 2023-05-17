const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const liList = ingredients.map((ingredient) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.classList.add("item");

  ingredientEl.textContent = ingredient;
  return ingredientEl;
});

const ingredientsList = document.querySelector("#ingredients");
ingredientsList.append(...liList);
