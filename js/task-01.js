const categoriesRef = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesRef.length}`);

for (const category of categoriesRef) {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
}
