import { MouseEventHandler } from "react";
import LoginModal from "../components/accountModal/loginModal.tsx";
import SignUpModal from "../components/accountModal/signUpModal.tsx";

import useModal from "./useModal.tsx";


function useVerifyLoginState() {
    const token = localStorage.getItem("token");
    const modalManager = useModal();

    const endSession: MouseEventHandler<HTMLButtonElement> | undefined = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        window.location.reload();
    }

    if (token == null) {
        return (
            <div>
                <button
                    onClick={() => modalManager.openModal(<LoginModal/>)}
                    className="accountButton">
                    Log in
                </button>
                |
                <button
                    onClick={() => modalManager.openModal(<SignUpModal/>)}
                    className="accountButton">
                    Sign in
                </button>
            </div>
        )
    } else {
        return(
            <button
                onClick={ endSession }
            className="accountButton">
                Sair
            </button>
        )
    }
}

export default useVerifyLoginState;