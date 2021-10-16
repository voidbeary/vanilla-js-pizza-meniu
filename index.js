const FORM_INPUT_IDS = ["name", "price"];

const formElement = document.querySelector("form");
formElement.onsubmit = handleSubmit;

function handleSubmit(e) {
  e.preventDefault();

  const newPizza = getNewPizza();
  addPizza(newPizza);
}
function getNewPizza() {
  const formValues = FORM_INPUT_IDS.map((id) => formElement.elements[id].value);

  let pizza = {};
  for (let i = 0; i < FORM_INPUT_IDS.length; i++) {
    const key = FORM_INPUT_IDS[i];
    pizza = { ...pizza, [key]: formValues[i] };
  }
  console.log(pizza);
  return pizza;
}
function addPizza(newPizza) {
  const pizzaList = document.getElementById("pizza-list");
  const newListItem = document.createElement("li");

  for (let i = 0; i < FORM_INPUT_IDS.length; i++) {
    const key = FORM_INPUT_IDS[i];
    const listItemText = document.createTextNode(newPizza[key] + " ");
    newListItem.appendChild(listItemText);
  }

  pizzaList.appendChild(newListItem);
}
