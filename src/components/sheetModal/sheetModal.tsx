import React, {JSX, useState} from "react"

import useModal from "../../hooks/useModal.tsx";

import axios from "axios";
import api from "../../Services/api.tsx"

import "./sheetModal.css"
import x from "../../assets/x.png"

import {Sheet} from "../../models/Sheet.ts";

interface Props { sheet : Sheet}

export default function SheetModal({ sheet }: Props): JSX.Element {

    const modalManager = useModal();
    const [error, setError] = useState("");
    //const eUserId = localStorage.getItem("userId");

    const handleCharge = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await api.delete(`/Sheet/delete/${sheet.id}`);
            window.location.reload();
        }
        catch (error) {
            if(axios.isAxiosError(error)) {
                setError(error.response?.data.massage || "Não foi possivel deletar a ficha!");
            } else {
                setError("Um erro inesperado ocorreu");
            }
        }
    }

    return (
        <div>
            <div className="container-sheet">
                <div className="button-x">
                    <button onClick={()=> modalManager.closeModal()} className="x"><img src={x} alt="fechar"/> </button>
                </div>
                <div className="fields-sheet">
                    <div className="text-fields-sheet">
                        <label>Nome</label>
                        <input
                            placeholder="Rell Oniyama"
                            type="text"
                            value={sheet.name}
                        />
                        <input
                            placeholder="Nivel"
                            type="text"
                            value={sheet.level}
                        />
                        <label>Classe</label>
                        <input
                            placeholder="Bardo"
                            type="text"
                            value={sheet.class}
                        />
                        <label>Raça</label>
                        <input
                            placeholder="Medusa"
                            type="text"
                            value={sheet.race}
                        />
                        <label>Origem</label>
                        <input
                            placeholder="Escravo"
                            type="text"
                            value={sheet.origin}
                        />
                    </div>

                    <div className="int-fields-sheet">
                        <div className="hp-mp-fields">
                            <input
                                placeholder="Vida"
                                type="text"
                                maxLength={3}
                                value={sheet.hp}
                            />
                            <input
                                placeholder="Mana"
                                type="text"
                                maxLength={3}
                                value={sheet.mp}
                            />
                        </div>

                        <div className="attributes">
                            <input
                                type="text"
                                maxLength={2}
                                value={sheet.strength}
                            />
                            <input
                                type="text"
                                maxLength={2}
                                value={sheet.dexterity}
                            />
                            <input
                                type="text"
                                maxLength={2}
                                value={sheet.constitution}
                            />
                            <input
                                type="text"
                                maxLength={2}
                                value={sheet.intelligence}
                            />
                            <input
                                type="text"
                                maxLength={2}
                                value={sheet.wisdom}
                            />
                            <input
                                type="text"
                                maxLength={2}
                                value={sheet.charisma}
                            />
                            <label>FOR</label><label>DES</label><label>CON</label>
                            <label>INT</label><label>SAB</label><label>CAR</label>
                        </div>
                    </div>
                </div>
                <div className="save-wrapper">
                    <div className="save">
                        <button type="submit" onClick={handleCharge}>Excluir</button>
                        {error && <div className="error-sheet">{error}</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
