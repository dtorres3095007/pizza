const PIZZA_SELECT = "PIZZA_SELECT";

const changeSelectPizza = (pizzaSelect) => {
  return {
    type: PIZZA_SELECT,
    pizzaSelect,
  };
};


// eslint-disable-next-line no-undef
module.exports = {
  changeSelectPizza,
  PIZZA_SELECT,
};
