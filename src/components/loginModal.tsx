import useModal from "../hooks/useModal.tsx";

import "../loginModal.css"
import x from "../assets/x.png"

export default function LoginModal() {

    const modalManager = useModal();

    return (
        <div>
            <div className="container-login">
                <div className="button-x">
                    <button onClick={()=> modalManager.closeModal()} className="x"><img src={x} alt="fechar"/></button>
                </div>
                <div className="fields-login">
                    <p>Email</p><input type="email"/>
                    <p>Password</p><input type="password"/>
                </div>
            </div>
        </div>
    )
}