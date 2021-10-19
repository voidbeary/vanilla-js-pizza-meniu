import { renderPizzas, renderPhotos } from "./render.js";
import {
  handleSubmit,
  handleNameInputChange,
  handleBlur,
  handleToppingsInputChange,
} from "./handlers.js";

const formElement = document.querySelector("form");
formElement.onsubmit = handleSubmit;
for (let i = 0; i < formElement.elements.length - 1; i++) {
  const element = formElement.elements[i];
  element.onblur = handleBlur;
}

const nameInputElement = document.querySelector("#name");
nameInputElement.oninput = handleNameInputChange;

const toppingsInputElement = document.querySelector("#toppings");
toppingsInputElement.oninput = handleToppingsInputChange;

renderPhotos();
renderPizzas();
