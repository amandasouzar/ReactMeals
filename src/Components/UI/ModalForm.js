import React, { useState } from "react"
import useInput from "../../hooks/useInput"
import './ModalForm.css'

const ModalForm = (props) => {
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }

    const [OrderIsDone, SetOrderIsDone] = useState(false)

    const {
        enteredValue: enteredName,
        ValueWasTouched: NameWasTouched,
        ValueIsValid: NameIsValid,
        OnAddValueHandler: OnAddNameHandler,
        OnBlurValueHandler: OnBlurNameHandler
    } = useInput(data => data.trim() !== '')

    const {
        enteredValue: enteredEmail,
        ValueWasTouched: EmailWasTouched,
        ValueIsValid: EmailIsValid,
        OnAddValueHandler: OnAddEmailHandler,
        OnBlurValueHandler: OnBlurEmailHandler
    } = useInput(data => isValidEmail(data) == true)

    const {
        enteredValue: enteredPhone,
        ValueWasTouched: PhoneWasTouched,
        ValueIsValid: PhoneIsValid,
        OnAddValueHandler: OnAddPhoneHandler,
        OnBlurValueHandler: OnBlurPhoneHandler
    } = useInput(data => data.length >= 8)

    let FormIsValid = false

    if (NameIsValid && EmailIsValid && PhoneIsValid) {
        FormIsValid = true
    }

    const OnFormSubmitHandler = (event) => {
        event.preventDefault()

        SetOrderIsDone(true)
    }

    const OnDoneClickHandler = (event) => {
        window.location.reload()
    }

    return <React.Fragment>
        { !OrderIsDone && <form onSubmit={OnFormSubmitHandler}>
            <div className={(!NameIsValid && NameWasTouched) ? "form-control invalid" : "form-control"}>
                <label htmlFor="name">Your Full Name</label>
                <input onChange={OnAddNameHandler} onBlur={OnBlurNameHandler} value={enteredName} type="text" id="name" placeholder='Erick Lopez'></input>
                {(!NameIsValid && NameWasTouched) && <p className="error-text">Please, this field cannot be empty.</p>}
            </div>
            <div className={(!EmailIsValid && EmailWasTouched) ? "form-control invalid" : "form-control"}>
                <label htmlFor="email">Your Email</label>
                <input onChange={OnAddEmailHandler} onBlur={OnBlurEmailHandler} value={enteredEmail} type="email" id="email" placeholder='someone@something.com'></input>
                {(!EmailIsValid && EmailWasTouched) && <p className="error-text">Please, insert a valid email adress.</p>}
            </div>
            <div className={(!PhoneIsValid && PhoneWasTouched) ? "form-control invalid" : "form-control"}>
                <label htmlFor="phone">Your Phone Number</label>
                <input onChange={OnAddPhoneHandler} onBlur={OnBlurPhoneHandler} value={enteredPhone} type="tel" id="phone" placeholder='+555 765 432'></input>
                {(!PhoneIsValid && PhoneWasTouched) && <p className="error-text">Please, insert a valid phone number.</p>}
            </div>
            <button  className="Form-Button" disabled={!FormIsValid}>Set Order</button>
            <button  className="Form-Button" onClick={props.SetModalClose}>Cancel Order</button>
        </form>}
        {OrderIsDone && <div className="OrderDone">
        <h1>Your Order is being prepared!</h1>
        <button onClick={OnDoneClickHandler}>Done</button>
        </div>}
    </React.Fragment>
}

export default ModalForm