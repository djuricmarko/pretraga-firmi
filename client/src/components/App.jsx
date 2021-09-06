import { Box } from "@chakra-ui/react"
import { Route, Switch } from "react-router-dom"
import ProtectedRoute from "../lib/ProtectedRoute"
import Login from "./Login"
import Main from "./Main"
import Pretraga from "./Pretraga"
import Register from "./Register"

function App() {
    return (
        <Box w="full" h="100vh">
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <ProtectedRoute exact path="/pretraga">
                    <Pretraga />
                </ProtectedRoute>
            </Switch>
        </Box>
    )
}

export default App