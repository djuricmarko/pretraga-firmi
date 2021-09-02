import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Button, Flex, FormControl, Heading, Input } from "@chakra-ui/react"
import axios from "axios"

const Login = () => {
    const [loginUsername, setLoginUsername] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [user, setUser] = useState(null)
    const [message, setMessage] = useState("")
    const history = useHistory()

    const handleLoginUser = (e) => {
        e.preventDefault()
        try {
            axios({
                method: "POST",
                data: {
                    username: loginUsername,
                    password: loginPassword,
                },
                withCredentials: true,
                url: "http://localhost:5000/login",
            }).then((res) => {
                console.log(res)
                if (res.data === "Successfully Authenticated") {
                    history.push("/pretraga")
                } else if (!user) {
                    setMessage("Wrong username or password")
                }
            })
        } catch (err) {
            console.warn(err)
        }
    }

    const getUser = () => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:5000/user",
        }).then((res) => {
            setUser(res.data.users)
        })
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <Flex
            h="100vh"
            justify="center"
            alignItems="center"
            flexDirection="column"
            backgroundColor="blue.100"
        >
            <Heading mb="30px" textAlign="center">
                Uloguj se. 👋
            </Heading>
            <form onSubmit={handleLoginUser}>
                <FormControl w="300px">
                    <Input
                        placeholder="Username"
                        variant="filled"
                        border="2px"
                        borderColor="blue.700"
                        color="black"
                        my="10px"
                        _placeholder={{ color: "black" }}
                        onChange={(e) => setLoginUsername(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        variant="filled"
                        borderColor="blue.700"
                        color="black"
                        my="10px"
                        _placeholder={{ color: "black" }}
                        onChange={(e) => setLoginPassword(e.target.value)}
                    />
                    <Button w="full" mt="10px" type="submit">
                        Login
                    </Button>
                </FormControl>
                <Heading mt="20px" textAlign="center" size="sm">
                    {message}
                </Heading>
            </form>
        </Flex>
    )
}

export default Login
