import { Flex, Input } from "@chakra-ui/react"
import { Empresas } from "domains/enterprises.domain"
import { buscaEmpresa } from "hooks/useEmpresa";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react"

interface Cadastro {
  empresa: Empresas,
  codEmp: React.Ref<HTMLInputElement>,
  nomeEmp: React.Ref<HTMLInputElement>,
  fancyName: React.Ref<HTMLInputElement>,
  cnpjEmp: React.Ref<HTMLInputElement>,
  emailEmp: React.Ref<HTMLInputElement>,
  area: React.Ref<HTMLInputElement>,
  telefoneEmp: React.Ref<HTMLInputElement>,
  enderecoComp: React.Ref<HTMLInputElement>,
  }

  export const BlocoCampoEmp: FC<Cadastro> = ({ empresa, codEmp, nomeEmp, cnpjEmp, enderecoComp, area, fancyName, emailEmp, telefoneEmp }) => {
    const [codValue, setCodValue] = useState(empresa?.cod ?? '');
    const [nomeValue, setNomeValue] = useState(empresa?.nome ?? '');
    const [cnpjValue, setCnpjValue] = useState(empresa?.document ?? '');
    const [areaValue, setAreaValue] = useState(empresa?.area ?? '');
    const [enderecoCompValue, setEnderecoCompValue] = useState(empresa?.enderecoComp ?? '');
    const [fancyNameValue, setFancyNameValue] = useState(empresa?.fancyName ?? '');
    const [emailValue, setEmailValue] = useState(empresa?.email ?? '');
    const [telefoneValue, setTelefoneValue] = useState(empresa?.telefone ?? '');
    const searchParams = useSearchParams();
    const id = searchParams.get('idEmp'); 
    const router = useRouter()

    useEffect(() => {
      setCodValue(empresa?.cod ?? '')
      setNomeValue(empresa?.nome ?? '');
      setCnpjValue(empresa?.document ?? '');
      setAreaValue(empresa?.area ?? '');
      setEnderecoCompValue(empresa?.enderecoComp ?? '');
      setFancyNameValue(empresa?.fancyName ?? '');
      setEmailValue(empresa?.email ?? '');
      setTelefoneValue(empresa?.telefone ?? '');
    }, [empresa]);

    useEffect(() => {
      const fetchEmployee = async () => {
        if (id) {
          try {
            const empresa = await buscaEmpresa(Number(id));
            if (empresa) {
              setCodValue(empresa?.cod ?? '')
              setNomeValue(empresa?.nome ?? '');
              setCnpjValue(empresa?.document ? empresa.document.replace(/\D/g, '') : '');
              setAreaValue(empresa?.area ?? '');
              setEnderecoCompValue(empresa?.enderecoComp ?? '');
              setFancyNameValue(empresa?.fancyName ?? '');
              setEmailValue(empresa?.email ?? '');
              setTelefoneValue(empresa?.telefone ? empresa.telefone.replace(/\D/g, '') : '');
            }
          } catch (error) {
            router.push('/listagem')
          }
        }
      }
  
      fetchEmployee().catch(error => console.error('Erro na chamada:', error)); 
      }, [id]);
  
    return (
      <>
        <Flex flexDirection='column' gap='12'>
          <Input
            border='2px solid #010A22'
            padding='25px'
            value={codValue}
            onChange={(e) => setCodValue(Number(e.target.value))}
            ref={codEmp}
            display='none'
          />
          <Input
            border='2px solid #010A22'
            padding='25px'
            value={nomeValue}
            onChange={(e) => setNomeValue(e.target.value)}
            ref={nomeEmp}
            placeholder='Razão Social'
          />
          <Input 
            border='2px solid #010A22'
            padding='25px'
            maxLength={14}
            minLength={14}
            value={cnpjValue}
            onChange={(e) => setCnpjValue(e.target.value)}
            ref={cnpjEmp}
            placeholder='CNPJ'
          />
          <Input 
            border='2px solid #010A22'
            padding='25px'
            value={areaValue}
            onChange={(e) => setAreaValue(e.target.value)}
            ref={area}
            placeholder='Área de Atua.'
          />
          <Input 
            border='2px solid #010A22'
            padding='25px'
            value={enderecoCompValue}
            onChange={(e) => setEnderecoCompValue(e.target.value)}
            ref={enderecoComp}
            placeholder='Endereço Comp.'
          />
        </Flex>
  
        <Flex flexDirection='column' gap='12'>
          <Input 
            border='2px solid #010A22'
            padding='25px'
            value={fancyNameValue}
            onChange={(e) => setFancyNameValue(e.target.value)}
            ref={fancyName}
            placeholder='Nome Fantasia'
          />
          <Input 
            border='2px solid #010A22'
            padding='25px'
            type="email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            ref={emailEmp}
            placeholder='E-mail'
          />
          <Input 
            border='2px solid #010A22'
            padding='25px'
            value={telefoneValue}
            onChange={(e) => setTelefoneValue(e.target.value)}
            ref={telefoneEmp}
            minLength={10}
            maxLength={11}
            placeholder='Telefone'
          />
        </Flex>
      </>
    );
  };
  