import { getPizzas } from "./pizzaStorage.js";
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

  return newListItem;
}
export { renderPizzas, renderPizza };
