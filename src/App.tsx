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
                    sejam as grandes jornadas cheias de sangue, suor e lágrimas, sejam os pequenos contos
                    Bem vindo ao Character Vault Aventureiro! O lugar para você armazenar as sua histórias,
                    de viajantes cheios bravata e potencial ou até mesmo aquelas não escritas ainda, que
                     aguardam seu momento para tingir o papel. Aceitamos de tudo!
                    </p>
                </div>
                <div className="content">
                    <p>
                        <button onClick={() => setOpenModal(true)} className="addButton"></button>
                    </p>
                    <Modal isOpen={openModal}></Modal>
                </div>

            </div>
        </div>
    </>
  )
}

export default App
