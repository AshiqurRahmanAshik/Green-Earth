const categoryContainer = document.getElementById("categoryContainer");

const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data.categories));
};
const displayCategory = (categories) => {
  // console.log(categories);
  categories.forEach((category) => {
    // console.log(category.category_name);
    categoryContainer.innerHTML += `
    <li class="hover:bg-green-600 hover:text-white p-1">${category.category_name}s</li>
    `;
  });
};
loadCategory();
