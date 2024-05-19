// pages/tickets.js
'use client'
import { Flex, Box, Text, Input, InputGroup, InputLeftElement, Spinner } from "@chakra-ui/react";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { SearchIcon } from '@chakra-ui/icons';
import CardTicket from "@/components/CardTicket/CardTicket";
import { BlocoSideBarEmpresa } from "@/components/BlocoSideBarEmpresa";
import { useGetTickets } from "hooks/useGetTickets";

const BlocoTickets = () => {
  const router = useRouter();
  const { tickets, isLoading, error } = useGetTickets();
  const [searchTerm, setSearchTerm] = useState("");

  const handlerCad = () => {
    router.push('/cadastroEmpresa');
  };

  const handlerTicket = () => {
    router.push('/tickets');
  };

  const handlerList = () => {
    router.push('/listagem');
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTickets = useMemo(() => {
    if (!tickets) return [];
    return tickets.filter(ticket =>
      ticket.cnpjEmpresaTicket.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.descricaoTicket.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.descricaoAjusteTicket.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [tickets, searchTerm]);

  const renderContent = useMemo(() => {
    if (isLoading) {
      return (<Flex justifyContent='center' height='100%' alignItems='center'>
        <Spinner size='xl'/>
      </Flex>)
    }

    if (error) {
      return (<Text>Erro: {error}</Text>)
    }

    if (filteredTickets.length > 0) {
      return filteredTickets.map(ticket => (
        <CardTicket key={ticket.numTicket} ticket={ticket} />
      ))
    } else {
      return (<Text>Nenhum ticket encontrado</Text>);
    }
  }, [filteredTickets, isLoading, error]);

  return (
    <section>
      <Flex>
        <BlocoSideBarEmpresa onCad={handlerCad} onTicket={handlerTicket} onList={handlerList} />
        <Flex direction="column" flex="1" padding="29px 29px 0px 29px" mx="auto" width="1100px">
          <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Text fontFamily="Poppins" fontWeight={800} fontSize={32}>Tickets</Text>
            <InputGroup maxW="300px">
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="black" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Pesquisar"
                borderColor="black"
                value={searchTerm}
                onChange={handleSearchChange}
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
  );
};

export default BlocoTickets;
