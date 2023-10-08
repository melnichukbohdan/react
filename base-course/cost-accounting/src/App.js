import './App.css';
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost/NewCost";
import React, { useState } from "react";

const INITIAL_COSTS = [
    {
        id: 'c1',
        date: new Date(2023, 2, 12),
        description: 'Computer',
        amount: 999.99,
    },
    {
        id: 'c2',
        date: new Date(2023, 3, 15),
        description: 'Phone',
        amount: 499.99,
    },
    {
        id: 'c3',
        date: new Date(2023, 6, 14),
        description: 'MacBook',
        amount: 1250.99,
    }
]

function App() {

   const [costs, setCosts] = useState(INITIAL_COSTS);

    const addCostHandler = (cost) => {
        setCosts(prevCosts => {
            return [cost, ...prevCosts]
        })
    }

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
