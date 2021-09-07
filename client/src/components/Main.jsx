import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Button, Flex, FormControl, Heading, Input } from "@chakra-ui/react"
import { getUser, loginUser, registerUser } from "../api/api"

const Main = () => {
    const history = useHistory()
    const [loginUsername, setLoginUsername] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [registerUsername, setRegisterUsername] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")

    useEffect(() => {
        getUser(() => {
            history.push("/pretraga")
        })
    }, [history])

    const handleRegisterUser = (e) => {
        e.preventDefault()
        registerUser(registerUsername, registerPassword)
        setRegisterUsername("")
        setRegisterPassword("")
    }

    const handleLoginUser = (e) => {
        e.preventDefault()
        loginUser(loginUsername, loginPassword, () => {
            history.push("/pretraga")
        })
    }

    const renderForms = () => (
        <Flex>
            <Flex
                h="100vh"
                justify="center"
                alignItems="center"
                flexDirection="column"
                backgroundColor="blue.100"
                mr="100px"
            >
                <Heading mb="30px" textAlign="center">
                    Napravi svoj nalog.
                </Heading>
                <form onSubmit={handleRegisterUser}>
                    <FormControl w="300px">
                        <Input
                            placeholder="Username"
                            value={registerUsername}
                            variant="filled"
                            border="2px"
                            borderColor="blue.700"
                            color="black"
                            my="10px"
                            _placeholder={{ color: "black" }}
                            onChange={(e) =>
                                setRegisterUsername(e.target.value)
                            }
                        />
                        <Input
                            type="password"
                            value={registerPassword}
                            placeholder="Password"
                            variant="filled"
                            borderColor="blue.700"
                            color="black"
                            my="10px"
                            _placeholder={{ color: "black" }}
                            onChange={(e) =>
                                setRegisterPassword(e.target.value)
                            }
                        />
                        <Button w="full" mt="10px" type="submit">
                            Register
                        </Button>
                    </FormControl>
                </form>
            </Flex>
            <Flex
                h="100vh"
                justify="center"
                alignItems="center"
                flexDirection="column"
                backgroundColor="blue.100"
            >
                <Heading mb="30px" textAlign="center">
                    Uloguj se.
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
                </form>
            </Flex>
        </Flex>
    )

    return (
        <Flex
            flexDirection="row"
            h="100vh"
            justify="center"
            alignItems="center"
            backgroundColor="blue.100"
        >
            {renderForms()}
        </Flex>
    )
}

export default Main
