import { useContext } from "react";
import  { MyContextOne } from "../context/MyContext1";

const MyComponentOne: React.FC = () => {
  const { count, increment, decrement } = useContext(MyContextOne);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default MyComponentOne;