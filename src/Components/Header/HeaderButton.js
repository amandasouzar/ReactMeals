import React, {useState, useContext} from "react";
import CartContext from "../../Store/cart-context";
import CartIcon from "../UI/CartIcon";
import styles from './HeaderButton.module.css'

const HeaderButton = (props) => {

    const CartCtx = useContext(CartContext)

    const CartAmountItem = CartCtx.itens.reduce((curNumber, item) => {
        return curNumber + item.amount;
      }, 0);

    return <button onClick={props.SetModalShow} className={styles.button}>
            <span className={styles.icon}><CartIcon></CartIcon></span>
            <span>Your Cart</span>
            <span className={styles.badge}>{CartAmountItem}</span>
        </button>
}

export default HeaderButton