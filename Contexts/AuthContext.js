import React, { useState } from "react";

export const AuthContext = React.createContext()

export function AuthProvider({children}){

    const [username, setUsername] = useState()

    const value = {
        username,
        setUsername,
    }
    
    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    );
}