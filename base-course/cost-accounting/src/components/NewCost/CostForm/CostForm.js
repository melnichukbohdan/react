import "./CostForm.css"
import React, { useState } from "react";
const CostForm = (props) => {
    // One state for everyone fields.
    const [inputName, setInputName] = useState('')
    const [inputAmount, setInputAmount] = useState('')
    const [inputDate, setInputDate] = useState('')

    // // Alternative way. One state for everyone fields.
    // const [userInput, setUserInput] = useState({
    //     name: '',
    //     amount: '',
    //     date: '',
    // })

    const nameChangeHandler = (event) => {
        setInputName(event.target.value)

        // // Alternative way.
        //
        // // Bad approach.
        // setUserInput({
        //     ...userInput,
        //     name: event.target.value
        // })
        // // Nice approach.
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         name: event.target.value
        //     }
        // })
    }
    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value)
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         amount: event.target.value
        //     }
        // })
    }
    const dateChangeHandler = (event) => {
        setInputDate(event.target.value)
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         date: event.target.value
        //     }
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            name: inputName,
            amount: inputAmount,
            date: new Date(inputDate),
        }

        props.onSaveCostData(costData);

        setInputName('')
        setInputAmount('');
        setInputDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label>Name</label>
                    <input type='text'
                           value={inputName}
                           onChange={nameChangeHandler} />
                </div>
                <div className='new-cost__control'>
                    <label>Amount</label>
                    <input type='number'
                           min='0.01'
                           step='0.01'
                           value={inputAmount}
                           onChange={amountChangeHandler}/>
                </div>
                <div className='new-cost__control'>
                    <label>Date</label>
                    <input type='date'
                           min='2023-01-01'
                           step='2024-12-31'
                           value={inputDate}
                           onChange={dateChangeHandler}/>
                </div>
                <div className='new-cost__actions'>
                    <button type='submit'>Add Cost</button>
                </div>
            </div>
        </form>
    )
}

export default CostForm;