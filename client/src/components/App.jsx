import Main from "./Main"
import Pretraga from "./Pretraga"
import { Route, Switch } from "react-router-dom"
import { Box } from "@chakra-ui/react"

function App() {
    return (
        <Box w="full" h="100vh">
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/pretraga" component={Pretraga} />
            </Switch>
        </Box>
    )
}

export default App
