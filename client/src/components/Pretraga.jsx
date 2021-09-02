import { useState, useEffect } from "react"
import { Button, Flex, Select } from "@chakra-ui/react"

const Pretraga = () => {
    const [delatnosti, setDelatnosti] = useState(null)

    const handleFetchDelatnosti = async () => {
        try {
            const response = await fetch("http://localhost:5000/delatnosti", {
                method: "GET",
                headers: {
                    "Content-Type": "aplication/json",
                },
            })
            const data = await response.json()
            setDelatnosti(data)
        } catch (error) {
            console.warn(error)
        }
    }

    useEffect(() => {
        handleFetchDelatnosti()
    })

    return (
        <Flex
            w="full"
            h="100vh"
            justify="center"
            alignItems="center"
            bg="green.200"
        >
            <Select
                w="300px"
                placeholder="Izaberite delatnost"
                borderColor="black"
                _hover={{ borderColor: "gray.500" }}
            >
                {delatnosti?.map((i) => (
                    <option key={i.sifra}>{i.oblast}</option>
                ))}
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </Select>
            <Button
                mx="10px"
                variant="outline"
                borderColor="black"
                _hover={{ bg: "black", color: "white" }}
            >
                Pretrazi
            </Button>
        </Flex>
    )
}

export default Pretraga
