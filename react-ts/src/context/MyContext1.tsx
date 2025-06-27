import { createContext, useState, type ReactNode, type FC } from "react";

// Step 1: Create a context
interface MyContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const MyContextOne = createContext<MyContextProps>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

// Step 2: Create a provider component
interface MyProviderProps {
  children: ReactNode;
}

const MyProviderOne: FC<MyProviderProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <MyContextOne.Provider value={{ count, increment, decrement }}>
      {children}
    </MyContextOne.Provider>
  );
};

export default MyProviderOne;