import react, {useState, useEffect, useContext} from "react";
import styles from './Modal.module.css'
import CartContext from "../../Store/cart-context";
import CartItem from "./CartItem";
import ModalForm from "./ModalForm";


const Modal = (props) => {
    const [OrderActive, SetOrderActive] = useState(false)

    const cartctx = useContext(CartContext)

    const RemoveItemHandler = (id ) => {
        cartctx.removeItem(id)
    }

    const AddItemHandler = (item) => {
        cartctx.addItem({...item, amount: 1});
    }

    const OrderItensHandler = () => {
        SetOrderActive(true)
    }
        
    return <div className={styles.backdrop}> 
            <div className={styles.modal}>
                {OrderActive && <ModalForm SetModalClose= {props.SetModalClose}></ModalForm>}
                { !OrderActive && <div>
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
                </div>}
                { !OrderActive && <div>    
                    <h2>Total: ${cartctx.totalAmount.toFixed(2)}</h2>
                </div>}
                { !OrderActive && <div className={styles.actions}>
                    <button onClick={props.SetModalClose}>Close</button>
                    {cartctx.itens.length > 0 && <button onClick={OrderItensHandler}>Order</button>}
                </div>}
            </div>
    </div>
}

export default Modal