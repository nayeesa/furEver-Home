document.addEventListener('DOMContentLoaded', () => {

const pets = [

{

name: "Snowy",

type: "Dog",

breed: "Labrador",

age: "2 Years",

image: "https://images.unsplash.com/photo-1601758123927-196d5f5d92c1?auto=format&fit=crop&w=600&q=80"

},

{

name: "Whiskers",

type: "Cat",

breed: "Persian",

age: "3 Years",

image: "https://images.unsplash.com/photo-1603314711520-8a5a80c0f1ae?auto=format&fit=crop&w=600&q=80"

},

{

name: "Nibbles",

type: "Rabbit",

breed: "Netherland Dwarf",

age: "1 Year",

image: "https://images.unsplash.com/photo-1608559422050-0cb8f98e06e0?auto=format&fit=crop&w=600&q=80"

},

{

name: "Lucy",

type: "Dog",

breed: "Spitz",

age: "4 Years",

image: "https://images.unsplash.com/photo-1619980297171-7d150564c1b5?auto=format&fit=crop&w=600&q=80"

},

{

name: "Buddy",

type: "Dog",

breed: "Labrador",

age: "1 Year",

image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=600&q=80"

},

{

name: "Milo",

type: "Cat",

breed: "Snowshoe",

age: "4 Years",

image: "https://cdn2.thecatapi.com/images/9h6.jpg"

}

];

const petList = document.getElementById('petList');

const searchInput = document.getElementById('searchInput');

function displayPets(petArray) {

petList.innerHTML = '';

petArray.forEach(pet => {

const petCard = document.createElement('div');

petCard.classList.add('pet-card');

petCard.innerHTML = `

<img src="${pet.image}" alt="${pet.name}">

<div class="pet-info">

<h3>${pet.name}</h3>

<p><strong>Breed:</strong> ${pet.breed}</p>

<p><strong>Age:</strong> ${pet.age}</p>

<p><strong>Type:</strong> ${pet.type}</p>

</div>

`;

petList.appendChild(petCard);

});

}

// Initial display

displayPets(pets);

// Filter when typing

searchInput.addEventListener('input', () => {

const query = searchInput.value.trim().toLowerCase();

const filtered = pets.filter(pet =>

pet.name.toLowerCase().includes(query) ||

pet.type.toLowerCase().includes(query) ||

pet.breed.toLowerCase().includes(query)

);

displayPets(filtered);

});

});
