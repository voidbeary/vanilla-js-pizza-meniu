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
function removePizza(name) {
  const oldPizzas = getPizzas();
  const newPizzas = oldPizzas.filter((pizza) => pizza.name !== name);
  sessionStorage.setItem("pizzas", JSON.stringify(newPizzas));
}
export { savePizza, getPizzas, removePizza };
