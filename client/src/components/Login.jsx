import { useState } from "react"
import { useHistory } from "react-router-dom"
import { Button, Flex, FormControl, Heading, Input } from "@chakra-ui/react"

const Login = () => {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = async (e) => {
        e.preventDefault()
        history.push("/")
    }

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
            <form onSubmit={handleRegister}>
                <FormControl w="300px">
                    <Input
                        type="email"
                        placeholder="Email"
                        variant="filled"
                        border="2px"
                        borderColor="blue.700"
                        color="black"
                        my="10px"
                        _placeholder={{ color: "black" }}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        variant="filled"
                        borderColor="blue.700"
                        color="black"
                        my="10px"
                        _placeholder={{ color: "black" }}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button w="full" mt="10px" type="submit">
                        Register
                    </Button>
                </FormControl>
            </form>
        </Flex>
    )
}

export default Login
