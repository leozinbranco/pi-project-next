import { Flex, Text, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { FC } from "react"
import { BlocoSideBarEmpresa } from "../BlocoSideBarEmpresa"
import { useRouter } from "next/navigation"
import { SearchIcon } from '@chakra-ui/icons'
export const BlocoTickets: FC = () => {
    const router = useRouter()
    const handlerCad = () => {
      router.push('/cadastroEmpresa')
    }

    const handlerTicket = () => {
      router.push('/tickets')
    }

    const handlerList = () => {
      router.push('/listagem')
    }

    return (<section>
      <Flex> 

        <BlocoSideBarEmpresa onCad={handlerCad} onTicket={handlerTicket} onList={handlerList}/>

        <Flex  padding='29px' margin='0 auto'  width='1100px' justifyContent='space-between'>
          <Flex>
            <Text fontFamily="Poppins" fontWeight={800} fontSize={32}>Tickets</Text>

          </Flex>
          <Flex>
            <InputGroup >
              <InputLeftElement pointerEvents='none'>
                <SearchIcon color='black' />
              </InputLeftElement>
              <Input type='tel' placeholder='Pesquisar' borderColor="black"/>
            </InputGroup>

          </Flex>
        </Flex>
      </Flex>

    </section>
  )
  }