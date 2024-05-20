import React, { FC, useState, useEffect } from 'react';
import { Flex, Input } from "@chakra-ui/react";
import { Funcionario } from "domains/employees.domain";
import { useSearchParams } from 'next/navigation';
import { buscaFuncionario } from 'hooks/useFuncionario';

interface Cadastro {
  funcionario: Funcionario,  
  codFunc: React.Ref<HTMLInputElement>,
    nome: React.Ref<HTMLInputElement>,
    cpf: React.Ref<HTMLInputElement>,
    telefoneFunc: React.Ref<HTMLInputElement>,
    emailFunc: React.Ref<HTMLInputElement>,
    senha: React.Ref<HTMLInputElement>,
    cnpjFunc: React.Ref<HTMLInputElement>,
}

export const BlocoCampoFunc: FC<Cadastro> = ({ funcionario, nome, codFunc, telefoneFunc, senha, emailFunc, cnpjFunc, cpf }) => {
  const [codValue, setCodValue] = useState(funcionario?.cod ?? '');
  const [nomeValue, setNomeValue] = useState(funcionario?.nome ?? '');
  const [telefoneFuncValue, setTelefoneFuncValue] = useState(funcionario?.telefone ?? '');
  const [senhaValue, setSenhaValue] = useState('');
  const [cpfValue, setCpfValue] = useState(funcionario?.document ?? '');
  const [emailFuncValue, setEmailFuncValue] = useState(funcionario?.email ?? '');
  const [cnpjFuncValue, setCnpjFuncValue] = useState(funcionario?.cnpjEmpresa ?? '');
  const searchParams = useSearchParams();
  const id = searchParams.get('idFunc'); 

  useEffect(() => {
    setCodValue(funcionario?.cod ?? '')
    setNomeValue(funcionario?.nome ?? '');
    setTelefoneFuncValue(funcionario?.telefone ?? '');
    setCpfValue(funcionario?.document ?? '');
    setEmailFuncValue(funcionario?.email ?? '');
    setCnpjFuncValue(funcionario?.cnpjEmpresa ?? '');
  }, [funcionario]);


  useEffect(() => {
    const fetchEmployee = async () => {
      if (id) {
        try {
          const employee = await buscaFuncionario(Number(id));
          if (employee) {
            setCodValue(employee?.cod ?? '')
            setNomeValue(employee.nome ?? '');
            setTelefoneFuncValue(employee.telefone ? employee.telefone.replace(/\D/g, '') : '');
            setSenhaValue('');
            setCpfValue(employee.document ? employee.document.replace(/\D/g, '') : '');
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
      <Flex flexDirection='column' gap='12'>
        <Input
          border='2px solid #010A22'
          padding='25px'
          value={codValue}
          onChange={(e) => setCodValue(Number(e.target.value))}
          ref={codFunc}
          display='none'
          />
        <Input
          border='2px solid #010A22'
          padding='25px'
          value={nomeValue}
          onChange={(e) => setNomeValue(e.target.value)}
          ref={nome}
          placeholder='Nome'
        />
        <Input
          border='2px solid #010A22'
          padding='25px'
          value={telefoneFuncValue}
          onChange={(e) => setTelefoneFuncValue(e.target.value)}
          ref={telefoneFunc}
          minLength={10}
          maxLength={11}
          placeholder='Telefone'
        />
        <Input
          border='2px solid #010A22'
          padding='25px'
          value={senhaValue}
          onChange={(e) => setSenhaValue(e.target.value)}
          ref={senha}
          type='password'
          placeholder='Senha'
        />
      </Flex>

      <Flex flexDirection='column' gap='12'>
        <Input
          border='2px solid #010A22'
          padding='25px'
          value={cpfValue}
          onChange={(e) => setCpfValue(e.target.value)}
          ref={cpf}
          maxLength={11}
          minLength={11}
          placeholder='CPF'
        />
        <Input
          border='2px solid #010A22'
          padding='25px'
          type="email"
          value={emailFuncValue}
          onChange={(e) => setEmailFuncValue(e.target.value)}
          ref={emailFunc}
          placeholder='E-mail '
        />
        <Input
          border='2px solid #010A22'
          padding='25px'
          value={cnpjFuncValue}
          onChange={(e) => setCnpjFuncValue(e.target.value)}
          ref={cnpjFunc}
          minLength={14}
          maxLength={14}
          placeholder='CNPJ Empresa'
        />
      </Flex>
    </>
  );
}
