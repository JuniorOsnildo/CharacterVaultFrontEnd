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
                    <div className="text-fields-sheet">
                        <p>nome:</p><input placeholder="Nome" type="text"/>
                        <p>raça:</p><input placeholder="Raça" type="text"/>
                        <p>origem:</p><input placeholder="Origem" type="text"/>
                        <p>classe:</p><input placeholder="Classe" type="text"/>
                        <input placeholder="Nivel" type="text"/>
                    </div>

                    <div className="int-fields-sheet">
                        <div className="hp-mp-fields">
                            <input placeholder="Vida" type="text" maxLength={3}/>
                            <input placeholder="Mana" type="text" maxLength={3}/>
                        </div>

                        <div className="attributes">
                            <input type="text" maxLength={2}/>
                            <input type="text" maxLength={2}/>
                            <input type="text" maxLength={2}/>
                            <input type="text" maxLength={2}/>
                            <input type="text" maxLength={2}/>
                            <input type="text" maxLength={2}/>
                            <p>FOR</p><p>DES</p><p>CON</p><p>INT</p><p>SAB</p><p>CAR</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
