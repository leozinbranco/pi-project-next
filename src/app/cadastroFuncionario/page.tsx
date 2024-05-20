'use client'

import { BlocoCadastroFunc } from "@/components/BlocoCadastroFunc"
import { cadastroEmp } from "domains/empresas.domain"
import { cadastroFunc } from "domains/funcionarios.domain"
import { cadastroFuncionario, editaFuncionario } from "hooks/useFuncionario/useFuncionario"
import { useRouter } from "next/navigation"
import React, { useRef, useState } from "react"

export default function Home () {
  const router = useRouter()
  const [message, setMessage] = useState('')

  const inputRef = {
    codEmp: useRef<HTMLInputElement>(null),
    codFunc: useRef<HTMLInputElement>(null),
    nomeEmp: useRef<HTMLInputElement>(null),
    nomeFunc: useRef<HTMLInputElement>(null),
    cpf: useRef<HTMLInputElement>(null),
    telefoneFunc: useRef<HTMLInputElement>(null),
    emailFunc: useRef<HTMLInputElement>(null),
    senha: useRef<HTMLInputElement>(null),
    cnpjFunc: useRef<HTMLInputElement>(null),
    name: useRef<HTMLInputElement>(null),
    fancyName: useRef<HTMLInputElement>(null),
    cnpjEmp: useRef<HTMLInputElement>(null),
    emailEmp: useRef<HTMLInputElement>(null),
    area: useRef<HTMLInputElement>(null),
    telefoneEmp: useRef<HTMLInputElement>(null),
    enderecoComp: useRef<HTMLInputElement>(null)
  }

  const handlerSubmit = async () => {
    await cadastroFuncionario({
      cod: inputRef.codFunc.current?.value === '' ? 0 : Number(inputRef.codFunc.current?.value),
      nome: inputRef.nomeFunc.current?.value,
      document: inputRef.cpf.current?.value,
      email: inputRef.emailFunc.current?.value,
      telefone: inputRef.telefoneFunc.current?.value,
      senha: inputRef.senha.current?.value,
      cnpjEmpresa: inputRef.cnpjFunc.current?.value
    })

      setMessage('Funcionário Criado com sucesso')
      router.push('/listagem')
  }

  const handlerSubmitEdit = async () => {
    await editaFuncionario({
      cod: inputRef.codFunc.current?.value === '' ? 0 : Number(inputRef.codFunc.current?.value),
      nome: inputRef.nomeFunc.current?.value,
      document: inputRef.cpf.current?.value,
      email: inputRef.emailFunc.current?.value,
      telefone: inputRef.telefoneFunc.current?.value,
      senha: inputRef.senha.current?.value,
      cnpjEmpresa: inputRef.cnpjFunc.current?.value
    })

    setMessage('Funcionário editada com sucesso')

      router.push('/listagem')
  }

    return (
      
      <BlocoCadastroFunc onSubmit={handlerSubmit} onSubmitEdit={handlerSubmitEdit} funcionario={cadastroFunc} empresa={cadastroEmp}
        codEmp={inputRef.codEmp} codFunc={inputRef.codFunc}  
        nomeEmp={inputRef.nomeEmp} nomeFunc={inputRef.nomeFunc} cpf={inputRef.cpf} telefoneFunc={inputRef.telefoneFunc}
        emailFunc={inputRef.emailFunc} senha={inputRef.senha} cnpjFunc={inputRef.cnpjFunc} fancyName={inputRef.fancyName} cnpjEmp={inputRef.cnpjEmp}
        emailEmp={inputRef.emailEmp} area={inputRef.area} telefoneEmp={inputRef.telefoneEmp} enderecoComp={inputRef.enderecoComp} message={message}/>
    )
}
  