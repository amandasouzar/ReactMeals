import React, {useContext} from "react";
import styles from './MealItem.module.css'
import MealItemForm from "./MealItemForm";
import CartContext from "../../Store/cart-context";

const MealItem = (props) => {
    const cartCtx = useContext(CartContext)

    const AddToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount
        })
    }
    
    return <React.Fragment>
    <div className={styles.meal}>
        <div className={styles.mealDetail}>
            <h3>{props.name}</h3>
            <p className={styles.description}>{props.description}</p>
            <p className={styles.price}>${props.price}</p>
         </div>
        <MealItemForm OnAddToCart={AddToCartHandler}></MealItemForm>
    </div>
    </React.Fragment>
} 

export default MealItem