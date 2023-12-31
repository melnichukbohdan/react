import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
  // dispatch it's a 'action' in reducer.
  const dispatch = useDispatch();
  // @ts-ignore
  const cash = useSelector(state => state.cash)
  const addCash = (cash: number) => {
    dispatch({type: 'ADD_CASH', payload: cash})
  }
  const getCash = (cash: number) => {
    dispatch({type: 'GET_CASH', payload: cash})
  }
  return (
    <div className="App">
      <div style={{fontSize: '3rem'}}>{cash}</div>
      <div style={{display: 'flex', justifyContent: 'space-around' }}>
        <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
        <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
      </div>
    </div>
  );
}

export default App;
