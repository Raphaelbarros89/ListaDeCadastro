import users from "../data/users";
import { createContext } from "react";

const UsersContext = createContext({})

export const UsersProvider = props => {
    return (
        <UsersContext.Provider value={{
            state: {
                users
            }
        }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext
