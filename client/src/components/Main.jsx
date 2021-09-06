import { useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { Button, Flex } from "@chakra-ui/react"

const Main = () => {
    const history = useHistory()
    useEffect(() => {
        if (localStorage.getItem("logedUser")) {
            history.push("/pretraga")
        }
    }, [history])

    const renderNotAuthed = () => (
        <div>
            <Link to="/register">
                <Button mx="10px">Register</Button>
            </Link>
            <Link to="/login">
                <Button mx="10px">Login</Button>
            </Link>
        </div>
    )

    return (
        <Flex
            flexDirection="row"
            h="100vh"
            justify="center"
            alignItems="center"
            backgroundColor="blue.100"
        >
            {renderNotAuthed()}
        </Flex>
    )
}

export default Main
