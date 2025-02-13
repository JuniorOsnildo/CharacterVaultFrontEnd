import useModal from "../hooks/useModal.tsx";

import "../sheetModal.css"
import x from "../assets/x.png"

export default function SheetModal() {

    const modalManager = useModal();

    return (
        <div>
            <div className="container-sheet">
                <div className="button-x">
                    <button onClick={()=> modalManager.closeModal()} className="x"><img src={x} alt="fechar"/> </button>
                </div>
                <div className="fields-sheet">
                    <p>nome:</p><input placeholder="Nome" type="text"/>
                    <p>raça:</p><input placeholder="Raça" type="text"/>
                    <p>origem:</p><input placeholder="Origem" type="text"/>
                    <p>classe:</p><input placeholder="Classe" type="text"/>
                    <input placeholder="Nivel" type="text"/>
                    <div>
                        <input placeholder="Vida" type="text"/>
                    </div>
                    <input placeholder="Mana" type="text"/>
                </div>
            </div>
        </div>
    )
}
