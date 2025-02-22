import React, { useState } from "react"

import useModal from "../../hooks/useModal.tsx";

import axios from "axios";
import api from "../../Services/api.tsx"

import "./sheetModal.css"
import x from "../../assets/x.png"

export default function NewSheetModal() {

    const [name, setName] = useState("");
    const [level, setLevel] = useState("");
    const [charClass, setCharClass] = useState("");
    const [race, setRace] = useState("");
    const [origin, setOrigin] = useState("");
    const [hp, setHp] = useState("");
    const [mp, setMP] = useState("");
    const [strength, setStrength] = useState("");
    const [dexterity, setDexterity] = useState("");
    const [constitution, setConstitution] = useState("");
    const [intelligence, setIntelligence] = useState("");
    const [wisdom, setWisdom] = useState("");
    const [charisma, setCharisma] = useState("");
    const [error, setError] = useState("");
    const eUserId = localStorage.getItem("userId");

    const modalManager = useModal();

    const handleCharge = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await api.post("/Sheet/sheets", {
                name: name || null,
                level: level || null,
                class: charClass || null,
                race: race || null,
                origin: origin || null,
                hp: hp || null,
                mp: mp || null,
                strength: strength || null,
                dexterity: dexterity || null,
                constitution: constitution || null,
                intelligence: intelligence || null,
                wisdom: wisdom || null,
                charisma: charisma || null,
                userId: eUserId
            })

            modalManager.closeModal();
        }
        catch (error) {
            if(axios.isAxiosError(error)) {
                setError(error.response?.data.massage || "Não foi possivel salvar a ficha!");
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            placeholder="Nivel"
                            type="text"
                            value={level}
                            onChange={(e) => setLevel(e.target.value)}
                        />
                        <label>Classe</label>
                        <input
                            placeholder="Bardo"
                            type="text"
                            value={charClass}
                            onChange={(e) => setCharClass(e.target.value)}
                        />
                        <label>Raça</label>
                        <input
                            placeholder="Medusa"
                            type="text"
                            value={race}
                            onChange={(e) => setRace(e.target.value)}
                        />
                        <label>Origem</label>
                        <input
                            placeholder="Escravo"
                            type="text"
                            value={origin}
                            onChange={(e) => setOrigin(e.target.value)}
                        />
                    </div>

                    <div className="int-fields-sheet">
                        <div className="hp-mp-fields">
                            <input
                                placeholder="Vida"
                                type="text"
                                maxLength={3}
                                value={hp}
                                onChange={(e) => setHp(e.target.value)}
                            />
                            <input
                                placeholder="Mana"
                                type="text"
                                maxLength={3}
                                value={mp}
                                onChange={(e) => setMP(e.target.value)}
                            />
                        </div>

                        <div className="attributes">
                            <input
                                type="text"
                                maxLength={2}
                                value={strength}
                                onChange={(e) => setStrength(e.target.value)}
                            />
                            <input
                                type="text"
                                maxLength={2}
                                value={dexterity}
                                onChange={(e) => setDexterity(e.target.value)}
                            />
                            <input
                                type="text"
                                maxLength={2}
                                value={constitution}
                                onChange={(e) => setConstitution(e.target.value)}
                            />
                            <input
                                type="text"
                                maxLength={2}
                                value={intelligence}
                                onChange={(e) => setIntelligence(e.target.value)}
                            />
                            <input
                                type="text"
                                maxLength={2}
                                value={wisdom}
                                onChange={(e) => setWisdom(e.target.value)}
                            />
                            <input
                                type="text"
                                maxLength={2}
                                value={charisma}
                                onChange={(e) => setCharisma(e.target.value)}
                            />
                            <label>FOR</label><label>DES</label><label>CON</label>
                            <label>INT</label><label>SAB</label><label>CAR</label>
                        </div>
                    </div>
                </div>
                <div className="sabe-wrapper">
                    <div className="save">
                        <button type="submit" onClick={handleCharge}>Salvar</button>
                        {error && <div className="error-sheet">{error}</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
