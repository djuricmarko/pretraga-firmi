import { createContext, useEffect, useState } from "react"
import { getUser } from "../api/api"

export const AuthContext = createContext({
    user: null,
})

export const AuthContextProvider = (props) => {
    const [isAuth, setIsAuth] = useState(null)

    useEffect(() => {
        getUser(() => {
            setIsAuth(true)
        })
    })

    const contextValue = {
        isAuth,
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}
