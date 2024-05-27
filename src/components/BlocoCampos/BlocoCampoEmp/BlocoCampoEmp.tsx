import { Flex, Input, Button } from "@chakra-ui/react"
import { Empresas } from "domains/enterprises.domain"
import { useBuscaEmpresa } from "hooks/useEmpresa";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react"

interface Cadastro {
  empresa: Empresas,
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  onSubmit: (empresa: Empresas) => Promise<unknown | undefined>,
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  onSubmitEdit: (empresa: Empresas) => Promise<unknown | undefined>,
}

  export const BlocoCampoEmp: FC<Cadastro> = ({ empresa, onSubmitEdit, onSubmit }) => {
    const [codigo, setCodValue] = useState(empresa?.codigo ?? '');
    const [nome, setNomeValue] = useState(empresa?.nome ?? '');
    const [documento, setCnpjValue] = useState(empresa?.documento ?? '');
    const [area, setAreaValue] = useState(empresa?.area ?? '');
    const [enderecoComp, setEnderecoCompValue] = useState(empresa?.enderecoComp ?? '');
    const [nomeFantasia, setFancyNameValue] = useState(empresa?.nomeFantasia ?? '');
    const [email, setEmailValue] = useState(empresa?.email ?? '');
    const [telefone, setTelefoneValue] = useState(empresa?.telefone ?? '');
    const { buscaEmp } = useBuscaEmpresa();
    const searchParams = useSearchParams();
    const id = searchParams.get('idEmp') ? searchParams.get('idEmp') : searchParams.get('idFunc'); 
    const router = useRouter()

    useEffect(() => {
      setCodValue(empresa?.codigo ?? '')
      setNomeValue(empresa?.nome ?? '');
      setCnpjValue(empresa?.documento ?? '');
      setAreaValue(empresa?.area ?? '');
      setEnderecoCompValue(empresa?.enderecoComp ?? '');
      setFancyNameValue(empresa?.nomeFantasia ?? '');
      setEmailValue(empresa?.email ?? '');
      setTelefoneValue(empresa?.telefone ?? '');
    }, [empresa]);

    useEffect(() => {
      const fetchEmployee = async () => {
        if (id) {
          try {
            const empresa = await buscaEmp(Number(id));
            if (empresa) {
              setCodValue(empresa?.codigo ?? '')
              setNomeValue(empresa?.nome ?? '');
              setCnpjValue(empresa?.documento ? empresa.documento.replace(/\D/g, '') : '');
              setAreaValue(empresa?.area ?? '');
              setEnderecoCompValue(empresa?.enderecoComp ?? '');
              setFancyNameValue(empresa?.nomeFantasia ?? '');
              setEmailValue(empresa?.email ?? '');
              setTelefoneValue(empresa?.telefone ? empresa.telefone.replace(/\D/g, '') : '');
            }
          } catch (error) {
            router.push('/listagem');
          }
        }
      }
  
      fetchEmployee().catch(error => console.error('Erro na chamada:', error)); 
      }, [id, router]);

      const handlerBack = () => {
        router.push('/listagem');
      }
  
    return (
      <>
        <Flex flexDirection='column'> 
          <Flex gap='12'>

            <Flex flexDirection='column' gap='12'>
              <Input
                border='2px solid #010A22'
                padding='25px'
                value={codigo}
                onChange={(e) => setCodValue(Number(e.target.value))}
                display='none'
          />
              <Input
                border='2px solid #010A22'
                padding='25px'
                value={nome}
                onChange={(e) => setNomeValue(e.target.value)}
                placeholder='Razão Social'
          />
              <Input 
                border='2px solid #010A22'
                padding='25px'
                maxLength={14}
                minLength={14}
                value={documento}
                onChange={(e) => setCnpjValue(e.target.value)}
                placeholder='CNPJ'
          />
              <Input 
                border='2px solid #010A22'
                padding='25px'
                value={area}
                onChange={(e) => setAreaValue(e.target.value)}
                placeholder='Área de Atua.'
          />
              <Input 
                border='2px solid #010A22'
                padding='25px'
                value={enderecoComp}
                onChange={(e) => setEnderecoCompValue(e.target.value)}
                placeholder='Endereço Comp.'
          />
            </Flex>
  
            <Flex flexDirection='column' gap='12'>
              <Input 
                border='2px solid #010A22'
                padding='25px'
                value={nomeFantasia}
                onChange={(e) => setFancyNameValue(e.target.value)}
                placeholder='Nome Fantasia'
          />
              <Input 
                border='2px solid #010A22'
                padding='25px'
                type="email"
                value={email}
                onChange={(e) => setEmailValue(e.target.value)}
                placeholder='E-mail'
          />
              <Input 
                border='2px solid #010A22'
                padding='25px'
                value={telefone}
                onChange={(e) => setTelefoneValue(e.target.value)}
                minLength={10}
                maxLength={11}
                placeholder='Telefone'
          />
            </Flex>
          </Flex>

          <Flex margin='45px auto' gap='15'>
            <Button width='200px' display={id ? 'none' : 'flex'} color='#FFFFFF' _hover={{ bg: '#010A22', color: '#FFFFFF'}} border='2px #FFFFFF solid' borderRadius='8px' bgColor='#010A22'
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={async () => await onSubmit({nome, email, documento, telefone, enderecoComp, nomeFantasia, codigo, area})}>
              Cadastrar</Button>

            <Button width='200px' display={id ? 'flex' : 'none'} color='#FFFFFF' _hover={{ bg: '#010A22', color: '#FFFFFF'}} border='2px #FFFFFF solid' borderRadius='8px' bgColor='#010A22'
              onClick={() => { void onSubmitEdit({nome, email, documento, telefone, enderecoComp, nomeFantasia, codigo, area}) }}>
              Salvar</Button>

            <Button border='2px solid #010A22' bgColor='#FFFFFF' onClick={handlerBack}>Voltar</Button>
          </Flex>
        </Flex>
      </>
    );
  };
  