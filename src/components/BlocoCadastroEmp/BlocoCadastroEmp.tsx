import { Flex, Input, Text, Button } from "@chakra-ui/react";
import React, { FC } from "react";
import { BlocoSideBarEmpresa } from "../BlocoSideBarEmpresa";
import { useRouter, usePathname } from "next/navigation";
import { Funcionario } from "domains/employees.domain";
import { Empresas } from "domains/enterprises.domain";

interface Cadastro {
  funcionario: Funcionario,
  empresa: Empresas,
  nome: React.Ref<HTMLInputElement>,
  cpf: React.Ref<HTMLInputElement>,
  telefoneFunc: React.Ref<HTMLInputElement>,
  emailFunc: React.Ref<HTMLInputElement>,
  senha: React.Ref<HTMLInputElement>,
  cnpjFunc: React.Ref<HTMLInputElement>,
  name: React.Ref<HTMLInputElement>,
  fancyName: React.Ref<HTMLInputElement>,
  cnpjEmp: React.Ref<HTMLInputElement>,
  emailEmp: React.Ref<HTMLInputElement>,
  area: React.Ref<HTMLInputElement>,
  telefoneEmp: React.Ref<HTMLInputElement>,
  enderecoComp: React.Ref<HTMLInputElement>
}

export const BlocoCadastroEmp: FC<Cadastro> = ({funcionario, empresa, nome, cpf, telefoneFunc, 
  emailFunc, senha, cnpjFunc, name, fancyName, cnpjEmp, emailEmp, area, telefoneEmp, enderecoComp}) => {
    const router = useRouter()
    const pathName = usePathname()

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

        <Flex flexDirection='column' margin='0 auto'>

          <Text margin='40px auto'  color='#010A22' fontFamily='sans-serif' fontWeight='bolder' fontSize='32'> Cadastro de {pathName.includes('Empresa') ? 'Empresas' : 'Funcionários'}</Text>

          <Flex gap='24' display={pathName.includes('Empresa') ? 'flex' : 'none'}>
            <Flex flexDirection='column' gap='12'>
              <Input 
                border='2px solid #010A22'
                padding='25px'
                value={empresa?.name}
                ref={nome}
                placeholder='Razão Social'
                />
              <Input 
                border='2px solid #010A22'
                padding='25px'
                value={empresa?.fancyName}
                ref={cnpjEmp}
                placeholder='CNPJ'
                />
              <Input 
                border='2px solid #010A22'
                padding='25px'
                value={empresa?.area}
                ref={area}
                placeholder='Área de Atua.'
                />
              <Input 
                border='2px solid #010A22'
                padding='25px'
                value={empresa?.enderecoComp}
                ref={enderecoComp}
                placeholder='Endereço Comp.'
                />
            </Flex>

            <Flex flexDirection='column' gap='12'>
              <Input 
                border='2px solid #010A22'
                padding='25px'
                value={empresa?.fancyName}
                ref={fancyName}
                placeholder='Nome Fantasia'
                />
              <Input 
                border='2px solid #010A22'
                padding='25px'
                value={empresa?.email}
                ref={emailEmp}
                placeholder='E-mail '
                />
              <Input 
                border='2px solid #010A22'
                padding='25px'
                value={empresa?.telefone}
                ref={telefoneEmp}
                placeholder='Telefone'
                />
            </Flex>
          </Flex>

          <Flex gap='24' display={pathName.includes('Funcionario') ? 'flex' : 'none'}>
            <Flex flexDirection='column' gap='12'>
              <Input 
                border='2px solid #010A22'
                padding='25px'
                value={funcionario?.nome}
                ref={nome}
                placeholder='Nome'
                />
              <Input 
                border='2px solid #010A22'
                padding='25px'
                value={funcionario?.telefone}
                ref={telefoneFunc}
                placeholder='Telefone'
                />
              <Input 
                border='2px solid #010A22'
                padding='25px'
                value={funcionario?.senha}
                ref={senha}
                type='password'
                placeholder='Senha'
                />
            </Flex>

            <Flex flexDirection='column' gap='12'>
              <Input 
                border='2px solid #010A22'
                padding='25px'
                value={funcionario?.cpf}
                ref={cpf}
                placeholder='CPF'
                />
              <Input 
                border='2px solid #010A22'
                padding='25px'
                value={funcionario?.email}
                ref={emailFunc}
                placeholder='E-mail '
                />
              <Input 
                border='2px solid #010A22'
                padding='25px'
                value={funcionario?.cnpjEmpresa.cnpj}
                ref={cnpjFunc}
                placeholder='CNPJ Empresa'
                />
            </Flex>
          </Flex>
          
          <Flex margin='45px auto' gap='15'>
            <Button width='200px' color='#FFFFFF' _hover={{ bg: '#010A22', color: '#FFFFFF'}} border='2px #FFFFFF solid' borderRadius='8px' bgColor='#010A22'>
              Cadastrar</Button>

            <Button border='2px solid #010A22' bgColor='#FFFFFF'>Voltar</Button>
          </Flex>
        </Flex>


      </Flex>

    </section>
    )
};