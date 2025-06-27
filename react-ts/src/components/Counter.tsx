import { useReducer } from 'react';

type Actions = { type: 'increment'} | { type: 'decrement' };
type State = { count: number };


const reducer = (state:State, action:Actions): State => {
    switch (action.type) {
        case 'increment':
        return { count: state.count + 1 };
        case 'decrement':
        return { count: state.count - 1 };
        default:
        throw state;
    }
}

const Counter = () => {

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  )
}

export default Counter