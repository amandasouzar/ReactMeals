import React, {useState, useReducer, useRef} from "react";
import styles from './MealItemForm.module.css'


const MealItemForm = (props) => {

    const AmountInputRef = useRef()
    
    const AmountSubmitHandler = (event) => {
        event.preventDefault()

        const enteredAmount = AmountInputRef.current.value
        const enteredAmountNumber = +enteredAmount

        props.OnAddToCart(enteredAmountNumber)
    }
    
    return <form className={styles.form}>
        <div className={styles.input}>
            <label htmlFor="Amount">Amount</label>
            <input ref={AmountInputRef} onSubmit={AmountSubmitHandler} type="number" min={1} id="Amount"></input>
        </div>
        <button onClick={AmountSubmitHandler} defaultValue='1' htmlFor='Amount' type="submit"> + Add</button>
    </form>
}

export default MealItemForm