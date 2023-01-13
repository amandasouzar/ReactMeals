import React from "react";

const CartContext = React.createContext({
    itens: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (itemId) => {}
})

export default CartContext