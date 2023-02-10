import { useState } from "react"

const useInput = (validation) => {
    const [enteredValue,setEnteredValue] = useState('')
    const [touched,setIsTouched] = useState(false)
    
    const valueIsValid = validation(enteredValue)
    const hasError = !valueIsValid && touched;

    const valueInputHandler =(event) =>{
        setEnteredValue(event.target.value)
        }
        
    const InputBlurHandler = () =>{
        setIsTouched(true)
        }
    const reset = () => {
        setIsTouched(false)
        setEnteredValue('')
    }

        return {
            value:enteredValue,
            isValid: valueIsValid,
            valueInputHandler,
            InputBlurHandler,
            hasError,
            reset
        }
}
 
export default useInput;