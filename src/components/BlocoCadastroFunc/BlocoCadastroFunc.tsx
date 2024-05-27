import { FC } from "react";
import { BlocoCadastroEmp } from "../BlocoCadastroEmp";
import { Funcionario } from "domains/employees.domain";
import { Empresas } from "domains/enterprises.domain";

interface Cadastro {
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  onSubmit: (funcionario: Funcionario) => Promise<unknown | undefined>,
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  onSubmitEdit: (funcionario: Funcionario) => Promise<unknown | undefined>,
  funcionario: Funcionario,
  empresa: Empresas
}


export const BlocoCadastroFunc: FC<Cadastro> = ({funcionario, empresa, onSubmit, onSubmitEdit}) => {

    return (
      <BlocoCadastroEmp onSubmit={onSubmit} onSubmitEdit={onSubmitEdit} funcionario={funcionario} empresa={empresa} />

    )
};