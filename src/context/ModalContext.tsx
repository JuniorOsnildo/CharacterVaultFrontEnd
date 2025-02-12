import {ReactNode, useState} from "react";
import * as React from "react";

import "../modalContext.css"

interface ModalContextProps {
    modal: ReactNode
    closeModal: () => void
    openModal: (modal: ReactNode) => void
}

interface ModalProviderProps {
    children: ReactNode
}

const ModalContext = React.createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({children}: ModalProviderProps) => {
    const [modal, setModal] = useState<ReactNode>(null);

    const closeModal = () => {
        setModal(undefined);
    }

    const openModal = (modal: ReactNode) => {
        setModal(modal);
    }

    const handleOverlayClick = (e:React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLElement).id === "overlay") {
            closeModal();
        }

    }

    return (
        <ModalContext.Provider value={{modal, closeModal, openModal}}>
            {children}

            {modal && (
                <div id="overlay" className="overlay" onClick={handleOverlayClick}>
                    <div className="overlay-inner" onClick={(e) => e.stopPropagation()}>
                        {modal}
                    </div>
                </div>
            )}
        </ModalContext.Provider>
    )
}

export default ModalContext;