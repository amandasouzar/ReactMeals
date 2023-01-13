import react, {useState, useEffect, useContext} from "react";
import styles from './Modal.module.css'
import CartContext from "../../Store/cart-context";
import CartItem from "./CartItem";


const Modal = (props) => {

    const cartctx = useContext(CartContext)

    const RemoveItemHandler = (id ) => {
        cartctx.removeItem(id)
    }

    const AddItemHandler = (item) => {
        cartctx.addItem({...item, amount: 1});
    }
        
    return <div className={styles.backdrop}> 
            <div className={styles.modal}>
            {cartctx.itens.map((item) => {
                return <CartItem
                key={item.id}
                name={item.name}
                price={item.price}
                amount={item.amount}
                onAdd={AddItemHandler.bind(null, item)}
                onRemove={RemoveItemHandler.bind(null, item.id)}
                ></CartItem>
            })}
            <div>    
                <h2>Total: ${cartctx.totalAmount.toFixed(2)}</h2>
            </div>
            <div className={styles.actions}>
                <button onClick={props.SetModalClose}>Close</button>
                {cartctx.itens.length > 0 && <button>Order</button>}
            </div>
        </div>
    </div>
}

export default Modal