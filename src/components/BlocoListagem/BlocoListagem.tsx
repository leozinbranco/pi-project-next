import { Flex, Text, Select, Input, Box } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { BlocoSideBarEmpresa } from "../BlocoSideBarEmpresa";
import useSWR from "swr";
import axios from "axios";
import { FocusEventHandler, useState } from "react";
import { Empresas } from "domains/enterprises.domain";
import { Funcionario } from "domains/employees.domain";
import TableComponent from "../Table/table";
import { deleteEmpresa } from "hooks/useEmpresa/useEmpresa";
import { deleteFuncionario } from "hooks/useFuncionario/useFuncionario";

export const BlocoListagem = () => {
  const router = useRouter();
  const [searchType, setSearchType] = useState('empresas'); 
  const [linkCurrent] = useState('listagem');

    const handlerCad = () => {
      router.push('/cadastroEmpresa');
    }
    
    const handlerTicket = () => {
      router.push('/tickets');
    }

    const handlerList = () => {
      router.push('/listagem');
    }

    const handleChangeList = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedType = event.target.value;
      setSearchType(selectedType);
    };

    const handlerSearch: FocusEventHandler<HTMLInputElement> = (event) => {
      const search = event.target?.value.trim() === '' ? searchType.trim().replace(/\/\d+$/, 's') : `${searchType.startsWith('emp') ? 'empresa': 'funcionario'}/${event.target.value}`
      setSearchType(search)
      event.target.value = ''
    }

    const handlerEdit = (cod: number) => {
      const route = (searchType === 'empresas' ? 'Empresa' : 'Funcionario')
      router.push('/cadastro' + route + '?id' + (searchType === 'empresas' ? 'Emp' : 'Func') + '=' + cod);
    }

    const handlerDelete = async (cod: number): Promise<[]> => {
      const data = searchType === 'empresas' ? await deleteEmpresa(cod) : await deleteFuncionario(cod)
      window.location.reload()
      return data
    }

    const fetcher = async (url: string) => await axios.get<Empresas[] | Funcionario[]>(url).then(res => res.data);
    const { data } = useSWR<Empresas[] | Funcionario[]>(`http://localhost:3002/up-next/${searchType}`, fetcher);
    return (
      <section>
        <Flex> 
          <BlocoSideBarEmpresa onCad={handlerCad} onTicket={handlerTicket} onList={handlerList} linkCurrent={linkCurrent}/>
          <Flex flexDirection='column' margin='15px auto' width='1100px'>
            <Flex margin='15px auto' width='1100px' justifyContent='space-between'>
              <Flex>
                <Text id='listMain' fontSize='32' textColor='#010A22' fontWeight='bolder' marginRight='8px'>{searchType.startsWith('emp') ? 'Empresas': 'Funcionários'}</Text>
              </Flex>
              <Flex gap="5">
                <Flex>
                  <Select value={searchType} onChange={handleChangeList}>
                    <option value='empresas'>Empresas</option>
                    <option value='funcionarios'>Funcionários</option>
                  </Select>
                </Flex>
                <Flex>
                  <Input
                    type="text"
                    placeholder="Pesquisar"
                    border="1px solid black"
                    borderRadius="16px"
                    outline="none"
                    onBlur={handlerSearch}
                  />
                  
                </Flex>
              </Flex>
            </Flex>
            <Box p={4}>
              <TableComponent data={data?.data ? data.data[0].data : data} onDelete={handlerDelete} onEdit={handlerEdit} />
            </Box>
          </Flex>
        </Flex>
      </section>
    );
};
