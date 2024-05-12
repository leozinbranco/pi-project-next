import { Button, Flex } from "@chakra-ui/react";
import { FC } from "react";

export const BlocoSideBarEmpresa: FC  = () => {
    return (
      <Flex width='230px' height='100vh' bgColor='red'>
        <Flex flexDirection='column' justifyContent='center' alignItems='center'>
          <Button>
            Pessoas
          </Button>
          <Button>
            Tickets
          </Button>
        </Flex>
      </Flex>
    )
}