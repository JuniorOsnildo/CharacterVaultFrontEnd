//import axios from 'axios';

import useModal from "../../hooks/useModal.tsx";

import "./accountModal.css"
import x from "../../assets/x.png"

export default function SignUpModal() {

    const modalManager = useModal();

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
                    <label>Nome de usuario</label><input type="text"/>
                    <label>Email</label><input type="email"/>
                    <label>Senha</label><input type="password"/>
                    <div>
                        <button>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}