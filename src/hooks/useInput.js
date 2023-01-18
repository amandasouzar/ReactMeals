import { useState } from "react"

const useInput = (ValidationLogic) => {

    const [enteredValue, SetEnteredValue] = useState('')
    const [ValueWasTouched, SetValueWasTouched] = useState(false)

    let ValueIsValid = ValidationLogic(enteredValue)

    const OnAddValueHandler = (event) => {
        SetEnteredValue(event.target.value)
    }
    const OnBlurValueHandler = (event) => {
        SetValueWasTouched(true)
    }

    return {
        enteredValue,
        ValueWasTouched,
        ValueIsValid,
        OnAddValueHandler,
        OnBlurValueHandler
    }
}

export default useInput