import './App.css';
import PrimaryInput from "./components/Inputs/PrimaryInput";
import {useState} from "react";

function App() {
    const [email, setEmail] = useState("") //guardando na variavel email
    const [email, setEmail] = useState("") //guardando na variavel email
    const [email, setEmail] = useState("") //guardando na variavel email


    return (
        <div className="container">
            <PrimaryInput
                value={email}
                onChange={event => setEmail(event.target.value)}
                name="email"
                label="Digite seu e-mail"
            />
            <PrimaryInput
                value={email}
                onChange={event => setEmail(event.target.value)}
                name="email"
                label="Digite seu e-mail"
            />
            <PrimaryInput
                value={email}
                onChange={event => setEmail(event.target.value)}
                name="email"
                label="Digite seu e-mail"
            />
        </div>
    )
}

export default App;
