'use client'

import { BlocoCadastroEmp } from "@/components/BlocoCadastroEmp"
import { cadastroEmp } from "domains/empresas.domain"
import { Empresas } from "domains/enterprises.domain"
import { cadastroFunc } from "domains/funcionarios.domain"
import { useCadastroEmpresa, useEditaEmpresa } from "hooks/useEmpresa/useEmpresa"
import { useRouter } from "next/navigation"
import React from "react"


export default function Home () {
  const {cadEmp} = useCadastroEmpresa();
  const {editEmp} = useEditaEmpresa();
  const router = useRouter();

  const useHandlerSubmit = async (empresa: Empresas) => {
    await cadEmp(empresa)
    router.push('/listagem');
  }

  const useHandlerSubmitEdit = async (empresa: Empresas) => {
    await editEmp(empresa)
    router.push('/listagem');
  }

    return (
      
      <BlocoCadastroEmp onSubmit={useHandlerSubmit} onSubmitEdit={useHandlerSubmitEdit} funcionario={cadastroFunc} empresa={cadastroEmp} />
    )
}
  