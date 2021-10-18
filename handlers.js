import { savePizza } from "./pizzaStorage.js";
import { Pizza } from "./pizza.js";
import { renderPizza } from "./render.js";
import { validatePizzaName, validateForm } from "./validate.js";

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
function handleBlur(e) {
  e.target.reportValidity();
}
export { handleSubmit, handleNameInputChange, handleBlur };
