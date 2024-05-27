import { Flex, Text, Select, Input, Box } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { BlocoSideBarEmpresa } from "../BlocoSideBarEmpresa";
import { FocusEventHandler, useState } from "react";
import TableComponent from "../Table/table";
import { useDeleteEmpresa } from "hooks/useEmpresa/useEmpresa";
import { useDeleteFuncionario } from "hooks/useFuncionario/useFuncionario";
import { useSwr } from "hooks/useSwr";

export const BlocoListagem = () => {
  const router = useRouter();
  const [searchType, setSearchType] = useState('empresas'); 
  const [accessedPagent] = useState('listagem');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data } = useSwr(`${process.env.NEXT_PUBLIC_BACKEND_URL}/up-next/${searchType}`);

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
      setSearchType(event.target.value);
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

    const useHandlerDelete = async (cod: number): Promise<undefined> => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      searchType === 'empresas' ? await useDeleteEmpresa(cod) : await useDeleteFuncionario(cod)
      window.location.reload()
    }

    return (
      <section>
        <Flex> 
          <BlocoSideBarEmpresa onCad={handlerCad} onTicket={handlerTicket} onList={handlerList} accessedPagent={accessedPagent}/>
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
              <TableComponent data={data?.data ? data.data[0].data : data} onDelete={useHandlerDelete} onEdit={handlerEdit} />
            </Box>
          </Flex>
        </Flex>
      </section>
    );
};
