import './App.css';
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost/NewCost";

function App() {
    const costs = [
        {
            id: 'c1',
            date: new Date(2021, 2, 12),
            description: 'Computer',
            amount: 999.99,
        },
        {
            id: 'c2',
            date: new Date(2021, 3, 15),
            description: 'Phote',
            amount: 499.99,
        },
        {
            id: 'c3',
            date: new Date(2021, 6, 14),
            description: 'MacBook',
            amount: 1250.99,
        }
    ]

    const addCostHandler = (cost) => {
        console.log(cost);
        console.log('App component')
    }

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
