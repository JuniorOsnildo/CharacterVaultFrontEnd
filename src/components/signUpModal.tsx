import useModal from "../hooks/useModal.tsx";

import "../signUpModal.css"
import x from "../assets/x.png"

export default function SignUpModal() {

    const modalManager = useModal();

    return (
        <div>
            <div className="container-signUp">
                <div className="button-x">
                    <button onClick={()=> modalManager.closeModal()} className="x"><img src={x} alt="fechar"/></button>
                </div>
                <div className="intro">
                    Novo por aqui?
                </div>
                <div className="fields-signUp">
                    <p>Username</p><input type="text"/>
                    <p>Email</p><input type="email"/>
                    <p>Password</p><input type="password"/>
                </div>
            </div>
        </div>
    )
}