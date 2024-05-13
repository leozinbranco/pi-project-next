import { Flex, Text, Select } from "@chakra-ui/react"
import { useRouter } from "next/navigation"
import { BlocoSideBarEmpresa } from "../BlocoSideBarEmpresa"

export const BlocoListagem = () => {
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
  
        <Flex margin='15px auto' width='1100px' justifyContent='space-between'>
          <Flex>
            <Text id='listMain' fontSize='32' textColor='#010A22' fontWeight='bolder' marginRight='8px'>Empresas</Text>
          </Flex>
          <Flex>
            <Select>
              <option value='1'>Empresas</option>
              <option value='2'>Funcionários</option>
            </Select>

          </Flex>
        </Flex>
      </Flex>
    </section>
      )
}