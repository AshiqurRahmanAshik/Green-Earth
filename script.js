const categoryContainer = document.getElementById("categoryContainer");
const cardContainer = document.getElementById("cardContainer");

const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data.categories));
};
const displayCategory = (categories) => {
  //console.log(categories);
  categories.forEach((category) => {
    // console.log(category.category_name);
    categoryContainer.innerHTML += `
    <li id="${category.id}" class="hover:bg-green-600 hover:text-white p-1">${category.category_name}s</li>
    `;
  });
};
const loadAllPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => displayAllPlants(data.plants));
};
const displayAllPlants = (allPlants) => {
  // console.log(allPlants);
  allPlants.forEach((plant) => {
    // console.log(plant);
    cardContainer.innerHTML += `
     
               <div class="bg-white p-2 rounded space-y-2 flex flex-col justify-between">
                 <img class="w-full h-52 object-cover rounded" src="${plant.image}" alt="tree image" />
                <h3 class='font-semibold'>${plant.name}</h3>
                <h3 class='text-sm'>${plant.description}</h3>
                <div class="flex justify-between">
                  <button class="bg-green-100 p-2 rounded">${plant.category}</button>
                  <p>&#2547 <span>${plant.price}</span></p>
                </div>
                <button class="w-full bg-green-800 text-white p-2 rounded-2xl">Add to Cart</button>
               </div>
           
    `;
  });
};

loadCategory();
loadAllPlants();
