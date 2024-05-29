/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Flex, Text, Select, Input, Box } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { BlocoSideBarEmpresa } from '../BlocoSideBarEmpresa'
import { FocusEventHandler, useState } from 'react'
import TableComponent from '../Table/table'
import { useDeleteEmpresa } from 'hooks/useEmpresa/useEmpresa'
import { useDeleteFuncionario } from 'hooks/useFuncionario/useFuncionario'
import { useSwr } from 'hooks/useSwr'

export const BlocoListagem = () => {
  const router = useRouter()
  const [searchType, setSearchType] = useState('empresas')
  const [accessedPagent] = useState('listagem')
  const { data } = useSwr(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/up-next/${searchType}`
  )

  const deleteEmpresa = useDeleteEmpresa()
  const deleteFuncionario = useDeleteFuncionario()

  const handlerCad = () => {
    router.push('/cadastro')
  }

  const handlerTicket = () => {
    router.push('/tickets')
  }

  const handlerList = () => {
    router.push('/listagem')
  }

  const handleChangeList = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(event.target.value)
  }

  const handlerSearch: FocusEventHandler<HTMLInputElement> = (event) => {
    const search =
      event.target?.value.trim() === ''
        ? searchType.trim().replace(/\/\d+$/, 's')
        : `${searchType.startsWith('emp') ? 'empresa' : 'funcionario'}/${
            event.target.value
          }`
    setSearchType(search)
    event.target.value = ''
  }

  const handlerEdit = (cod: number) => {
    router.push(
      '/cadastro' +
        '?id' +
        (searchType === 'empresas' ? 'Emp' : 'Func') +
        '=' +
        cod
    )
  }

  const handleDelete = async (cod: number): Promise<undefined> => {
    if (searchType === 'empresas') {
      await deleteEmpresa(cod)
    } else {
      await deleteFuncionario(cod)
    }
    window.location.reload() // Uncomment if you want to reload the page after deletion
  }

  return (
    <section>
      <Flex>
        <BlocoSideBarEmpresa
          onCad={handlerCad}
          onTicket={handlerTicket}
          onList={handlerList}
          accessedPagent={accessedPagent}
        />
        <Flex flexDirection="column" margin="15px auto" width="1100px">
          <Flex
            margin="15px auto"
            width="1100px"
            justifyContent="space-between"
          >
            <Flex>
              <Text
                id="listMain"
                fontSize="32"
                textColor="#010A22"
                fontWeight="bolder"
                marginRight="8px"
              >
                {searchType.startsWith('emp') ? 'Empresas' : 'Funcionários'}
              </Text>
            </Flex>
            <Flex gap="5">
              <Flex>
                <Select value={searchType} onChange={handleChangeList}>
                  <option value="empresas">Empresas</option>
                  <option value="funcionarios">Funcionários</option>
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
            <TableComponent
              data={data?.data ? data.data[0].data : data}
              onDelete={handleDelete}
              onEdit={handlerEdit}
            />
          </Box>
        </Flex>
      </Flex>
    </section>
  )
}