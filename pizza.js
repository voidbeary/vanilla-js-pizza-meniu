class Pizza {
  constructor(formElement) {
    this.name = formElement.elements.name.value;
    this.price = formElement.elements.price.value;
  }
}
export { Pizza };
