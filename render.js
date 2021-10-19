import { getPizzas, removePizza } from "./pizzaStorage.js";
import { pizzasPhotos } from "./pizzasPhotos.js";
import { handleDelete } from "./handlers.js";
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
  newListItem.setAttribute("id", "list-item-pizza-" + pizza.name);
  newListItem.classList.add("pizza-list-item");
  const divElement = document.createElement("div");
  divElement.classList.add("margin-bot-auto");
  const pizzaNameParagraph = document.createElement("h2");
  const nameText = document.createTextNode(pizza.name + " ");
  pizzaNameParagraph.appendChild(nameText);
  divElement.appendChild(pizzaNameParagraph);
  divElement.appendChild(renderChiliPeppers(pizza));
  newListItem.appendChild(divElement);

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

  const deleteButtonElement = document.createElement("button");
  deleteButtonElement.setAttribute("type", "button");
  deleteButtonElement.setAttribute("value", pizza.name);
  deleteButtonElement.onclick = handleDelete;
  const buttonText = document.createTextNode("Delete button");
  deleteButtonElement.appendChild(buttonText);
  deleteButtonElement.classList.add("delete-button");
  newListItem.appendChild(deleteButtonElement);

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
function renderChiliPeppers(pizza) {
  const spanElement = document.createElement("span");

  if (pizza.heat == 0) {
    return spanElement;
  }

  var svgNS = "http://www.w3.org/2000/svg";

  for (let i = 0; i < pizza.heat; i++) {
    const svgElement = document.createElementNS(svgNS, "svg");
    svgElement.setAttribute("viewBox", "0 0 512 512");
    svgElement.setAttribute("width", "100%");
    svgElement.setAttribute("height", "100%");
    svgElement.classList.add("chili-svg");
    const pathElement = document.createElementNS(svgNS, "path");
    pathElement.setAttribute("fill", "currentColor");
    pathElement.setAttribute(
      "d",
      "M465 134.2c21.46-38.38 19.87-87.17-5.65-123.1c-7.541-10.83-22.31-13.53-33.2-5.938c-10.77 7.578-13.44 22.55-5.896 33.41c14.41 20.76 15.13 47.69 4.098 69.77C407.1 100.1 388 95.1 368 95.1c-36.23 0-68.93 13.83-94.24 35.92L352 165.5V256h90.56l33.53 78.23C498.2 308.9 512 276.2 512 239.1C512 198 493.7 160.6 465 134.2zM320 288V186.6l-52.95-22.69C216.2 241.3 188.5 400 56 400C25.13 400 0 425.1 0 456S25.13 512 56 512c180.3 0 320.1-88.27 389.3-168.5L421.5 288H320z"
    );
    svgElement.appendChild(pathElement);
    spanElement.appendChild(svgElement);
  }
  return spanElement;
}
export { renderPizzas, renderPizza, renderPhotos };
