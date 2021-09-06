import { Flex, Heading, ListItem, UnorderedList } from "@chakra-ui/react"
import { useEffect, useState } from "react"

const Firme = ({ sifra }) => {
    const [data, setData] = useState(null)

    const handleFetchFirme = async () => {
        try {
            const response = await fetch("http://localhost:5000/firme", {
                method: "GET",
                headers: {
                    "Content-Type": "aplication/json",
                },
            })
            const data = await response.json()
            console.log(data)
            setData(data)
        } catch (error) {
            console.warn(error)
        }
    }

    useEffect(() => {
        handleFetchFirme()
    }, [])

    return (
        <Flex justify="center" alignItems="center" mt="50px">
            <UnorderedList>
                {data
                    ?.filter((i) => i.sifra === sifra)
                    .map((firma) => (
                        <ListItem
                            w="700px"
                            p="5px"
                            border="1px solid black"
                            listStyleType="none"
                            rounded="md"
                            key={firma.sifra}
                        >
                            <Heading size="xl">
                                Naziv firme: {firma.naziv}
                            </Heading>
                            <Heading size="md">Mesto: {firma.mesto}</Heading>
                            <Heading size="md">
                                Kontakt: {firma.kontakt}
                            </Heading>
                        </ListItem>
                    ))}
            </UnorderedList>
        </Flex>
    )
}

export default Firme
