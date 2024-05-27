/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
// pages/tickets.js
'use client'
import {
  Flex,
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Image,
} from '@chakra-ui/react'
import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { SearchIcon } from '@chakra-ui/icons'
import CardTicket from '@/components/CardTicket/CardTicket'
import { BlocoSideBarEmpresa } from '@/components/BlocoSideBarEmpresa'
import { useGetTickets } from 'hooks/useGetTickets'
import { Ticket } from 'domains/tickets.domain'

const BlocoTickets = () => {
  const router = useRouter()
  const { tickets, isLoading, error } = useGetTickets()
  const [searchTerm, setSearchTerm] = useState('')

  const handlerCad = () => {
    router.push('/cadastroEmpresa')
  }

  const handlerTicket = () => {
    router.push('/tickets')
  }

  const handlerList = () => {
    router.push('/listagem')
  }

  const filteredTickets = useMemo(() => {
    if (!tickets) return []
    return tickets.filter((ticket: Ticket) =>
      ticket.numTicket
        .toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
  }, [tickets, searchTerm])

  const renderContent = useMemo(() => {
    if (isLoading) {
      return (
        <Flex justifyContent="center" height="100%" alignItems="center">
          <Spinner size="xl" />
        </Flex>
      )
    }
    if (error) {
      return (
        <Flex
          justifyContent="center"
          height="100%"
          alignItems="center"
          flexDirection="column"
        >
          <Text fontSize={20}>Ocorreu um erro ao procurar os Tickets.</Text>
          <Image
            src="images/Computer troubleshooting-rafiki.svg"
            width="400px"
            height="400px"
            alt="Error"
          />
        </Flex>
      )
    }
    console.log(filteredTickets)
    if (filteredTickets.length > 0) {
      return filteredTickets.map((ticket) => (
        <CardTicket key={ticket.numTicket} ticket={ticket} />
      ))
    } else {
      return <Text>Nenhum ticket encontrado</Text>
    }
  }, [filteredTickets, isLoading, error])

  return (
    <section>
      <Flex>
        <BlocoSideBarEmpresa
          onCad={handlerCad}
          onTicket={handlerTicket}
          onList={handlerList}
        />
        <Flex
          direction="column"
          flex="1"
          padding="29px 29px 0px 29px"
          mx="auto"
          width="1100px"
        >
          <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Text fontFamily="Poppins" fontWeight={800} fontSize={32}>
              Tickets
            </Text>
            <InputGroup maxW="300px">
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="black" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Pesquisar"
                borderColor="black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
          </Flex>
          <Box
            overflowY="auto"
            height="calc(100vh - 150px)" // Altura ajustada para a rolagem
            paddingRight="16px"
          >
            {renderContent}
          </Box>
        </Flex>
      </Flex>
    </section>
  )
}

export default BlocoTickets
