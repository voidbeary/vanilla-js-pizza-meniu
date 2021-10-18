class Pizza {
  constructor(formElement) {
    this.name = formElement.elements.name.value;
    this.price = formElement.elements.price.value;
    this.heat = formElement.elements.heat.value;
    this.toppings = formElement.elements.toppings.value
      .split(",")
      .map((topping) => topping.trim());
  }
}
export { Pizza };
