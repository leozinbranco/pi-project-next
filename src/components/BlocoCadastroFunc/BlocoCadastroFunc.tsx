import { FC } from "react";
import { BlocoCadastroEmp } from "../BlocoCadastroEmp";
import { Funcionario } from "domains/employees.domain";
import { Empresas } from "domains/enterprises.domain";

interface Cadastro {
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  onSubmit: () => Promise<unknown | undefined>,
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  onSubmitEdit: () => Promise<unknown | undefined>,
  funcionario: Funcionario,
  empresa: Empresas,
  codEmp: React.Ref<HTMLInputElement>,
  codFunc: React.Ref<HTMLInputElement>,
  nomeEmp: React.Ref<HTMLInputElement>,
  nomeFunc: React.Ref<HTMLInputElement>,
  cpf: React.Ref<HTMLInputElement>,
  telefoneFunc: React.Ref<HTMLInputElement>,
  emailFunc: React.Ref<HTMLInputElement>,
  senha: React.Ref<HTMLInputElement>,
  cnpjFunc: React.Ref<HTMLInputElement>,
  fancyName: React.Ref<HTMLInputElement>,
  cnpjEmp: React.Ref<HTMLInputElement>,
  emailEmp: React.Ref<HTMLInputElement>,
  area: React.Ref<HTMLInputElement>,
  telefoneEmp: React.Ref<HTMLInputElement>,
  enderecoComp: React.Ref<HTMLInputElement>,
  message: string
}


export const BlocoCadastroFunc: FC<Cadastro> = ({funcionario, empresa, codEmp, codFunc, nomeEmp, nomeFunc, cpf, telefoneFunc, 
  emailFunc, senha, cnpjFunc, fancyName, cnpjEmp, emailEmp, area, telefoneEmp, enderecoComp,
  onSubmit, onSubmitEdit, message}) => {

    return (
      <BlocoCadastroEmp codEmp={codEmp} codFunc={codFunc} onSubmit={onSubmit} onSubmitEdit={onSubmitEdit} funcionario={funcionario} empresa={empresa} nomeEmp={nomeEmp} nomeFunc={nomeFunc} cpf={cpf} telefoneFunc={telefoneFunc}
        emailFunc={emailFunc} senha={senha} cnpjFunc={cnpjFunc} fancyName={fancyName} cnpjEmp={cnpjEmp}
        emailEmp={emailEmp} area={area} telefoneEmp={telefoneEmp} enderecoComp={enderecoComp} message={message}/>

    )
};