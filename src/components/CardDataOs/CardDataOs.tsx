import { Flex, Text, Image, Box, Input } from '@chakra-ui/react'
import { OrdemServico } from 'domains/work-orders.domain'
import React, { FC } from 'react'

interface ICardDataOs {
  dataOs: OrdemServico
}

export const CardDataOs: FC<ICardDataOs> = ({ dataOs }) => {
  /* Instanciando datas para formatação */
  if (dataOs?.dataAberturaOs) {
    dataOs.dataAberturaOs = new Date(dataOs.dataAberturaOs)
    dataOs.dataUltimaModOs = new Date(dataOs.dataUltimaModOs)
    dataOs.dataUltimoUpload = new Date(dataOs.dataUltimoUpload)
  }

  return (
    <Box
      bgColor="#FFF"
      borderColor="blue"
      margin="auto"
      width="90%"
      color="#02043E"
      fontWeight="bolder"
      borderRadius="8"
    >
      <Flex
        flexDirection="row"
        columnGap="36"
        padding="5"
        justifyContent="space-around"
      >
        <Flex flexDirection="column" gap="4">
          <Box
            bgColor="#02043E"
            borderWidth="2px"
            borderColor="#02043E"
            borderRadius="8"
            p="4"
          >
            <Text fontSize="lg" fontWeight="bold" mb="4" color="#FFF">
              O.S
            </Text>

            <Flex
              p="4"
              color="#FFF"
              borderRadius="8"
              justifyContent="space-around"
            >
              <Flex flexDirection="row" alignItems="center" gap="4">
                <Image
                  src="../../images/numberW.png"
                  width="24px"
                  height="24px"
                />
                <Flex flexDirection="column">
                  <Text>
                    Nº O.S <span style={{ color: 'red' }}>***</span>
                  </Text>
                  <Input
                    width="170px"
                    borderColor="transparent"
                    readOnly
                    borderBottom="2px solid #FFF"
                    value={dataOs?.numOs ?? '-'}
                  />
                </Flex>
              </Flex>
              <Flex flexDirection="row" alignItems="center" gap="4">
                <Image
                  src="../../images/statusW.png"
                  width="20px"
                  height="20px"
                />
                <Flex flexDirection="column">
                  <Text>
                    Status O.S <span style={{ color: 'red' }}>***</span>
                  </Text>
                  <Input
                    width="170px"
                    borderColor="transparent"
                    readOnly
                    borderBottom="2px solid #FFF"
                    value={dataOs?.statusOs ?? '-'}
                  />
                </Flex>
              </Flex>
              <Flex flexDirection="row" alignItems="center" gap="3">
                <Image
                  src="../../images/calendarW.png"
                  width="20px"
                  height="20px"
                />
                <Flex flexDirection="column">
                  <Text>Data de Cadastro</Text>
                  <Input
                    width="170px"
                    borderColor="transparent"
                    readOnly
                    borderBottom="2px solid #FFF"
                    value={
                      dataOs?.dataAberturaOs
                        ? `${dataOs.dataAberturaOs.getDate() + 1}/${Number(
                            dataOs.dataAberturaOs.getMonth() + 1
                          )}/${dataOs.dataAberturaOs.getFullYear()}`
                        : '-'
                    }
                  />
                </Flex>
              </Flex>
              <Flex flexDirection="row" alignItems="center" gap="3">
                <Image
                  src="../../images/calendarW.png"
                  width="20px"
                  height="20px"
                />
                <Flex flexDirection="column">
                  <Text>Data de Atualização</Text>
                  <Input
                    width="170px"
                    borderColor="transparent"
                    readOnly
                    borderBottom="2px solid #FFF"
                    value={
                      dataOs?.dataUltimaModOs
                        ? `${dataOs.dataUltimaModOs.getDate() + 1}/${Number(
                            dataOs.dataUltimaModOs.getMonth() + 1
                          )}/${dataOs.dataUltimaModOs.getFullYear()}`
                        : '-'
                    }
                  />
                </Flex>
              </Flex>
            </Flex>
          </Box>

          <Box
            bgColor="#FFF"
            borderWidth="2px"
            borderColor="#02043E"
            borderRadius="8"
            p="4"
          >
            <Text fontSize="lg" fontWeight="bold" mb="4">
              Dados do Objeto
            </Text>

            <Flex
              bgColor="#FFF"
              p="4"
              color="#02043E"
              justifyContent="space-around"
            >
              <Flex flexDirection="row" alignItems="center" gap="4">
                <Image
                  src="../../images/settings.png"
                  width="20px"
                  height="20px"
                />
                <Flex flexDirection="column">
                  <Text>
                    Tipo Objeto <span style={{ color: 'red' }}>***</span>
                  </Text>
                  <Input
                    borderColor="transparent"
                    readOnly
                    borderBottom="2px solid #02043E"
                    value={dataOs?.tipoObjOs ?? '-'}
                  />
                </Flex>
              </Flex>
              <Flex flexDirection="row" alignItems="center" gap="4">
                <Image
                  src="../../images/settings.png"
                  width="20px"
                  height="20px"
                />
                <Flex flexDirection="column">
                  <Text>
                    Tipo O.S <span style={{ color: 'red' }}>***</span>
                  </Text>
                  <Input
                    borderColor="transparent"
                    readOnly
                    borderBottom="2px solid #02043E"
                    value={dataOs?.tipoOs ?? '-'}
                  />
                </Flex>
              </Flex>
              <Flex flexDirection="row" alignItems="center" gap="4">
                <Image
                  src="../../images/messages.png"
                  width="20px"
                  height="20px"
                />
                <Flex flexDirection="column">
                  <Text>Descrição Ajuste</Text>
                  <Input
                    borderColor="transparent"
                    readOnly
                    borderBottom="2px solid #02043E"
                    value={dataOs?.descricaoAjustesOs ?? '-'}
                  />
                </Flex>
              </Flex>
            </Flex>
          </Box>

          <Box
            bgColor="#FFF"
            borderWidth="2px"
            borderColor="#02043E"
            borderRadius="8"
            p="4"
          >
            <Text fontSize="lg" fontWeight="bold" mb="4">
              Manutenção
            </Text>

            <Flex
              bgColor="#FFF"
              p="4"
              color="#02043E"
              justifyContent="space-around"
            >
              <Flex flexDirection="row" alignItems="center" gap="4">
                <Image
                  src="../../images/messages.png"
                  width="20px"
                  height="20px"
                />
                <Flex flexDirection="column">
                  <Text>Observações</Text>
                  <Input
                    borderColor="transparent"
                    readOnly
                    borderBottom="2px solid #02043E"
                    value={dataOs?.observacaoOs ?? '-'}
                  />
                </Flex>
              </Flex>
              <Flex flexDirection="row" alignItems="center" gap="4">
                <Image
                  src="../../images/calendar.svg"
                  width="26px"
                  height="26px"
                />
                <Flex flexDirection="column">
                  <Text>
                    Data último upload <span style={{ color: 'red' }}>***</span>
                  </Text>
                  <Input
                    borderColor="transparent"
                    readOnly
                    borderBottom="2px solid #02043E"
                    value={
                      dataOs?.dataUltimoUpload
                        ? `${dataOs.dataUltimoUpload.getDate() + 1}/${Number(
                            dataOs.dataUltimoUpload.getMonth() + 1
                          )}/${dataOs.dataUltimoUpload.getFullYear()} ${dataOs.dataUltimoUpload.getHours()}:${dataOs.dataUltimoUpload.getMinutes()}:${dataOs.dataUltimoUpload.getSeconds()}`
                        : '-'
                    }
                  />
                </Flex>
              </Flex>
            </Flex>
          </Box>

          <Box
            bgColor="#FFF"
            borderWidth="2px"
            borderColor="#02043E"
            borderRadius="8"
            p="4"
          >
            <Text fontSize="lg" fontWeight="bold" mb="4">
              Informações Gerais
            </Text>

            <Flex
              bgColor="#FFF"
              p="4"
              color="#02043E"
              justifyContent="space-around"
            >
              <Flex flexDirection="row" alignItems="center" gap="4">
                <Image src="../../images/call.png" width="20px" height="20px" />
                <Flex flexDirection="column">
                  <Text>Telefone Empr.</Text>
                  <Input
                    borderColor="transparent"
                    readOnly
                    borderBottom="2px solid #02043E"
                    value={dataOs?.EmpresaOs.telefoneEmpresa ?? '-'}
                  />
                </Flex>
              </Flex>
              <Flex flexDirection="row" alignItems="center" gap="4">
                <Image
                  src="../../images/notification.png"
                  width="20px"
                  height="20px"
                />
                <Flex flexDirection="column">
                  <Text>E-mail Empr.</Text>
                  <Input
                    borderColor="transparent"
                    readOnly
                    borderBottom="2px solid #02043E"
                    value={dataOs?.EmpresaOs.emailEmpresa ?? '-'}
                  />
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
