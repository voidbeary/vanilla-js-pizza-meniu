import { renderPizzas } from "./render.js";
import { handleSubmit, handleNameInputChange, handleBlur } from "./handlers.js";

const formElement = document.querySelector("form");
formElement.onsubmit = handleSubmit;

const nameInputElement = document.querySelector("#name");
nameInputElement.onchange = handleNameInputChange;
nameInputElement.onblur = handleBlur;

renderPizzas();
