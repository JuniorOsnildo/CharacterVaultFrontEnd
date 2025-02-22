import React, { useState } from "react";

import useModal from "../../hooks/useModal.tsx";

import axios from "axios";
import api from "../../Services/api.tsx"

import "./accountModal.css"
import x from "../../assets/x.png"

export default function LoginModal() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const modalManager = useModal();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await api.post("Auth/login", {
                email: email,
                password: password,
            })

            const token = response.data.token;
            const userId = response.data.userId;

            localStorage.setItem("token", token);
            localStorage.setItem("userId", userId);

            modalManager.closeModal();
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data.massage || "Falha no login, por favor tente novamente" );
            } else {
                setError("Um erro inesperado ocorreu!");
            }
        }

    };

    return (
        <div>
            <div className="container-account">
                <div className="button-x">
                    <button onClick={()=> modalManager.closeModal()} className="x"><img src={x} alt="fechar"/></button>
                </div>
                <div className="intro">
                    Bem vindo de volta!
                </div>
                <div className="fields-account">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label>Senha</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <div className="error-login">{error}</div>}

                    <div>
                        <button type="submit" onClick={handleLogin}>Enviar</button>
                    </div>
                </div>

            </div>
        </div>
    )
}