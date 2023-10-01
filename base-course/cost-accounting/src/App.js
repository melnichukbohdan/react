import './App.css';
import Costs from "./components/Costs/Costs";
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
      <Costs costs={costs} />
    </div>
  );
}

export default App;
