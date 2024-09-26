console.log("Connected")
// 1. Fetch all cars from the API with a GET AJAX request
// 2. Iterate over the cars you've just retrieved
// 3. For each car, insert a new car card in the HTML

const GARAGE = 'second';
const garageUrl = `https://garage.api.lewagon.com/${GARAGE}/cars`;
const list = document.querySelector('.cars-list');

const fetchCars = () => {
  fetch(garageUrl)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      // list.innerHTML = "";
      data.forEach(car => insertContent(car));
      }).catch((error) => {
        console.error('Error:', error);
      });
};

const insertContent = (car) => {
  const cardCard = `<div class="car-${car.id} car-card">
    <img src="http://loremflickr.com/300/300/${car.brand}%20${car.model}">
    <div class="car-details">
      <h2>${car.brand} ${car.model}</h2>
      <p><strong>Owner:</strong> ${car.owner}</p>
      <p><strong>Plate:</strong> ${car.plate}</p>
    </div>
  </div>`;
  list.insertAdjacentHTML('beforeend', cardCard)
};

fetchCars();
