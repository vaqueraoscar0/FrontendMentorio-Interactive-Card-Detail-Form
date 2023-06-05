import React, {useState} from 'react';
import imgSuccess from '../images/icon-complete.svg'

function FormComponents({setCardHolderName, setCardholderNumber, setCardExpN, setCardExpM, setCardCVC}) {
    const [requestMessageSuccess, setRequestMessageSuccess] = useState(true)

    const [isCardholder, setIsCardholder] = useState(true)
    const [cardholder, setCardholder] = useState('')
    setCardHolderName(cardholder)

    const [isCardHolderNum, setIsCardHolderNum] = useState(true)
    const [cardHolderNum, setCardHolderNum] = useState('')
    setCardholderNumber(cardHolderNum)

    const [isExpN, setisExpN] = useState(true)
    const [expN, setExpN] = useState('')
    setCardExpN(expN)

    const [isExpM, setisExpM] = useState(true)
    const [expM, setExpM] = useState('')
    setCardExpM(expM)

    const [isCVC, setisCVC] = useState(true)
    const [cvc, setCVC] = useState('')
    setCardCVC(cvc)

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(errorHandler())
        if(errorHandler() === true){
            setRequestMessageSuccess(false)
        }
    }

    const errorHandler = () => {
        let visaCard = new RegExp("^[0-9]{13,19}$");

        setIsCardholder(cardholder.length > 0)
        setIsCardHolderNum(cardHolderNum.length > 0 && visaCard[Symbol.match](cardHolderNum) === null? false: visaCard[Symbol.match](cardHolderNum))
        setisExpN(expN.length > 0)
        setisExpM(expM.length > 0)
        setisCVC(cvc.length > 0)

        return (cardholder.length > 0 &&
            (cardHolderNum.length > 0 && visaCard[Symbol.match](cardHolderNum) === null? false: visaCard[Symbol.match](cardHolderNum)) &&
            expN.length > 0 &&
            expM.length > 0 &&
            cvc.length > 0);
    }

    const handleExit = () =>{
        window.location.reload()
    }

    return (
        <div className={'form'} style={{justifyContent: !requestMessageSuccess? "center": 'flex-end'}}>
            {requestMessageSuccess? (<form className={'container'} onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor={"cardholder"}>CARDHOLDER NAME</label>
                    <input type={"text"}
                           maxLength={32}
                           onChange={(e) => setCardholder(e.target.value)}
                           id={"cardholder"}
                           name={"cardholder"}
                           placeholder={"e.g. Jane Appleseed"}
                           style={{border: !isCardholder ? '1px solid hsl(0, 100%, 66%)' : '1px solid gainsboro'}}
                    />
                    <label htmlFor={"cardholder"}
                           className={'error-message'}>{!isCardholder ? 'This Field Is Empty' : ''}</label>
                </div>

                <div>
                    <label htmlFor="cardnumber">CARD NUMBER</label>
                    <input type="text"
                           maxLength={16}
                           onChange={(e) => setCardHolderNum(e.target.value)}
                           id="cardnumber"
                           name="cardnumber"
                           placeholder="e.g. 1234 5678 9123 0000"
                           style={{border: !isCardHolderNum ? '1px solid hsl(0, 100%, 66%)' : '1px solid gainsboro'}}
                    />
                    <label htmlFor="cardnumber"
                           className={'error-message'}>{!isCardHolderNum ? "Wrong format, numbers only" : ''}</label>
                </div>

                <div className={'card-num-details'}>
                    <div className={'exp-date'}>
                        <label htmlFor={"cardDate"}>EXP. DATE (MM/YY)</label>
                        <div className={'exp-date-item'} id={"cardDate"}>
                            <input
                                type="text"
                                maxLength={2}
                                onChange={(e) => setExpM(e.target.value)}
                                placeholder="MM"
                                style={{border: !isExpM ? '1px solid hsl(0, 100%, 66%)' : '1px solid gainsboro'}}
                            />
                            <input
                                type="text"
                                maxLength={2}
                                onChange={(e) => setExpN(e.target.value)}
                                placeholder="YY"
                                style={{border: !isExpN ? '1px solid hsl(0, 100%, 66%)' : '1px solid gainsboro'}}
                            />
                        </div>
                        <label htmlFor={'cardDate'} className={'error-message'}>{!isExpN ? "Can't be blank" : ''}</label>

                    </div>
                    <div className={'card-cvc'}>
                        <label htmlFor="country">CVC</label>
                        <input type="text"
                               maxLength={3}
                               onChange={(e) => setCVC(e.target.value)}
                               id="cardnumber"
                               name="cardnumber"
                               placeholder="e.g. 123"
                               style={{border: !isCVC ? '1px solid hsl(0, 100%, 66%)' : '1px solid gainsboro'}}
                        />
                        <label htmlFor="country" className={'error-message'}>{!isCVC ? "Can't be blank" : ''}</label>
                    </div>
                </div>

                <button type={"submit"}>Confirm</button>
            </form>
            ):
                <div className={'message-success'}>
                    <img src={imgSuccess} alt={'success-icon'}/>
                    <h1>THANK YOU!</h1>
                    <p>We've added your card details</p>
                    <button type={"submit"} className={'button-success'} onClick={handleExit}>Confirm</button>
                </div>
            }
        </div>
    );
}

export default FormComponents;