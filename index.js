const FORM_INPUT_IDS = ["name", "price"];

const formElement = document.querySelector("form");
formElement.onsubmit = handleSubmit;

const sessionStoragePizzas = getSessionStoragePizzas();
sessionStoragePizzas.forEach(renderPizza);

function handleSubmit(e) {
  e.preventDefault();

  const newPizza = getNewPizza();
  renderPizza(newPizza);
  savePizza(newPizza);
}
function getNewPizza() {
  const formValues = FORM_INPUT_IDS.map((id) => formElement.elements[id].value);

  let pizza = {};
  for (let i = 0; i < FORM_INPUT_IDS.length; i++) {
    const key = FORM_INPUT_IDS[i];
    pizza = { ...pizza, [key]: formValues[i] };
  }
  return pizza;
}
function renderPizza(newPizza) {
  const pizzaList = document.getElementById("pizza-list");
  const newListItem = document.createElement("li");

  for (let i = 0; i < FORM_INPUT_IDS.length; i++) {
    const key = FORM_INPUT_IDS[i];
    const listItemText = document.createTextNode(newPizza[key] + " ");
    newListItem.appendChild(listItemText);
  }

  pizzaList.appendChild(newListItem);
}
function savePizza(newPizza) {
  const oldPizzas = getSessionStoragePizzas();
  const allPizzas = [...oldPizzas, newPizza];
  sessionStorage.setItem("pizzas", JSON.stringify(allPizzas));
}
function getSessionStoragePizzas() {
  const sessionStoragePizzasString = sessionStorage.getItem("pizzas") || "[]";
  const sessionStoragePizzas = JSON.parse(sessionStoragePizzasString);
  return sessionStoragePizzas;
}
