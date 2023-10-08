import "./Costs.css"
import Card from "../UI/Card/Card";
import CostsFilter from "./CostFilter/CostsFilter";
import React, {useState} from "react";
import Costlist from "./CostList/Costlist";

function Costs(props) {
    const [year, setYear] = useState('2023');
    const yearChangeHandler = (year) => {
        setYear(year)
    }

    const filteredCosts = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() === year;
    });

    return (
        <div>
            <Card className='costs'>
                <CostsFilter year={year} onChangeYear={yearChangeHandler} />
                {/* Ternary Operator */}
                {/*{filteredCosts.length === 0 ? (*/}
                {/*    <p>No costs this year</p>) : (*/}
                {/*    filteredCosts?.map((cost) => (*/}
                {/*        <CostItem*/}
                {/*            key={cost.id}*/}
                {/*            date={cost.date}*/}
                {/*            description={cost.description}*/}
                {/*            amount={cost.amount*/}
                {/*        }/>*/}
                {/*    ))*/}
                {/*)}*/}

                {/* Separated ternary operator into two logic if */}
                {/*{filteredCosts.length === 0 &&  <p>No costs this year</p>}*/}
                {/*{filteredCosts.length === 0 && filteredCosts?.map((cost) => (*/}
                {/*    <CostItem*/}
                {/*        key={cost.id}*/}
                {/*        date={cost.date}*/}
                {/*        description={cost.description}*/}
                {/*        amount={cost.amount*/}
                {/*    }/>*/}
                {/*))}*/}

                {/* Using variable */}
                <Costlist costs={filteredCosts}/>
            </Card>
        </div>
    );
}

export default Costs;