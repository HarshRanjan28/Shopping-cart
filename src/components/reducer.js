export const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      item: state.item.filter((curItem) => {
        return curItem.id !== action.payload;
      }),
    };
  }
  if (action.type === "CLEAR_CART") {
    return { ...state, item: [] };
  }
  if (action.type === "INCREMENT") {
    let updatedList = state.item.map((curElem) => {
      if (curElem.id === action.payload) {
        return { ...curElem, quantity: curElem.quantity + 1 };
      }
      return curElem;
    });
    return { ...state, item: updatedList };
  }
  if (action.type === "DECREMENT") {
    let updatedList = state.item
      .map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...curElem, quantity: curElem.quantity - 1 };
        }
        return curElem;
      })
      .filter((curElem) => {
        return curElem.quantity !== 0;
      });
    return { ...state, item: updatedList };
  }
  if (action.type === "GET_TOTAL") {
    let { totalItem, totalAmount } = state.item.reduce(
      (accum, curVal) => {
        let { quantity, price } = curVal;
        let updatedAmount = quantity * price;
        accum.totalAmount += updatedAmount;
        accum.totalItem += quantity;
        return accum;
      },
      {
        totalItem: 0,
        totalAmount: 0,
      }
    );
    return { ...state, totalItem, totalAmount };
  }

  return state;
};
