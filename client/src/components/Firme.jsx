import { useEffect, useState } from "react"
import { getFirme } from "../api/api"
import { Flex, Heading, ListItem, UnorderedList } from "@chakra-ui/react"

const Firme = ({ sifra }) => {
    const [data, setData] = useState(null)

    const fetchData = async () => {
        const data = await getFirme()
        setData(data)
    }

    const renderData = () => (
        <UnorderedList>
            {sifra
                ? data
                      ?.filter((i) => i.sifra === sifra)
                      .map((firma) => (
                          <ListItem
                              w="700px"
                              p="5px"
                              m="20px"
                              border="1px solid black"
                              listStyleType="none"
                              rounded="md"
                              backgroundColor="green.100"
                              key={firma.id}
                          >
                              <Heading size="md">
                                  Naziv firme: {firma.naziv}
                              </Heading>
                              <Heading size="md" fontWeight="100">
                                  Mesto: {firma.mesto}
                              </Heading>
                              <Heading size="md" fontWeight="100">
                                  Kontakt: {firma.kontakt}
                              </Heading>
                          </ListItem>
                      ))
                : data?.map((firma) => (
                      <ListItem
                          w="700px"
                          p="5px"
                          m="20px"
                          border="1px solid black"
                          listStyleType="none"
                          rounded="md"
                          backgroundColor="green.100"
                          key={firma.id}
                      >
                          <Heading size="md">
                              Naziv firme: {firma.naziv}
                          </Heading>
                          <Heading size="md" fontWeight="100">
                              Mesto: {firma.mesto}
                          </Heading>
                          <Heading size="md" fontWeight="100">
                              Kontakt: {firma.kontakt}
                          </Heading>
                      </ListItem>
                  ))}
        </UnorderedList>
    )

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Flex justify="center" alignItems="center" mt="50px">
            {renderData()}
        </Flex>
    )
}

export default Firme
