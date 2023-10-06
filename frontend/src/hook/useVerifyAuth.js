import { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";


export function useVerifyAuth() {
    const [isAuth, setIsAuth] = useState(false)
    const { token } = useAuth()
    console.log(token);
    useEffect(() => {
        if (token) setIsAuth(true)
        else setIsAuth(false)
    }, [token])
    return {
        isAuth
    }
}