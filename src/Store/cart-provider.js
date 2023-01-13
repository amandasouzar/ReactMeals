import React, {useReducer} from "react";
import CartContext from "./cart-context.js";

const defaultCart = {
    itens: [],
    totalAmount: 0
}

const CartReducer = (state, action) => {
    if (action.type === 'ADD') {
        console.log(action.item)

        const UpdatedTotalAmount = state.totalAmount + action.item.price * action.item.amount

        const existingItemIndex = state.itens.findIndex((item) => {return item.id == action.item.id})
        const existingItem = state.itens[existingItemIndex]
        
        let UpdatedItem
        let UpdatedItens

        if (existingItem) {
            UpdatedItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount
            }
            UpdatedItens = [...state.itens]
            UpdatedItens[existingItemIndex] = UpdatedItem
        } else {
            UpdatedItem = {...action.item}
            UpdatedItens = state.itens.concat(action.item)
        }

        return {
            itens: UpdatedItens,
            totalAmount: UpdatedTotalAmount
        }
    }

    if (action.type === 'REMOVE') {
        const existingItemIndex = state.itens.findIndex((item) => {return item.id == action.id})
        const existingItem = state.itens[existingItemIndex]

        const UpdatedTotalAmount = state.totalAmount - existingItem.price

        let UpdatedItens

        if (existingItem.amount === 1) {
            UpdatedItens = state.itens.filter(item => item.id !== existingItem.id)
        } else {
            const UpdatedItem = {...existingItem, amount: existingItem.amount -1}
            UpdatedItens = [...state.itens]
            UpdatedItens[existingItemIndex] = UpdatedItem
        }
        return {
            itens: UpdatedItens,
            totalAmount: UpdatedTotalAmount
        }
    }

    return defaultCart
}

const CartProvider = (props) => {

    const [CartState, DispatchCart] = useReducer(CartReducer, defaultCart)

    const addItemHandler = (item) => {
        DispatchCart({type:'ADD', item: item})
    }
    const removeItemHandler = (id) => {
        DispatchCart({type:'REMOVE', id: id})
    }

    const cartContext = {
        itens: CartState.itens,
        totalAmount: CartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    } 

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider