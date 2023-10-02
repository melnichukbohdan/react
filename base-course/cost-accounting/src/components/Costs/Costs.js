import "./Costs.css"
import CostItem from "../CostItem/CostItem";
import Card from "../Card/Card";
function Costs(props) {
    const costs = props.costs
    return (
        <Card className='costs'>
            {costs?.map((item, index) => (
                <CostItem
                    key={index}
                    date={item.date}
                    description={item.description}
                    amount={item.amount
                    }/>
            ))}
        </Card>
    );
}

export default Costs;