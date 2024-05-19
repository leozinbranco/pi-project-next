import { useState, useEffect } from "react";
import {
  Modal,
  Text,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Textarea,
  Flex,
  Box,
  IconButton
} from "@chakra-ui/react";
import { useTickets } from "contexts/tickets/tickets.context";
import { AttachmentIcon, TimeIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useUpdateTicket } from "hooks/useUpdateTicket";
import { stat } from "fs";

const TicketModal = ({ isOpen, onClose }) => {
  const { selectedTicket } = useTickets();
  const updateTicket  = useUpdateTicket()
  const [responsavel, setResponsavel] = useState("");
  const [status, setStatus] = useState("");
  const [assunto, setAssunto] = useState("");
  const [outroCampo, setOutroCampo] = useState("");
  const [dataAbertura, setDataAbertura] = useState("");
  const [dataAtualizacao, setDataAtualizacao] = useState("");
  const [observacoes, setObservacoes] = useState("");

  useEffect(() => {
    console.log('>>>', selectedTicket)
    if (selectedTicket) {
      setResponsavel(selectedTicket.cnpjEmpresaTicket);
      setAssunto(selectedTicket.descricaoTicket);
      setStatus(selectedTicket.statusTicket);
      setOutroCampo(selectedTicket.tipoTicket);
      setDataAbertura(selectedTicket.dataAberturaTicket);
      setDataAtualizacao(selectedTicket.dataUltimaModTicket);
      setObservacoes(selectedTicket.descricaoAjusteTicket);
    }
  }, [selectedTicket]);

  const handleSave = async () => {
    const updatedTicket = {
      tipoTicket: outroCampo,
      descricaoTicket: assunto,
      dataAberturaTicket: dataAbertura,
      dataUltimaModTicket: new Date().toISOString(),
      descricaoAjusteTicket: observacoes,
      cnpjEmpresaTicket: responsavel,
      codEmpresaTicket: 1
    }
    await updateTicket(updatedTicket, selectedTicket!.numTicket);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bgColor="#010A22" justifyContent="center">
          <Flex >
            <Text alignSelf="center" color="white" marginRight={60}>Ticket {selectedTicket ? selectedTicket.id : "-"}</Text>
            <IconButton
              aria-label="Edit Ticket"
              icon={<ArrowRightIcon />}
              colorScheme="transparent"
              onClick={() => {}}
                />
            <IconButton
              aria-label="Edit Ticket"
              icon={<TimeIcon />}
              colorScheme="transparent"
              onClick={() => {}}
                />
            <IconButton
              aria-label="Edit Ticket"
              icon={<AttachmentIcon />}
              colorScheme="transparent"
              onClick={() => {}}
                />
          </Flex>
        </ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody>
          <Flex gap={4} justifyContent="space-between">
            <Flex direction="column" marginRight={50}>
              <Box mb={4}>
                <Text fontWeight="bold">Responsável</Text>
                <Input
                  value={responsavel}
                  onChange={(e) => setResponsavel(e.target.value)}
                  disabled={true}
                  placeholder="Responsável"
                />
              </Box>
              <Box mb={4}>
                <Text fontWeight="bold">Assunto</Text>
                <Input
                  value={assunto}
                  onChange={(e) => setAssunto(e.target.value)}
                  placeholder="Assunto"
                />
              </Box>
              <Box mb={4}>
                <Text fontWeight="bold">Outro Campo</Text>
                <Input
                  value={outroCampo}
                  onChange={(e) => setOutroCampo(e.target.value)}
                  placeholder="Outro Campo"
                />
              </Box>
            </Flex>
            <Flex direction="column">
              <Box mb={4}>
                <Text fontWeight="bold">Status</Text>
                <Input
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  placeholder="Status"
                  disabled={true}
                />
              </Box>
              <Box mb={4}>
                <Text fontWeight="bold">Data Abertura</Text>
                <Input
                  value={dataAbertura}
                  onChange={(e) => setDataAbertura(e.target.value)}
                  placeholder="Data Abertura"
                  disabled={true}
                />
              </Box>
              <Box mb={4}>
                <Text fontWeight="bold">Data Atualização</Text>
                <Input
                  value={dataAtualizacao}
                  onChange={(e) => setDataAtualizacao(e.target.value)}
                  disabled={true}
                  placeholder="Data Atualização"
                />
              </Box>
              <Box mb={4}>
                <Text fontWeight="bold">Observações</Text>
                <Textarea
                  value={observacoes}
                  onChange={(e) => setObservacoes(e.target.value)}
                  placeholder="Observações"
                />
              </Box>
            </Flex>
          </Flex>
        </ModalBody>
        <ModalFooter justifyContent="center">
          <Button colorScheme="green" mr={3} onClick={handleSave} disabled={!selectedTicket}>
            Salvar
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TicketModal;
