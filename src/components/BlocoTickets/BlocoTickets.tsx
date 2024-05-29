import { Flex, Text } from "@chakra-ui/react"
import { FC, useState } from "react"
import { BlocoSideBarEmpresa } from "../BlocoSideBarEmpresa"
import { useRouter } from "next/navigation"

export const BlocoTickets: FC = () => {
    const router = useRouter()
    const [accessedPagent] = useState('tickets')
    const handlerCad = () => {
      router.push('/cadastro')
    }

    const handlerTicket = () => {
      router.push('/tickets')
    }

    const handlerList = () => {
      router.push('/listagem');
    }

    return (<section>
      <Flex> 

        <BlocoSideBarEmpresa onCad={handlerCad} onTicket={handlerTicket} onList={handlerList} accessedPagent={accessedPagent}/>

        <Flex  padding='8px' margin='0 auto'>
          <Text>Tickets</Text>

        </Flex>
      </Flex>

    </section>
  )
  }