'use client'

import { BlocoCadastro } from "@/components/BlocoCadastro"
import { BlocoSideBarEmpresa } from "@/components/BlocoSideBarEmpresa"
import { Flex } from "@chakra-ui/react"

export default function Home () {
    return (<section>
      <Flex flexDirection='column'>

        <BlocoSideBarEmpresa/>
        <Flex>
          <BlocoCadastro />
        </Flex>
      </Flex>
    </section>
    )
}
  