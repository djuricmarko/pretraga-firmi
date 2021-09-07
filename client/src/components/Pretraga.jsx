import { useState, useEffect } from "react"
import { Flex, Select } from "@chakra-ui/react"
import { getDelatnosti } from "../api/api"
import Firme from "./Firme"

const Pretraga = () => {
    const [delatnosti, setDelatnosti] = useState(null)
    const [selected, setSelected] = useState(null)

    const fetchData = async () => {
        const data = await getDelatnosti()
        setDelatnosti(data)
    }

    const renderData = () => (
        <Select
            w="500px"
            mt="40px"
            placeholder="Izaberite delatnost"
            borderColor="black"
            _hover={{ borderColor: "gray.500" }}
            onChange={(e) => {
                setSelected(e.target.value.substring(0, 4))
            }}
        >
            {delatnosti?.map((i) => (
                <option key={i.sifra}>{`${i.sifra} | ${i.naziv}`}</option>
            ))}
        </Select>
    )

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Flex
            flexDirection="column"
            w="full"
            h="100vh"
            alignItems="center"
            bg="green.200"
        >
            {renderData()}
            <Firme sifra={selected} />
        </Flex>
    )
}

export default Pretraga
