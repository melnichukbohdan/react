import './CostItem.css'
import CostDate from "../CostDate/CostDate";
import Card from "../../UI/Card/Card";
import React, { useState } from "react";
function CostItem(props) {

    const [description, setDescription] =  useState(props.description);
    const changeDescriptionHendler = () => {
        // description = 'New Text & call CostItem(props) function one more time.
        setDescription('New Text');
    }
    return (
        <Card className='cost-item'>
            <CostDate date={props.date}/>
            <div className="cost-item__description">
                <h2>{description}</h2>
                <div className="cost-item__price">${props.amount}</div>
            </div>
            <button onClick={changeDescriptionHendler}>Change state</button>
        </Card>
    );
}

export default CostItem