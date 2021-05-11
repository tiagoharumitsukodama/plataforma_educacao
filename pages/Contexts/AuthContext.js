import React, { useState } from "react";
import { useCookies } from 'react-cookie'

export const AuthContext = React.createContext()

export function AuthProvider({children}){

    const [username, setUsername] = useState()

    const [cookies, setCookie, removeCookie] = useCookies(['authToken']);


    const value = {
        username,
        setUsername,
        cookies,
        setCookie,
        removeCookie
    }
    
    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    );
}