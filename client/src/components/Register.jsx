import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Button, Flex, FormControl, Heading, Input } from "@chakra-ui/react"
import axios from "axios"

const Register = () => {
    const [loginUsername, setLoginUsername] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const history = useHistory()

    const handleLoginUser = (e) => {
        e.preventDefault()
        axios({
            method: "POST",
            data: {
                username: loginUsername,
                password: loginPassword,
            },
            withCredentials: true,
            url: "http://localhost:5000/register",
        })
            .then((res) => {
                history.push("/login")
            })
            .catch((err) => {
                console.warn(err)
            })
    }

    useEffect(() => {
        if (localStorage.getItem("logedUser")) {
            history.push("/pretraga")
        }
    })

    return (
        <Flex
            h="100vh"
            justify="center"
            alignItems="center"
            flexDirection="column"
            backgroundColor="blue.100"
        >
            <Heading mb="30px" textAlign="center">
                Napravi svoj nalog. 👋
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
                        Register
                    </Button>
                </FormControl>
            </form>
        </Flex>
    )
}

export default Register
