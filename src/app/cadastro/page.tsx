'use client'

import { BlocoCadastroEmp } from "@/components/BlocoCadastroEmp"
import { Funcionario } from "domains/employees.domain"
import { cadastroEmp } from "domains/empresas.domain"
import { Empresas } from "domains/enterprises.domain"
import { cadastroFunc } from "domains/funcionarios.domain"
import { useCadastroEmpresa, useEditaEmpresa } from "hooks/useEmpresa/useEmpresa"
import { useCadastraFuncionario, useEditaFuncionario } from "hooks/useFuncionario"
import { useRouter } from "next/navigation"
import React from "react"


export default function Home () {
  const {cadEmp} = useCadastroEmpresa();
  const {editEmp} = useEditaEmpresa();
  const {cadFunc} = useCadastraFuncionario();
  const {editFunc} = useEditaFuncionario();
  const router = useRouter();

  const handlerSubmit = async (empresa: Empresas) => {
    await cadEmp(empresa)
    router.push('/listagem');
  }

  const handlerSubmitEdit = async (empresa: Empresas) => {
    await editEmp(empresa)
    router.push('/listagem');
  }

  
  const handlerSubmitFunc = async (funcionario: Funcionario) => {
    await cadFunc(funcionario)
    router.push('/listagem');
  };

  const handlerEditFunc = async (funcionario: Funcionario) => {
    await editFunc(funcionario)
    router.push('/listagem');
  }


    return (
      
      <BlocoCadastroEmp onSubmit={handlerSubmit} onSubmitEdit={handlerSubmitEdit} onSubmitFunc={handlerSubmitFunc} onSubmitEditFunc={handlerEditFunc} funcionario={cadastroFunc} empresa={cadastroEmp} />
    )
}
  