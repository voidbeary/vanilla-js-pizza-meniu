import { getPizzas } from "./pizzaStorage.js";
import { pizzasPhotos } from "./pizzasPhotos.js";
function renderPizzas() {
  const sessionStoragePizzas = getPizzas();
  sessionStoragePizzas.forEach(renderPizza);
}
function renderPizza(pizza) {
  const pizzaList = document.getElementById("pizza-list");
  const newListItem = createListItem(pizza);

  pizzaList.appendChild(newListItem);
}
function createListItem(pizza) {
  const newListItem = document.createElement("li");

  const nameText = document.createTextNode(pizza.name + " ");
  newListItem.appendChild(nameText);

  const priceText = document.createTextNode(pizza.price + " ");
  newListItem.appendChild(priceText);

  const heatText = document.createTextNode(pizza.heat + " ");
  newListItem.appendChild(heatText);

  const toppingsText = document.createTextNode(pizza.toppings.join(", ") + " ");
  newListItem.appendChild(toppingsText);

  if (pizza.photo) {
    const listImageElement = document.createElement("img");
    listImageElement.setAttribute("src", pizzasPhotos[pizza.photo]);
    listImageElement.setAttribute("alt", pizza.photo);
    listImageElement.setAttribute("width", "100px");
    newListItem.appendChild(listImageElement);
  }
  return newListItem;
}
function renderPhotos() {
  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", pizzasPhotos["pizza-photo-1"]);
  imageElement.setAttribute("width", "100px");
  imageElement.setAttribute("alt", "vegetarian pizza");
  const labelElement = document.querySelector("#photo-label-1");
  labelElement.appendChild(imageElement);

  const imageElement2 = document.createElement("img");
  imageElement2.setAttribute("src", pizzasPhotos["pizza-photo-2"]);
  imageElement2.setAttribute("width", "100px");
  imageElement2.setAttribute("alt", "pepperoni pizza");
  const labelElement2 = document.querySelector("#photo-label-2");
  labelElement2.appendChild(imageElement2);

  const imageElement3 = document.createElement("img");
  imageElement3.setAttribute("src", pizzasPhotos["pizza-photo-3"]);
  imageElement3.setAttribute("width", "100px");
  imageElement3.setAttribute("alt", "hawaiian pizza");
  const labelElement3 = document.querySelector("#photo-label-3");
  labelElement3.appendChild(imageElement3);
}
export { renderPizzas, renderPizza, renderPhotos };
