'use client'

import { BlocoCadastroFunc } from "@/components/BlocoCadastroFunc"
import { Funcionario } from "domains/employees.domain"
import { Empresas } from "domains/enterprises.domain"
import React from "react"

export default function Home () {
  const cadastroFunc: Funcionario = {
    nome: '' ,
    cpf: '' ,
    telefone: '' ,
    email: '' ,
    senha: '' ,
    cnpjEmpresa: {
      cnpj: ''
    }
  }

  const cadastroEmp: Empresas = {
    name: '',
    fancyName: '',
    cnpj: '',
    email: '',
    area: '',
    telefone: '',
    enderecoComp: ''
  }
  const inputRef = {
    nome: React.createRef<HTMLInputElement>(),
    cpf: React.createRef<HTMLInputElement>(),
    telefoneFunc: React.createRef<HTMLInputElement>(),
    emailFunc: React.createRef<HTMLInputElement>(),
    senha: React.createRef<HTMLInputElement>(),
    cnpjFunc: React.createRef<HTMLInputElement>(),
    name: React.createRef<HTMLInputElement>(),
    fancyName: React.createRef<HTMLInputElement>(),
    cnpjEmp: React.createRef<HTMLInputElement>(),
    emailEmp: React.createRef<HTMLInputElement>(),
    area: React.createRef<HTMLInputElement>(),
    telefoneEmp: React.createRef<HTMLInputElement>(),
    enderecoComp: React.createRef<HTMLInputElement>()
  }

    return (
      
      <BlocoCadastroFunc funcionario={cadastroFunc} empresa={cadastroEmp}
        nome={inputRef.nome} cpf={inputRef.cpf} telefoneFunc={inputRef.telefoneFunc}
        emailFunc={inputRef.emailFunc} senha={inputRef.senha} cnpjFunc={inputRef.cnpjFunc} name={inputRef.name} fancyName={inputRef.fancyName} cnpjEmp={inputRef.cnpjEmp}
        emailEmp={inputRef.emailEmp} area={inputRef.area} telefoneEmp={inputRef.telefoneEmp} enderecoComp={inputRef.enderecoComp}/>
    )
}
  