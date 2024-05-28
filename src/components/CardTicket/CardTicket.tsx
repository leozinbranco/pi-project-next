// components/TicketCard.js
import { Box, Flex, Text, Input, IconButton } from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";
import { FC, useState } from "react";
import TicketModal from "../TicketModal/TicketModal";
import { useTickets } from "contexts/tickets/tickets.context";
import { Ticket } from "domains/tickets.domain";
interface ICardTicket {
  ticket: Ticket
}

const CardTicket:  FC<ICardTicket> = ({ ticket }) => {
  const { setSelectedTicket } = useTickets();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setSelectedTicket(ticket);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedTicket(null);
    setIsOpen(false);
  };

  return (
    <>
      <Box
        bg="white"
        borderRadius="md"
        boxShadow="md"
        p={4}
        mb={4}
      >
        <Flex justifyContent="space-between" bg="#010A22" p={2} borderTopRadius="md">
          <Text color="white" fontWeight="bold">Ticket {ticket.numTicket}</Text>
          <IconButton
            aria-label="Edit Ticket"
            icon={<AttachmentIcon />}
            colorScheme="transparent"
            onClick={openModal}
          />
        </Flex>
        <Flex direction="column" p={4}>
          <Flex justifyContent="center" mb={2}>
            <Box flex="1" textAlign="center">
              <Text fontWeight="bold">Responsável</Text>
              <Input width='80%' variant="filled" placeholder={ticket.cnpjEmpresaTicket} isReadOnly />
            </Box>
            <Box flex="1" textAlign="center">
              <Text fontWeight="bold">Assunto</Text>
              <Input width='80%' variant="filled" placeholder={ticket.descricaoTicket} isReadOnly />
            </Box>
            <Box flex="1" textAlign="center">
              <Text fontWeight="bold">Observações</Text>
              <Input width='80%' variant="filled" placeholder={ticket.descricaoAjusteTicket} isReadOnly  />
            </Box>
          </Flex>
        </Flex>
      </Box>
      <TicketModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export default CardTicket;
