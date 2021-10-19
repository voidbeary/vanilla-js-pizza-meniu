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
  newListItem.classList.add("pizza-list-item");

  const pizzaNameParagraph = document.createElement("h2");
  const nameText = document.createTextNode(pizza.name + " " + pizza.heat);
  pizzaNameParagraph.appendChild(nameText);
  newListItem.appendChild(pizzaNameParagraph);

  const pizzaToppingstParagraph = document.createElement("p");
  const toppingsText = document.createTextNode(pizza.toppings.join(", ") + " ");
  pizzaToppingstParagraph.appendChild(toppingsText);
  newListItem.appendChild(pizzaToppingstParagraph);

  const pizzaPriceParagraph = document.createElement("p");
  const priceText = document.createTextNode(pizza.price + " €");
  pizzaPriceParagraph.appendChild(priceText);
  newListItem.appendChild(pizzaPriceParagraph);

  if (pizza.photo) {
    const listImageElement = document.createElement("img");
    listImageElement.setAttribute("src", pizzasPhotos[pizza.photo]);
    listImageElement.setAttribute("alt", pizza.photo);
    listImageElement.classList.add("pizza-photo");
    newListItem.appendChild(listImageElement);
  }
  return newListItem;
}
function renderPhotos() {
  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", pizzasPhotos["pizza-photo-1"]);
  imageElement.setAttribute("width", "100px");
  imageElement.setAttribute("alt", "vegetarian pizza");
  imageElement.classList.add("radio-photo");
  const labelElement = document.querySelector("#photo-label-1");
  labelElement.appendChild(imageElement);

  const imageElement2 = document.createElement("img");
  imageElement2.setAttribute("src", pizzasPhotos["pizza-photo-2"]);
  imageElement2.setAttribute("width", "100px");
  imageElement2.setAttribute("alt", "pepperoni pizza");
  imageElement2.classList.add("radio-photo");
  const labelElement2 = document.querySelector("#photo-label-2");
  labelElement2.appendChild(imageElement2);

  const imageElement3 = document.createElement("img");
  imageElement3.setAttribute("src", pizzasPhotos["pizza-photo-3"]);
  imageElement3.setAttribute("width", "100px");
  imageElement3.setAttribute("alt", "hawaiian pizza");
  imageElement3.classList.add("radio-photo");
  const labelElement3 = document.querySelector("#photo-label-3");
  labelElement3.appendChild(imageElement3);
}
export { renderPizzas, renderPizza, renderPhotos };
