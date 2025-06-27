import { createContext, type ReactNode, useState, type FC } from 'react';

// define a type for the context data

type MyContextData = {
    value: string;
    setValue: (value: string) => void;
}

// create the context with a default value
const MyContext = createContext<MyContextData | undefined>(undefined);

// create a provider component

type MyContextProviderProps = {
    children: ReactNode;
}

export const MyContextProvider: FC<MyContextProviderProps> = ({ children }) => {
    const [value, setValue] = useState<string>('default value');

    const contextValue: MyContextData = {
        value,
        setValue,
    };

    return (
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    );
}

export default MyContext;