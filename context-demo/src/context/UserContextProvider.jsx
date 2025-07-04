import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    console.log(children);
    
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider