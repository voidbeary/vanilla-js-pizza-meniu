function savePizza(pizza) {
  const oldPizzas = getPizzas();
  const allPizzas = [...oldPizzas, pizza];
  sessionStorage.setItem("pizzas", JSON.stringify(allPizzas));
}
function getPizzas() {
  const sessionStoragePizzasString = sessionStorage.getItem("pizzas") || "[]";
  const sessionStoragePizzas = JSON.parse(sessionStoragePizzasString);

  return sessionStoragePizzas;
}
export { savePizza, getPizzas };
