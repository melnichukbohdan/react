import './NewCost.css'
import CostForm from "../CostForm/CostForm";
import React, {useState} from "react";
const NewCost = (props) => {
    const [element, setElement] = useState('button')
    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString(),
        }
        props.onAddCost(costData);
        setElement(inputCostData.element)
    }

    const clickButtonHandler = (e) => {
        e.preventDefault();
        setElement('form')
    }

    if (element === 'form') {
        return <div className='new-cost'>
            <CostForm onSaveCostData={saveCostDataHandler} onCancel={setElement}/>
        </div>
    }

    return (
        <div className='new-cost'>
            <button type='button' onClick={clickButtonHandler}>Add a new Cost</button>
        </div>
    )
}

export default NewCost;