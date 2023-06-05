import React from 'react';
import frontCard from '../images/bg-card-front.png'
import backCard from '../images/bg-card-back.png'
import creditcardicon from '../images/card-logo.svg'

function CardComponent({cardholderName, cardholderNumber, cardExpN, cardExpM, cardCVC}) {

    return (
        <div className={'credit-cards'}>
            <div className={'card'}>
                <div className={"front-card-div"}>
                    <img src={frontCard} className={'front-card'} alt={'front-card'}/>
                    <div className={'card-holder-details'}>
                        <img src={creditcardicon} alt={'credit-icon'}/>
                        <p className={'credit-card-number'}>{!cardholderNumber? "9591 6489 6389 101E" : cardholderNumber}</p>
                        <div className={'cardholder-info-card'}>
                            <p>{!cardholderName? 'FELICIA LEIRE': cardholderName}</p>
                            <p>{cardExpN? cardExpN: '00'}/{cardExpM? cardExpM: '00'}</p>
                        </div>
                    </div>
                </div>

                <div className={'back-card-div'}>
                    <img src={backCard} className={'back-card'} alt={'back-card'}/>
                    <div className={'card-holder-details-cvc'}>
                        <p>{cardCVC? cardCVC: '000'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardComponent;