//stylesheet
import 'normalize.css'
import './App.css'
import './modal.css'

//components
import SheetModal from './components/sheetModal.tsx'

//fonts
import "./font/Tormenta20x.ttf"
import "./font/DanteMTStd-BoldItalic.otf"
import useModal from "./hooks/useModal.tsx";


function App() {
  const modalManager = useModal();


  return (
    <>
        <div className="app">
            <div className="banner">
                <div className="left">
                    <p>Character Vault</p>
                    <p className="author-name">Developed by StarvingDevelopers/CrazyT77</p>
                </div>
                <div className="right">
                    Exit
                </div>
            </div>
            <div className="front-wrapper">
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
                        <button onClick={() => modalManager.openModal(<SheetModal/>)} className="addButton"></button>

                    </div>

                </div>

            </div>
        </div>
    </>
  )
}

export default App
