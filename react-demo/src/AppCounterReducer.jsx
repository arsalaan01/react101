import { useReducer, useState } from 'react';
import { initialState, counterReducer } from './components/CounterReducer';

const App = () => {
  
  const [state,dispatch] = useReducer(counterReducer, initialState);

  const [inputValue,setInputValue] = useState(0);

  const handleIncrement = ()=>dispatch({type:"increment"})
  const handleDecrement = ()=>dispatch({type:"decrement"})
  const handleIncrementByAmount = () => dispatch({type:"incrementByAmount",payload:+inputValue})
  const handleDecrementByAmount = () => dispatch({type:"decrementByAmount",payload:+inputValue})

  
  return <div>
    <h2>Count: {state.count}</h2>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
  
    <div>
      <input type='number' value={inputValue} onChange={e=>setInputValue(e.target.value)} />
      <button onClick={handleIncrementByAmount}>Increment By Amount</button>
      <button onClick={handleDecrementByAmount}>Decrement By Amount</button>
    </div>
  </div>
}

export default App