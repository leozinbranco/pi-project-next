import { Table, Thead, Tbody, Tr, Th, Td, IconButton } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Empresas } from "domains/enterprises.domain";
import { Funcionario } from "domains/employees.domain";

interface dataTable {
    data?: Empresas[] | Funcionario[],
    onDelete: (item: number) => Promise<[]>,
    onEdit: (item: number) => void
}


const TableComponent = ({ data, onDelete, onEdit } : dataTable) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th>Documento</Th>
          <Th>Telefone</Th>
          <Th>Ações</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data && data.length > 0 ? (
          data.map((item) => (
            <Tr key={item.cod}>
              <Td>{item.nome}</Td>
              <Td>{item.email}</Td>
              <Td>{item.document}</Td>
              <Td>{item.telefone}</Td>
              <Td>
                <IconButton
                  aria-label="Editar"
                  icon={<EditIcon />}
                  mr={2}
                  onClick={() => onEdit(item.cod)}
                />
                <IconButton
                  aria-label="Excluir"
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  // eslint-disable-next-line @typescript-eslint/no-misused-promises
                  onClick={async () => await onDelete(item.cod)}
                />
              </Td>
            </Tr>
          ))
        ) : (
          <Tr>
            <Td colSpan={5} textAlign="center">
              Nenhum dado encontrado
            </Td>
          </Tr>
        )}
      </Tbody>
    </Table>
  );
};

export default TableComponent;
