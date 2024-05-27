/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState, useEffect } from 'react'
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
  IconButton,
} from '@chakra-ui/react'
import { useTickets } from 'contexts/tickets/tickets.context'
import { CheckIcon, TimeIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { useUpdateTicket } from 'hooks/useUpdateTicket'

interface TicketModalProps {
  isOpen: boolean
  onClose: () => void
}

const TicketModal = ({ isOpen, onClose }: TicketModalProps) => {
  const { selectedTicket } = useTickets()
  const updateTicket = useUpdateTicket()
  const [responsavel, setResponsavel] = useState('')
  const [status, setStatus] = useState('')
  const [descricao, setDescricao] = useState('')
  const [tipoTicket, setTipoTicket] = useState('')
  const [dataAbertura, setDataAbertura] = useState('')
  const [dataAtualizacao, setDataAtualizacao] = useState('')
  const [observacoes, setObservacoes] = useState('')

  useEffect(() => {
    if (selectedTicket) {
      setResponsavel(selectedTicket.cnpjEmpresaTicket)
      setDescricao(selectedTicket.descricaoTicket)
      setStatus(selectedTicket.statusTicket)
      setTipoTicket(selectedTicket.tipoTicket)
      setDataAbertura(selectedTicket.dataAberturaTicket)
      setDataAtualizacao(selectedTicket.dataUltimaModTicket)
      setObservacoes(selectedTicket.descricaoAjusteTicket)
    }
  }, [selectedTicket])

  const handleSave = async () => {
    const updatedTicket = {
      tipoTicket,
      descricaoTicket: descricao,
      dataAberturaTicket: dataAbertura,
      dataUltimaModTicket: new Date().toISOString(),
      descricaoAjusteTicket: observacoes,
      cnpjEmpresaTicket: responsavel,
      codEmpresaTicket: 1,
      statusTicket: status,
    }
    await updateTicket(updatedTicket, selectedTicket!.numTicket)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bgColor="#010A22" justifyContent="center">
          <Flex>
            <Text alignSelf="center" color="white" marginRight={60}>
              Ticket {selectedTicket ? selectedTicket.numTicket : '-'}
            </Text>
            <IconButton
              aria-label="Edit Ticket"
              icon={<ArrowRightIcon />}
              colorScheme="transparent"
              onClick={() => {
                setStatus('Desenvolvimento')
              }}
            />
            <IconButton
              aria-label="Edit Ticket"
              icon={<TimeIcon />}
              colorScheme="transparent"
              onClick={() => {
                setStatus('Pendente')
              }}
            />
            <IconButton
              aria-label="Edit Ticket"
              icon={<CheckIcon />}
              colorScheme="transparent"
              onClick={() => {
                setStatus('Concluída')
              }}
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
                <Text fontWeight="bold">Descrição</Text>
                <Input
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  placeholder="Descrição"
                />
              </Box>
              <Box mb={4}>
                <Text fontWeight="bold">Tipo do ticket</Text>
                <Input
                  value={tipoTicket}
                  onChange={(e) => setTipoTicket(e.target.value)}
                  placeholder="Tipo do ticket"
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
                  value={new Date(dataAbertura).toDateString()}
                  onChange={(e) => setDataAbertura(e.target.value)}
                  placeholder="Data Abertura"
                  disabled={true}
                />
              </Box>
              <Box mb={4}>
                <Text fontWeight="bold">Data Atualização</Text>
                <Input
                  value={new Date(dataAtualizacao).toDateString()}
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
          <Button
            colorScheme="green"
            mr={3}
            onClick={handleSave}
            disabled={!selectedTicket}
          >
            Salvar
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default TicketModal
