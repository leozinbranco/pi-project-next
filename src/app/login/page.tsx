import styles from './auth.module.css';
import { Card, Text, CardBody, CardHeader, Image, Heading, Flex, Box, Input, Button } from '@chakra-ui/react';


export default function Home() {
    return (
        <main className={styles.main} >
            <Flex flexDirection='column' alignItems='center'>
                <Image src='images/login-page.png'
                    width='400px'
                    height='400px'
                />
                <Image src='images/slogan.png'
                    width='243px'
                    height='72px'
                />
            </Flex>
            <Card padding='0px 42px 0px 42px' maxW='500px'>
                <CardHeader>
                    <Flex flexDirection='column' justifyContent='center'>
                        <Heading>
                            teste
                        </Heading>
                        <Box>
                            <Text> aoba</Text>
                        </Box>
                    </Flex>
                </CardHeader>
                <CardBody>
                    <Flex>

                    </Flex>
                </CardBody>
            </Card>
        </main>
    );
}