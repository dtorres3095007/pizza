import {
  PIZZA_SELECT,
} from "../actions/actGlobal";

const initialState = {
  pizzaSelect: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case PIZZA_SELECT:
    return Object.assign({}, state, {
      pizzaSelect: action.pizzaSelect
    });
  default:
    return state;
  }
};

export default reducer;
