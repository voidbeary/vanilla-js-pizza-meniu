import { getPizzas } from "./pizzaStorage.js";

function validateForm(formElement) {
  validatePizzaName(formElement.elements.name);
  validateToppings(formElement.elements.toppings);
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
function validateToppings(pizzaToppings) {
  const toppingsArr = pizzaToppings.value.split(",");
  const hasEmptyTopping = toppingsArr.some((topping) => topping.trim() === "");
  if (toppingsArr.length < 2 || hasEmptyTopping) {
    pizzaToppings.focus();
    pizzaToppings.setCustomValidity(
      "Pizza should have at least 2 toppings, toppings has to be separated by comma"
    );
  } else {
    pizzaToppings.setCustomValidity("");
  }
}

export { validatePizzaName, validateForm, validateToppings };
