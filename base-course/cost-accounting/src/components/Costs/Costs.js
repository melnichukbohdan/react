import "./Costs.css"
import CostItem from "../CostItem/CostItem";
function Costs(props) {
    const costs = props.costs
    return (
        <div className='costs'>
            {costs?.map((item, index) => (
                <CostItem
                    key={index}
                    date={item.date}
                    description={item.description}
                    amount={item.amount
                    }/>
            ))}
        </div>
    );
}

export default Costs;