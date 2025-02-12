import useModal from "../hooks/useModal.tsx";

import "../modal.css"

export default function SheetModal() {

    const modalManager = useModal();

    return (
        <div>
            <div className="container">
                <div className="button-x">
                    <button onClick={()=> modalManager.closeModal()}></button>
                </div>
                <div className="fields">
                    <p>nome</p><input type="text"/>
                    <p>raça</p><input type="text"/>
                    <p>origem</p><input type="text"/>
                    <p>classe</p><input type="text"/>
                    <p>nivel</p><input type="text"/>
                    <p>hp</p><input type="text"/>
                    <p>mana</p><input type="text"/>
                </div>
            </div>
        </div>
    )
}
