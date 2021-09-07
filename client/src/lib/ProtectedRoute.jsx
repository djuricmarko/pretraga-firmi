import { useContext, useEffect } from "react"
import { Redirect, Route } from "react-router-dom"
import { AuthContext } from "./AuthContext"

const ProtectedRoute = ({ Component, ...rest }) => {
    const { auth } = useContext(AuthContext)

    useEffect(() => {
        console.log(auth)
    })
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth ? (
                    <Component />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    )
}

export default ProtectedRoute
