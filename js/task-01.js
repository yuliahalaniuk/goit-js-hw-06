const categoriesRef = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesRef.length}`);

categoriesRef.forEach((categoty) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
});
