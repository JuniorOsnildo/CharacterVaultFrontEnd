import {useState} from "react";

//stylesheet
import 'normalize.css'
import './App.css'
import './modal.css'

//components
import Modal from './components/modal.tsx'

//fonts
import "./font/Tormenta20x.ttf"
import "./font/DanteMTStd-BoldItalic.otf"


function App() {
  const [openModal, setOpenModal] = useState<boolean>(false)


  return (
    <>
        <div className="app">
            <div className="banner">
                <div className="right">
                    Exit
                </div>
                <div className="left">
                    <text> Character Vault</text>
                </div>
            </div>
            <div className="front-page">
                <div className="intro">
                    <p>
                        Muito bem vindo aventureiro! este é o Character Vault, um lugar para guardar os protagonistas
                        das suas histórias! Sejam as grandes jornadas cheias de sangue, suor e lágrimas, sejam os
                        pequenos contos de viajantes cheios de bravata e potencial ou até mesmo aqueles cujo conto
                        não foi escrito ainda. Aceitamos de tudo!
                    </p>
                </div>
                <div className="content">
                    <button onClick={() => setOpenModal(true)} className="addButton"></button>
                    <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}></Modal>

                </div>

            </div>
        </div>
    </>
  )
}

export default App
