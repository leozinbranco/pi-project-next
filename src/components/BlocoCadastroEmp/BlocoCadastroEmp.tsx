import { Flex, Text, Button } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { BlocoSideBarEmpresa } from "../BlocoSideBarEmpresa";
import { useRouter, useSearchParams } from "next/navigation";
import { Funcionario } from "domains/employees.domain";
import { Empresas } from "domains/enterprises.domain";
import { BlocoCampoFunc } from "../BlocoCampos/BlocoCampoFunc/BlocoCampoFunc";
import { BlocoCampoEmp } from "../BlocoCampos/BlocoCampoEmp/BlocoCampoEmp";
import { ModalAlert } from "../ModalAlert/ModalAlert";

interface Cadastro {
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  onSubmit: () => Promise<unknown | undefined>,
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  onSubmitEdit: () => Promise<unknown | undefined>,
  funcionario: Funcionario,
  empresa: Empresas,
  codEmp: React.Ref<HTMLInputElement>,
  codFunc: React.Ref<HTMLInputElement>,
  nomeEmp: React.Ref<HTMLInputElement>,
  nomeFunc: React.Ref<HTMLInputElement>,
  cpf: React.Ref<HTMLInputElement>,
  telefoneFunc: React.Ref<HTMLInputElement>,
  emailFunc: React.Ref<HTMLInputElement>,
  senha: React.Ref<HTMLInputElement>,
  cnpjFunc: React.Ref<HTMLInputElement>,
  fancyName: React.Ref<HTMLInputElement>,
  cnpjEmp: React.Ref<HTMLInputElement>,
  emailEmp: React.Ref<HTMLInputElement>,
  area: React.Ref<HTMLInputElement>,
  telefoneEmp: React.Ref<HTMLInputElement>,
  enderecoComp: React.Ref<HTMLInputElement>,
  message: string
}

export const BlocoCadastroEmp: FC<Cadastro> = ({funcionario, empresa, codEmp, codFunc, nomeFunc, nomeEmp, cpf, telefoneFunc, 
  emailFunc, senha, cnpjFunc, fancyName, cnpjEmp, emailEmp, area, telefoneEmp, enderecoComp, 
  onSubmit, onSubmitEdit, message}) => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const id = searchParams.get('idEmp') ? searchParams.get('idEmp') : searchParams.get('idFunc'); 
    const [typeCad] = useState(2)
    const [linkCurrent] = useState('cadastro');
    const [open, setOpen] = useState(false);

    const handleClose = () => {
      setOpen(false);
    };

    const handlerCad = () => {
      router.push('/cadastroEmpresa');
    }
    
    const handlerTicket = () => {
      router.push('/tickets');
    }

    const handlerList = () => {
      router.push('/listagem');
    }

    const handlerBack = () => {
      router.push('/listagem')
    }
    
    return (<section>

      <Flex> 
        <BlocoSideBarEmpresa onCad={handlerCad} onTicket={handlerTicket} onList={handlerList} linkCurrent={linkCurrent}/>

        <Flex flexDirection='column' margin='0 auto'>

          <Text margin='40px auto'  color='#010A22' fontFamily='sans-serif' fontWeight='bolder' fontSize='32'> {id ? 'Edição' : 'Cadastro'} de {typeCad === 1 ? 'Empresas' : 'Funcionários'}</Text>

          <Flex gap='24' display={typeCad === 1 ? 'flex' : 'none'}>
            <ModalAlert open={open} onClose={handleClose} message={message}/>
            <BlocoCampoEmp codEmp={codEmp} nomeEmp={nomeEmp} cnpjEmp={cnpjEmp} area={area} emailEmp={emailEmp} telefoneEmp={telefoneEmp} fancyName={fancyName} enderecoComp={enderecoComp} empresa={empresa}/>
          </Flex>

          <Flex gap='24' display={typeCad === 2 ? 'flex' : 'none'}>
            <BlocoCampoFunc codFunc={codFunc} nome={nomeFunc} cnpjFunc={cnpjFunc} telefoneFunc={telefoneFunc} cpf={cpf} emailFunc={emailFunc} senha={senha} funcionario={funcionario}/>
          </Flex>
          <Flex margin='45px auto' gap='15'>
            <Button width='200px' display={id ? 'none' : 'flex'} color='#FFFFFF' _hover={{ bg: '#010A22', color: '#FFFFFF'}} border='2px #FFFFFF solid' borderRadius='8px' bgColor='#010A22'
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={async () => await onSubmit()}>
              Cadastrar</Button>

            <Button width='200px' display={id ? 'flex' : 'none'} color='#FFFFFF' _hover={{ bg: '#010A22', color: '#FFFFFF'}} border='2px #FFFFFF solid' borderRadius='8px' bgColor='#010A22'
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={async () => await onSubmitEdit()}>
              Salvar</Button>

            <Button border='2px solid #010A22' bgColor='#FFFFFF' onClick={handlerBack}>Voltar</Button>
          </Flex>
        </Flex>


      </Flex>

    </section>
    )
};