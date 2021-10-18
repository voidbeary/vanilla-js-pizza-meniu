import { getPizzas } from "./pizzaStorage.js";

function validateForm(formElement) {
  validatePizzaName(formElement.elements.name);
}
function validatePizzaName(pizzaName) {
  const isNameNotUnique = getPizzas().some(
    (pizza) => pizza.name === pizzaName.value
  );
  if (isNameNotUnique) {
    pizzaName.focus();
    pizzaName.setCustomValidity("This pizza name already exists");
  } else {
    pizzaName.setCustomValidity("");
  }
}
export { validatePizzaName, validateForm };
