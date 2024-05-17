import { FC } from "react";
import { BlocoCadastroEmp } from "../BlocoCadastroEmp";
import { Funcionario } from "domains/employees.domain";
import { Empresas } from "domains/enterprises.domain";

interface Cadastro {
  funcionario: Funcionario,
  empresa: Empresas,
  nome: React.Ref<HTMLInputElement>,
  cpf: React.Ref<HTMLInputElement>,
  telefoneFunc: React.Ref<HTMLInputElement>,
  emailFunc: React.Ref<HTMLInputElement>,
  senha: React.Ref<HTMLInputElement>,
  cnpjFunc: React.Ref<HTMLInputElement>,
  name: React.Ref<HTMLInputElement>,
  fancyName: React.Ref<HTMLInputElement>,
  cnpjEmp: React.Ref<HTMLInputElement>,
  emailEmp: React.Ref<HTMLInputElement>,
  area: React.Ref<HTMLInputElement>,
  telefoneEmp: React.Ref<HTMLInputElement>,
  enderecoComp: React.Ref<HTMLInputElement>
}


export const BlocoCadastroFunc: FC<Cadastro> = ({funcionario, empresa, nome, cpf, telefoneFunc, 
  emailFunc, senha, cnpjFunc, name, fancyName, cnpjEmp, emailEmp, area, telefoneEmp, enderecoComp}) => {
    return (
      <BlocoCadastroEmp funcionario={funcionario} empresa={empresa} nome={nome} cpf={cpf} telefoneFunc={telefoneFunc}
        emailFunc={emailFunc} senha={senha} cnpjFunc={cnpjFunc} name={name} fancyName={fancyName} cnpjEmp={cnpjEmp}
        emailEmp={emailEmp} area={area} telefoneEmp={telefoneEmp} enderecoComp={enderecoComp}/>

    )
};