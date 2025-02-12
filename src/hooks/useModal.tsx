import {useContext} from "react";
import ModalContext from "../context/ModalContext.tsx";

const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("fds")
    }
    return context;
}

export default useModal;