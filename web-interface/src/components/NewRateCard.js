import React, { useState } from "react";
import FX from '../logic/FXtaxes';
import api from '../logic/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// FX rate convertion logic
let FXconverter = new FX(LoadingFxStatus);
// FX data status
function LoadingFxStatus(code) {
    switch (code) {
        case 'OK':
            toast.success("Fixer data loaded");
            break;
        case 'ERR':
            toast.error("Err loading fixer data. try again");
            break;
        default:
            toast.error("Err loading fixer data. try again");
            break;
    }
}

function NewRateCard(promps) {

    const [selectToValues, setselectToValues] = useState(["USD", "ARS", "BRL"]);
    const [cardObj, setCardObj] = useState({
        convertAmount: 0,
        fee: 0,
        feeAmount: 0,
        mark: 0,
        selectFrom: 'EUR',
        selectTo: 'USD',
        amontToConvert: 0
    });
    toast.configure();

    // convert amount
    function convert() {
        let amontToConvert = document.querySelector('#amountToconvert').value;
        let selectFromValue = document.querySelector('#selectFrom').value;
        let selectToValue = document.querySelector('#selectTo').value;
        let pair = selectFromValue + selectToValue;
        let amountConverted = FXconverter.getRate(pair, Number(amontToConvert));
        console.log(amountConverted)
        setCardObj({
            convertAmount: amountConverted.convertAmount,
            fee: amountConverted.fee,
            feeAmount: amountConverted.feeAmount,
            mark: amountConverted.mark,
            selectFrom: selectFromValue,
            selectTo: selectToValue,
            amontToConvert: amontToConvert
        })
    }

    // Change pair 
    function clickFrom() {
        let selectFrom = document.querySelector('#selectFrom');
        switch (selectFrom.value) {
            case 'EUR':
                setselectToValues(["USD", "ARS", "BRL"]);
                break;
            case 'USD':
                setselectToValues(["ARS", "BRL"]);
                break;
            case 'BRL':
                setselectToValues(["ARS"]);
                break;
            default:
                setselectToValues(["USD", "ARS", "BRL"]);
                break;
        }
        convert();

    }

    // Clcick in boy 
    function clcikBuy() {

        let newRateObj = {
            pair: {
                from: {
                    rate: cardObj.selectFrom,
                    amount: Number(cardObj.amontToConvert)
                },
                to: {
                    rate: cardObj.selectTo,
                    amount: Number(cardObj.convertAmount)
                }
            },
            fee: Number(cardObj.fee),
            feeAmount: Number(cardObj.feeAmount),
            mark: Number(cardObj.mark)
        }
        api.postRate(newRateObj).then(res => {
            if (res === 201) {
                toast.success("Rate saved");
                promps.refreshRatesFromApi();
            } else if (res === 409) {
                toast.error("Err wrong rate information");
            } else {
                toast.error("Err saving Rate");
            }

        });
    }

    // Generate selectTo options
    function selectToItemGen(itemName, itemVal) {
        return (<option key={itemVal} value={itemVal} onClick={clickFrom}>{itemName}</option>)
    }


    return (
        <div>
            <div className="card">
                <div className="card-header">
                    New Rate
             </div>
                <div className="card-body">

                    <div className="row">
                        <div className="col-12">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <select className="custom-select" id="selectFrom">
                                        <option value="EUR" onClick={clickFrom}>EUR</option>
                                        <option value="USD" onClick={clickFrom}>USD</option>
                                        <option value="BRL" onClick={clickFrom}>BRL</option>
                                    </select>
                                </div>
                                <input type="number" className="form-control" aria-label="Text input with dropdown button" onChange={convert} id="amountToconvert" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex justify-content-center bd-highlight">
                                <h3 className="bd-highlight text-primary">=</h3>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <select className="custom-select" id="selectTo">
                                        {
                                            selectToValues.map(e => selectToItemGen(e, e))
                                        }
                                    </select>
                                </div>
                                <input type="number" className="form-control" aria-label="Text input with dropdown button" id="amountConverted" value={cardObj.convertAmount} disabled />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <p className="col-5 font-weight-bold">Fee:</p>
                                <p className="col-7" id="cardFee">{cardObj.fee + "%"}</p>
                            </div>
                            <div className="row">
                                <p className="col-5 font-weight-bold">Fee amount</p>
                                <p className="col-7" id="cardFeeAmount">{cardObj.feeAmount + " " + cardObj.selectFrom}</p>
                            </div>
                            <div className="row">
                                <p className="col-5 font-weight-bold">Mark-up</p>
                                <p className="col-7" id="cardMark">{cardObj.mark + " " + cardObj.selectFrom}</p>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            <div className="d-flex justify-content-center bd-highlight">
                                <button type="button" className="btn btn-outline-primary" onClick={clcikBuy}>Buy</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default NewRateCard;