//import axios from 'axios';

import useModal from "../../hooks/useModal.tsx";

import "./accountModal.css"
import x from "../../assets/x.png"
import React, {useState} from "react";
import api from "../../Services/api.tsx";
import axios from "axios";

export default function SignUpModal() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const modalManager = useModal();

    const handleInputChange = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await api.post("User/users", {
                username: username,
                password: password,
                email: email
            });
            modalManager.closeModal();
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data.message || "algo deu errado :T")
            } else {
                setError("um erro inesperado ocorreu");
            }
        }
    }

    return (
        <div>
            <div className="container-account">
                <div className="button-x">
                    <button onClick={()=> modalManager.closeModal()} className="x"><img src={x} alt="fechar"/></button>
                </div>
                <div className="intro">
                    Novo por aqui?
                </div>
                <div className="fields-account">
                    <label>Nome de usuario</label>
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <label>Senha</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    {error && <div className="error-login">{error}</div>}
                    <div>
                        <button type="submit" onClick={handleInputChange}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}