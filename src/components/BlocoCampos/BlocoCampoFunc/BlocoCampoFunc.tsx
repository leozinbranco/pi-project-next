import React, { FC, useState, useEffect } from 'react';
import { Button, Flex, Input } from "@chakra-ui/react";
import { Funcionario } from "domains/employees.domain";
import { useRouter, useSearchParams } from 'next/navigation';
import { useBuscaFuncionario } from 'hooks/useFuncionario';

interface Cadastro {
  funcionario: Funcionario,
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  onSubmit: (funcionario: Funcionario) => Promise<unknown | undefined>,
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  onSubmitEdit: (funcionario: Funcionario) => Promise<unknown | undefined>,
}

export const BlocoCampoFunc: FC<Cadastro> = ({ funcionario, onSubmit, onSubmitEdit }) => {
  const [codigo, setCodValue] = useState(funcionario?.codigo ?? '');
  const [nome, setNomeValue] = useState(funcionario?.nome ?? '');
  const [telefone, setTelefoneFuncValue] = useState(funcionario?.telefone ?? '');
  const [senha, setSenhaValue] = useState('');
  const [documento, setCpfValue] = useState(funcionario?.documento ?? '');
  const [email, setEmailFuncValue] = useState(funcionario?.email ?? '');
  const [cnpjEmpresa, setCnpjFuncValue] = useState(funcionario?.cnpjEmpresa ?? '');
  const searchParams = useSearchParams();
  const { buscaFuncionario } = useBuscaFuncionario();
  const id = searchParams.get('idFunc');
  const router = useRouter(); 

  useEffect(() => {
    setCodValue(funcionario?.codigo ?? '')
    setNomeValue(funcionario?.nome ?? '');
    setTelefoneFuncValue(funcionario?.telefone ?? '');
    setCpfValue(funcionario?.documento ?? '');
    setEmailFuncValue(funcionario?.email ?? '');
    setCnpjFuncValue(funcionario?.cnpjEmpresa ?? '');
  }, [funcionario]);

  const handlerBack = () => {
    router.push('/listagem');
  }

  useEffect(() => {
    const fetchEmployee = async () => {
      if (id) {
        try {
          const employee = await buscaFuncionario(Number(id));
          if (employee) {
            setCodValue(employee?.codigo ?? '')
            setNomeValue(employee.nome ?? '');
            setTelefoneFuncValue(employee.telefone ? employee.telefone.replace(/\D/g, '') : '');
            setSenhaValue('');
            setCpfValue(employee.documento ? employee.documento.replace(/\D/g, '') : '');
            setEmailFuncValue(employee.email ?? '');
            setCnpjFuncValue(employee.cnpjEmpresa ?? '');
          }
        } catch (error) {
          console.error('Erro ao buscar funcionário:', error);
        }
      }
    }

    fetchEmployee().catch(error => console.error('Erro na chamada:', error));
    }, [id]);

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
              placeholder='Nome'
        />
            <Input
              border='2px solid #010A22'
              padding='25px'
              value={telefone}
              onChange={(e) => setTelefoneFuncValue(e.target.value)}
              minLength={10}
              maxLength={11}
              placeholder='Telefone'
        />
            <Input
              border='2px solid #010A22'
              padding='25px'
              value={senha}
              onChange={(e) => setSenhaValue(e.target.value)}
              type='password'
              placeholder='Senha'
        />
          </Flex>

          <Flex flexDirection='column' gap='12'>
            <Input
              border='2px solid #010A22'
              padding='25px'
              value={documento}
              onChange={(e) => setCpfValue(e.target.value)}
              maxLength={11}
              minLength={11}
              placeholder='CPF'
        />
            <Input
              border='2px solid #010A22'
              padding='25px'
              type="email"
              value={email}
              onChange={(e) => setEmailFuncValue(e.target.value)}
              placeholder='E-mail '
        />
            <Input
              border='2px solid #010A22'
              padding='25px'
              value={cnpjEmpresa}
              onChange={(e) => setCnpjFuncValue(e.target.value)}
              minLength={14}
              maxLength={14}
              placeholder='CNPJ Empresa'
        />
          </Flex>
        </Flex>

        <Flex margin='45px auto' gap='15'>
          <Button width='200px' display={id ? 'none' : 'flex'} color='#FFFFFF' _hover={{ bg: '#010A22', color: '#FFFFFF'}} border='2px #FFFFFF solid' borderRadius='8px' bgColor='#010A22'
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={async () => await onSubmit({nome, email, documento, telefone, senha, cnpjEmpresa, codigo })}>
            Cadastrar</Button>

          <Button width='200px' display={id ? 'flex' : 'none'} color='#FFFFFF' _hover={{ bg: '#010A22', color: '#FFFFFF'}} border='2px #FFFFFF solid' borderRadius='8px' bgColor='#010A22'
            onClick={() => { void onSubmitEdit({nome, email, documento, telefone, senha, cnpjEmpresa, codigo }) }}>
            Salvar</Button>

          <Button border='2px solid #010A22' bgColor='#FFFFFF' onClick={handlerBack}>Voltar</Button>
        </Flex>
      </Flex>
    </>
  );
}
