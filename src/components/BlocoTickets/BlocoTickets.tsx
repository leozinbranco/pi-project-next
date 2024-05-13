import { Flex, Text } from "@chakra-ui/react"
import { FC } from "react"
import { BlocoSideBarEmpresa } from "../BlocoSideBarEmpresa"
import { useRouter } from "next/navigation"

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

        <Flex  padding='8px' margin='0 auto'>
          <Text>Tickets</Text>

        </Flex>
      </Flex>

    </section>
  )
  }