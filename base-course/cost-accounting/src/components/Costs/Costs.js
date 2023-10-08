import "./Costs.css"
import CostItem from "./CostItem/CostItem";
import Card from "../UI/Card/Card";
import CostsFilter from "./CostFilter/CostsFilter";
import React, {useState} from "react";

function Costs(props) {
    const [year, setYear] = useState('2023');
    const yearChangeHandler = (year) => {
        setYear(year)
    }

    const filteredYear = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() === year;
    });

    return (
        <div>
            <Card className='costs'>
                <CostsFilter year={year} onChangeYear={yearChangeHandler} />
                {filteredYear?.map((cost) => (
                    <CostItem
                        key={cost.id}
                        date={cost.date}
                        description={cost.description}
                        amount={cost.amount
                        }/>
                ))}
            </Card>
        </div>
    );
}

export default Costs;