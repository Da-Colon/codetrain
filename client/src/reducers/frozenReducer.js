const UPDATE_FROZEN = "updateFrozen";
const CLEAR_INVENTORY = "clearInventory";

const seedData = [
  {
    food: "TV dinners",
    quantity: 10
  },
  {
    food: "Frozen Veggies",
    quantity: 21
  },
  {
    food: "Frozen Pizzas",
    quantity: 25
  }
];

export default (state = seedData, action) => {
  let newState;
  switch (action.type) {
    case UPDATE_FROZEN:
      newState = [...state];
      if (action.payload.operation === "+") {
        newState[action.payload.index].quantity += 1;
      } else if (action.payload.operation === "-") {
        newState[action.payload.index].quantity -= 1;
      }
      return newState;
    case CLEAR_INVENTORY:
      newState = [...state];
      newState.forEach((item, i) => {
        item.quantity = 0;
      });
      return newState;
    default:
      return state;
  }
};
