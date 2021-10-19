import { renderPizzas, renderPhotos } from "./render.js";
import {
  handleSubmit,
  handleNameInputChange,
  handleBlur,
  handleToppingsInputChange,
} from "./handlers.js";

const formElement = document.querySelector("form");
formElement.onsubmit = handleSubmit;

const nameInputElement = document.querySelector("#name");
nameInputElement.oninput = handleNameInputChange;
nameInputElement.onblur = handleBlur;

const toppingsInputElement = document.querySelector("#toppings");
toppingsInputElement.oninput = handleToppingsInputChange;
toppingsInputElement.onblur = handleBlur;

renderPhotos();
renderPizzas();
