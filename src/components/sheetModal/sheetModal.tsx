import React, {JSX, useState} from "react"
import useModal from "../../hooks/useModal.tsx";
import axios from "axios";
import api from "../../Services/api.tsx"
import "./sheetModal.css"
import x from "../../assets/x.png"
import { PDFDocument } from 'pdf-lib';
import download from 'downloadjs';
import {Sheet} from "../../models/Sheet.ts";

interface Props { sheet : Sheet}

export default function SheetModal({ sheet }: Props): JSX.Element {


    async function fillPDF(sheet: Sheet) {
        const pdfBytes = await fetch('src/assets/ficha t20.pdf').then(res => res.arrayBuffer());

        // Carrega o documento PDF
        const pdfDoc = await PDFDocument.load(pdfBytes);

        // Obtém o formulário do PDF
        const form = pdfDoc.getForm();

        // Preenche os campos do PDF com os dados da ficha
        form.getTextField('NOME DO PERSONAGEM').setText(sheet.name);
        form.getTextField('Lv').setText(sheet.level.toString());
        form.getTextField('CLASSE').setText(sheet.class);
        form.getTextField('RAÇA').setText(sheet.race);
        form.getTextField('ORIGEM').setText(sheet.origin);
        form.getTextField('PVs Totais').setText(sheet.hp.toString());
        form.getTextField('PMs Totais').setText(sheet.mp.toString());
        form.getTextField('PVs Atuais').setText(sheet.hp.toString());
        form.getTextField('PMs Atuais').setText(sheet.mp.toString());
        form.getTextField('For').setText(sheet.strength.toString());
        form.getTextField('Des').setText(sheet.dexterity.toString());
        form.getTextField('Con').setText(sheet.constitution.toString());
        form.getTextField('Int').setText(sheet.intelligence.toString());
        form.getTextField('Sab').setText(sheet.wisdom.toString());
        form.getTextField('Car').setText(sheet.charisma.toString());

        // Salva o PDF modificado
        const modifiedPdfBytes = await pdfDoc.save();

        // Faz o download do PDF
        download(modifiedPdfBytes, `ficha_${sheet.name}.pdf`, 'application/pdf');
    }

    const handleDownloadPDF = async () => {
        try {
            await fillPDF(sheet);
        } catch (error) {
            console.error('Erro ao gerar o PDF:', error);
        }
    };

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
                        <button type="button" onClick={handleDownloadPDF}>Baixar PDF</button>
                        <button type="submit" onClick={handleCharge}>Excluir</button>
                        {error && <div className="error-sheet">{error}</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
