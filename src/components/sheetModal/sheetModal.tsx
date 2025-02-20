import useModal from "../../hooks/useModal.tsx";

import "./sheetModal.css"
import x from "../../assets/x.png"

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
                        <label>Nome</label>
                        <input placeholder="Rell Oniyama" type="text"/>
                        <input placeholder="Nivel" type="text"/>
                        <label>Classe</label><input placeholder="Bardo" type="text"/>
                        <label>Raça</label><input placeholder="Medusa" type="text"/>
                        <label>Origem</label><input placeholder="Escravo" type="text"/>
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
                            <label>FOR</label><label>DES</label><label>CON</label>
                            <label>INT</label><label>SAB</label><label>CAR</label>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
