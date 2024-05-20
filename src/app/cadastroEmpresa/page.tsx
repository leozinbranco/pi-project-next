'use client'

import { BlocoCadastroEmp } from "@/components/BlocoCadastroEmp"
import { cadastroEmp } from "domains/empresas.domain"
import { cadastroFunc } from "domains/funcionarios.domain"
import { cadastroEmpresa, editaEmpresa } from "hooks/useEmpresa/useEmpresa"
import { useRouter } from "next/navigation"
import React, { useRef, useState } from "react"


export default function Home () {
  const [message, setMessage] = useState('');
  const router = useRouter()

  const handlerSubmit = async () => {
    await cadastroEmpresa({
      cod: inputRef.codEmp.current?.value === '' ? 0 : Number(inputRef.codEmp.current?.value),
      nome: inputRef.nomeEmp.current?.value,
      fancyName: inputRef.fancyName.current?.value,
      document: inputRef.cnpjEmp.current?.value,
      email: inputRef.emailEmp.current?.value,
      area: inputRef.area.current?.value,
      enderecoComp: inputRef.enderecoComp.current?.value,
      telefone: inputRef.telefoneEmp.current?.value
    })

    setMessage('Empresa cadastrada com sucesso')

      router.push('/listagem')
  }

  const handlerSubmitEdit = async () => {
    await editaEmpresa({
      cod: inputRef.codEmp.current?.value === '' ? 0 : Number(inputRef.codEmp.current?.value),
      nome: inputRef.nomeEmp.current?.value,
      fancyName: inputRef.fancyName.current?.value,
      document: inputRef.cnpjEmp.current?.value,
      email: inputRef.emailEmp.current?.value,
      area: inputRef.area.current?.value,
      enderecoComp: inputRef.enderecoComp.current?.value,
      telefone: inputRef.telefoneEmp.current?.value
    })

    setMessage('Empresa editada com sucesso')

      router.push('/listagem')
  }

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

    return (
      
      <BlocoCadastroEmp onSubmit={handlerSubmit} onSubmitEdit={handlerSubmitEdit} funcionario={cadastroFunc} empresa={cadastroEmp}
        codEmp={inputRef.codEmp}  codFunc={inputRef.codFunc}
        nomeEmp={inputRef.nomeEmp} nomeFunc={inputRef.nomeFunc} cpf={inputRef.cpf} telefoneFunc={inputRef.telefoneFunc}
        emailFunc={inputRef.emailFunc} senha={inputRef.senha} cnpjFunc={inputRef.cnpjFunc} fancyName={inputRef.fancyName} cnpjEmp={inputRef.cnpjEmp}
        emailEmp={inputRef.emailEmp} area={inputRef.area} telefoneEmp={inputRef.telefoneEmp} enderecoComp={inputRef.enderecoComp} message={message}/>
    )
}
  