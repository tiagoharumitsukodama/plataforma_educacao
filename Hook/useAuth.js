import { useContext } from "react";
import { AuthContext } from "../pages/Contexts/AuthContext";


export function useAuth(){
    return useContext(AuthContext)
}