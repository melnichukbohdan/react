import './App.css';
import CostItem from "./components/CostItem/CostItem";

const costs = [
    {
        date: new Date(2021, 2, 12),
        description: 'Computer',
        amount: 999.99,
    },
    {
        date: new Date(2021, 3, 15),
        description: 'Phote',
        amount: 499.99,
    },
    {
        date: new Date(2021, 6, 14),
        description: 'MacBook',
        amount: 1250.99,
    }
]
function App() {
  return (
    <div>
      <h1>Start learning React</h1>
      <CostItem
        date={costs[0].date}
        description={costs[0].description}
        amount={costs[0].amount
      }></CostItem>
      <CostItem
        date={costs[1].date}
        description={costs[1].description}
        amount={costs[1].amount
      }></CostItem>
      <CostItem
        date={costs[2].date}
        description={costs[2].description}
        amount={costs[2].amount
      }></CostItem>
    </div>
  );
}

export default App;
