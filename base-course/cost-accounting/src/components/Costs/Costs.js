import "./Costs.css"
import CostItem from "./CostItem/CostItem";
import Card from "../UI/Card/Card";
import CostsFilter from "./CostFilter/CostsFilter";
import React, {useState} from "react";

function Costs(props) {
    const [year, setYear] = useState(new Date().getFullYear());
    const costs = props.costs
    const yearChangeHandler = (year) => {
        setYear(year)
    }

    return (
        <div>

            <Card className='costs'>
                <CostsFilter year={year} onChangeYear={yearChangeHandler} />
                {costs?.map((item, index) => (
                    <CostItem
                        key={index}
                        date={item.date}
                        description={item.description}
                        amount={item.amount
                        }/>
                ))}
            </Card>
        </div>
    );
}

export default Costs;