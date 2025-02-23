import {useState, useEffect} from "react";
import api from "./Services/api.tsx"

//stylesheet
import 'normalize.css'
import './App.css'

//components
import NewSheetModal from './components/sheetModal/newSheetModal.tsx'
//import LoginModal from "./components/accountModal/loginModal.tsx";
//import SignUpModal from "./components/accountModal/signUpModal.tsx"
import SheetModal from "./components/sheetModal/sheetModal.tsx";
import useModal from "./hooks/useModal.tsx";
import verifyLoginState from "./hooks/verifyLoginState.tsx";

//fonts
import "./font/Tormenta20x.ttf"
import "./font/DanteMTStd-BoldItalic.otf"

//models
import {Sheet} from "./models/Sheet.ts";



function App() {
  const modalManager = useModal();
  const eUserId = localStorage.getItem("userId");
  const [sheets, setSheet] = useState<Sheet[]>([])


  useEffect(() => {
    try {
        api.post("/Sheet/getAll", {
            userId: eUserId
        }).then((response) => {
            setSheet(response.data);
        })
        console.log(sheets);
    }
    catch (e) {
        console.log(e)
    }
  }, [])


  return (
    <>
        <div className="app">
            <div className="banner">
                <div className="left">
                    <p>Character Vault</p>
                    <p className="author-name">Developed by StarvingDevelopers/CrazyT77</p>
                </div>
                <div className="right">
                    { verifyLoginState() }

                </div>
            </div>
            <div className="front-wrapper">
                <div className="front-page">
                    <div className="greeting">
                        <p>
                            Muito bem vindo aventureiro! este é o Character Vault, um lugar para guardar os protagonistas
                            das suas histórias! Sejam as grandes jornadas cheias de sangue, suor e lágrimas, sejam as
                            as canções de viajantes cheios de bravata e potencial ou até mesmo aqueles cujo conto
                            não foi escrito ainda. Aceitamos de tudo!
                        </p>

                    </div>
                    <div className="content">
                        <div className="addButton">
                            <button
                                onClick={() => modalManager.openModal(<NewSheetModal/>)}>
                            </button>
                            <label>Nova ficha</label>
                        </div>

                        {sheets.map((sheet: Sheet) => (
                            <div className={"sheetButton"}>
                                <button key={sheet.id}
                                        onClick={() => modalManager.openModal(<SheetModal sheet={sheet}/>)}>
                                </button>
                                <label key={sheet.id}>
                                    {sheet.name}
                                </label>

                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default App
