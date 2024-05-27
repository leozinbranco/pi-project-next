'use client'

import { BlocoCadastroFunc } from "@/components/BlocoCadastroFunc"
import { Funcionario } from "domains/employees.domain"
import { cadastroEmp } from "domains/empresas.domain"
import { cadastroFunc } from "domains/funcionarios.domain"
import { useCadastraFuncionario, useEditaFuncionario } from "hooks/useFuncionario/useFuncionario"
import { useRouter } from "next/navigation"
import React from "react"

export default function Home () {
  const router = useRouter()
  const {cadFunc} = useCadastraFuncionario();
  const {editFunc} = useEditaFuncionario();
  
  const handlerSubmit = async (funcionario: Funcionario) => {
    await cadFunc(funcionario)
    router.push('/listagem');
  };

  const handlerEdit = async (funcionario: Funcionario) => {
    await editFunc(funcionario)
    router.push('/listagem');
  }

    return (
      <BlocoCadastroFunc onSubmit={handlerSubmit} onSubmitEdit={handlerEdit} funcionario={cadastroFunc} empresa={cadastroEmp}/>
    )
}
  