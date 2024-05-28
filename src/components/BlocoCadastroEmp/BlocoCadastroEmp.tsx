import { Flex, Text, Button } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { BlocoSideBarEmpresa } from "../BlocoSideBarEmpresa";
import { useRouter, useSearchParams } from "next/navigation";
import { Funcionario } from "domains/employees.domain";
import { Empresas } from "domains/enterprises.domain";
import { BlocoCampoFunc } from "../BlocoCampos/BlocoCampoFunc/BlocoCampoFunc";
import { BlocoCampoEmp } from "../BlocoCampos/BlocoCampoEmp/BlocoCampoEmp";

interface Cadastro {
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  onSubmit: (empresa: Empresas) => Promise<unknown | undefined>,
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  onSubmitEdit: (empresa: Empresas) => Promise<unknown | undefined>,
    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    onSubmitFunc: (empresa: Empresas) => Promise<unknown | undefined>,
    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    onSubmitEditFunc: (empresa: Empresas) => Promise<unknown | undefined>,
  funcionario: Funcionario,
  empresa: Empresas,
}

export const BlocoCadastroEmp: FC<Cadastro> = ({funcionario, empresa,
  onSubmit, onSubmitEdit, onSubmitFunc, onSubmitEditFunc}) => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const id = searchParams.get('idEmp') ? searchParams.get('idEmp') : searchParams.get('idFunc'); 
    const [typeCad, setTypeCad] = useState(1);
    const [accessedPagent] = useState('cadastro');

    const handlerCad = () => {
      router.push('/cadastro');
    }
    
    const handlerTicket = () => {
      router.push('/tickets');
    }

    const handlerList = () => {
      router.push('/listagem');
    }

    const handlerTypeCad = () => {
      setTypeCad(typeCad === 1 ? 2 : 1);
    }
    
    return (<section>

      <Flex> 
        <BlocoSideBarEmpresa onCad={handlerCad} onTicket={handlerTicket} onList={handlerList} accessedPagent={accessedPagent}/>

        <Flex flexDirection='column' margin='0 auto'>

          <Text margin='40px auto'  color='#010A22' fontFamily='sans-serif' fontWeight='bolder' fontSize='32'> {id ? 'Edição' : 'Cadastro'} de {typeCad === 1 ? 'Empresas' : 'Funcionários'}</Text>

          <Flex gap='24' display={typeCad === 1 ? 'flex' : 'none'}>
            <BlocoCampoEmp empresa={empresa} onSubmitEdit={onSubmitEdit} onSubmit={onSubmit} />
          </Flex>

          <Flex gap='24' display={typeCad === 2 ? 'flex' : 'none'}>
            <BlocoCampoFunc funcionario={funcionario} onSubmitEdit={onSubmitEditFunc} onSubmit={onSubmitFunc}/>
          </Flex>
          
          <Button onClick={handlerTypeCad} color='#FFFFFF' _hover={{ bg: '#010A22', color: '#FFFFFF'}} border='2px #FFFFFF solid' borderRadius='8px' bgColor='#010A22'>
            Cadastro de {typeCad === 1 ? 'Funcionário' : 'Empresa'}
          </Button>
        </Flex>

      </Flex>

    </section>
    )
};