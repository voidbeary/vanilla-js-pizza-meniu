import { savePizza, removePizza } from "./pizzaStorage.js";
import { Pizza } from "./pizza.js";
import { renderPizza } from "./render.js";
import {
  validatePizzaName,
  validateForm,
  validateToppings,
} from "./validate.js";

function handleSubmit(e) {
  e.preventDefault();

  validateForm(e.target);

  if (!e.target.reportValidity()) {
    return;
  }

  const newPizza = new Pizza(e.target);
  renderPizza(newPizza);
  savePizza(newPizza);
  e.target.reset();
}

function handleNameInputChange(e) {
  const pizzaName = e.target;
  validatePizzaName(pizzaName);
}
function handleToppingsInputChange(e) {
  const pizzaToppings = e.target;
  validateToppings(pizzaToppings);
}
function handleBlur(e) {
  e.target.reportValidity();
}
function handleDelete(e) {
  const pizzaName = e.target.value;
  if (confirm(`Are you sure you want to delete pizza named ${pizzaName}?`)) {
    removePizza(pizzaName);
    document.getElementById("list-item-pizza-" + pizzaName).remove();
  }
}
export {
  handleSubmit,
  handleNameInputChange,
  handleBlur,
  handleToppingsInputChange,
  handleDelete,
};
