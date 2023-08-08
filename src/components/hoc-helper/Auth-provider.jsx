import { useState, createContext } from "react";

const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const singIn = (newUser, cb) =>{
        setUser(newUser);
        cb();
    };

    const singOut = (cb) => {
        setUser(null);
        cb();
    }

    const value = {user, singIn, singOut}


    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
};

export {AuthProvider, AuthContext};