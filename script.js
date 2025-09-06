const categoryContainer = document.getElementById("categoryContainer");
const cardContainer = document.getElementById("cardContainer");
const modalContainer = document.getElementById("modalContainer");

const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data.categories));
};
const displayCategory = (categories) => {
  //console.log(categories);
  categories.forEach((category) => {
    const categoryId = category.id;
    //  console.log(categoryId);

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
  cardContainer.innerHTML = "";
  // console.log(allPlants);
  allPlants.forEach((plant) => {
    // console.log(plant.id);
    cardContainer.innerHTML += `
     
               <div class="bg-white p-2 rounded space-y-2 flex flex-col justify-between">
                 <img class="w-full h-52 object-cover rounded" src="${plant.image}" alt="tree image" />
                <button onclick="loadPlantDetails(${plant.id})" class='font-semibold'>${plant.name}</button>
                <p class='text-sm'>${plant.description}</p>
                <div class="flex justify-between">
                  <button class="bg-green-100 p-2 rounded">${plant.category}</button>
                  <p>&#2547 <span>${plant.price}</span></p>
                </div>
                <button class="w-full bg-green-800 text-white p-2 rounded-2xl">Add to Cart</button>
               </div>
           
    `;
  });
};
const loadPlantsByCategory = (id) => {
  //  console.log(id);
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((res) => res.json())
    .then((data) => displayPlantsByCategory(data.plants));
};
const displayPlantsByCategory = (plants) => {
  //console.log(plants);
  cardContainer.innerHTML = "";
  plants.forEach((plant) => {
    // console.log(plant);
    cardContainer.innerHTML += `
   <div class="bg-white p-2 rounded space-y-2 flex flex-col justify-between">
  <img class="w-full h-52 object-cover rounded" src="${plant.image}" alt="${plant.name}" />
  <p onclick="loadPlantDetails(${plant.id})" class='font-semibold cursor-pointer inline'>${plant.name}</p>
  <p class='text-sm flex-grow'>${plant.description}</p>
  <div class="flex justify-between">
    <button class="bg-green-100 p-2 rounded">${plant.category}</button>
    <p>&#2547 <span>${plant.price}</span></p>
  </div>
  <button class="w-full bg-green-800 text-white p-2 rounded-2xl">Add to Cart</button>
</div>
`;
  });
};
const loadPlantDetails = (id) => {
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then((res) => res.json())
    .then((data) => displayPlantDetails(data.plants));
};
const displayPlantDetails = (plant) => {
  console.log(plant);
  modalContainer.innerHTML = `
 <div class="bg-white p-2 rounded space-y-2 flex flex-col justify-between">
 <p class='font-semibold'>${plant.name}</p>
 <img class="w-full h-52 object-cover rounded" src="${plant.image}" alt="${plant.name}" />
 <p class='font-semibold'>Category: ${plant.category}</p>
 <p>Price:&#2547 <span class="font-bold"> ${plant.price}</span></p>
  <p class='text-sm flex-grow'><span class="font-bold">Description:</span>${plant.description}</p>
  
</div>
  `;
  document.getElementById("my_modal_5").showModal();
};

categoryContainer.addEventListener("click", (e) => {
  const allLi = categoryContainer.querySelectorAll("li");
  allLi.forEach((li) => {
    li.classList.remove("bg-green-600", "text-white");
  });

  if (e.target.tagName === "LI") {
    e.target.classList.add("bg-green-600", "text-white");
  }
  const categoryId = e.target.id;
  loadPlantsByCategory(categoryId);
});

loadCategory();
loadAllPlants();
