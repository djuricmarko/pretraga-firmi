import { Button, Flex, Spinner } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Redirect } from "react-router-dom"

const Main = () => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const getUser = () => {
        setIsLoading(true)
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:5000/user",
        }).then((res) => {
            setUser(res.data.users)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        getUser()
    }, [])

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
            {!user ? (
                isLoading ? (
                    <Spinner size="xl" />
                ) : (
                    renderNotAuthed()
                )
            ) : (
                <Redirect to="/pretraga" />
            )}
        </Flex>
    )
}

export default Main
