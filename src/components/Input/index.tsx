import { InputHTMLAttributes } from "react"
import { InputBox } from "../styles/InputStyle"

interface InputPropsI extends InputHTMLAttributes<HTMLInputElement>{
    label?: string;
    placeholder: string; 
}

export const Input = ({label, placeholder, ...rest}: InputPropsI) => {
    
    return(
        <InputBox>
{label && <label>{label}</label>}
            <input placeholder={placeholder} {...rest}/>
        </InputBox>
    )
}