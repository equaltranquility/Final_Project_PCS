const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      const existItem = state.find((item) => item.id === product.id);
      if (existItem) {
        return state.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            quantity: 1,
          },
        ];
      }

    case "DELETEITEM":
      const existItemDelete = state.find((item) => item.id === product.id);
      if (existItemDelete.quantity === 1) {
        return state.filter((item) => item.id !== existItemDelete.id);
      } else {
        return state.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }

    default:
      return state;
  }
};

export default handleCart;
