import "./primary-input.css"
import {ChangeEvent, ChangeEventHandler} from "react";

interface PrimaryInputProps {
    name: string,
    value: string,
    onChange : ChangeEventHandler<HTMLInputElement>,
    label : string
}

//Controlled Componente controlando o estado do componente
export default function PrimaryInput({name, value, onChange, label}: PrimaryInputProps) {
    return (
        <div className="input-container">
            <label className="label">{label}</label>
            <input
                type="email"
                placeholder="Digite seu E-mail"
                name={name}
                value={value}
                onChange={onChange}/>
        </div>
    )
}