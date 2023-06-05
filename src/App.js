import './App.css';
import FormComponents from "./Components/FormComponents";
import CardComponent from "./Components/CardComponent";
import sideIllustrationD from './images/bg-main-desktop.png'
import sideIllustrationM from './images/bg-main-mobile.png'
import {useEffect, useState} from "react";

function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200)
    const [cardholderName, setCardHolderName] = useState('')
    const [cardholderNumber, setCardholderNumber] = useState('')
    const [cardExpN, setCardExpN] = useState('')
    const [cardExpM, setCardExpM] = useState('')
    const [cardCVC, setCardCVC] = useState('')

    const handleResize = () => {
        if (window.innerWidth <= 1200) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    },[])

  return (
    <div className="App">
        <div className={'illustration'}>
            <img src={!isMobile? sideIllustrationD: sideIllustrationM}/>
            <CardComponent
                cardholderName={cardholderName}
                cardholderNumber={cardholderNumber}
                cardExpN={cardExpN}
                cardExpM={cardExpM}
                cardCVC={cardCVC}
            />
        </div>
        <FormComponents
            setCardHolderName={setCardHolderName}
            setCardholderNumber={setCardholderNumber}
            setCardExpN={setCardExpN}
            setCardExpM={setCardExpM}
            setCardCVC={setCardCVC}
        />
    </div>
  );
}

export default App;
