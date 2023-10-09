'use client'
import { Image, Flex, IconButton } from '@chakra-ui/react'
import { ModalSupport } from '@/components/ModalSupport'
import { CardUpload } from 'components/CardUpload'
import React, { useRef, useState, } from 'react'
import { useRouter } from 'next/navigation'
export default function UploadPage() {
    const [visivel, setVisivel] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);
    const route = useRouter();

    const handlerOnCloseModal = () => {
        setVisivel(false);
        console.log('Abriu modal');
    }
    const handlerOnOpenModal = () => {
        setVisivel(true);
    }

    const handlerOnReturn = () => {
        route.push('auth');
    }

    const handleOnFile = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }

    }

    const handleOnFileSelect = () => {
        if (boxRef.current && inputRef.current) {
            let fileReverse = inputRef.current.value.split('').reverse().join('');
            let indexBar = fileReverse.indexOf('\\')
            let file = fileReverse.slice(0, indexBar).split('').reverse().join('')

            boxRef.current.style.display = 'block';
            boxRef.current.innerText = file;
        }
    }

    class UploadComponent extends React.Component {
        handleDrop = (event: any) => {
            event.preventDefault();
            const files = event.dataTransfer.files;
            if (boxRef.current) {
                boxRef.current.style.display = 'block';
                boxRef.current.innerText = files[0].name;
            }
        }
        render() {
            return (
                <main className={styles.main}>
                    <Flex flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} minH='100vh' padding='6' alignItems='center' justifyContent='center' >
                        <Flex flexDirection='column' alignItems='center'>
                            <Image src='images/upload-page.png'
                                width='350px'
                                height='350px'
                            />
                            <Image src='images/slogan.png'
                                width='243px'
                                height='72px'
                            />
                        </Flex>
                        <Flex flexDirection='column'>
                            <CardUpload onReturn={handlerOnReturn} onFile={handleOnFile} inputRef={inputRef} boxRef={boxRef} onFileSelect={handleOnFileSelect} onDrop={this.handleDrop} />
                            <IconButton
                                aria-label='Send email'
                                onClick={handlerOnOpenModal}
                                colorScheme='transparent'
                                height='100px'
                                justifyContent='end'
                                icon={<Image
                                    src='images/suport.png'
                                    width='60px'
                                    height='60px'
                                    onClick={handlerOnOpenModal}
                                />}
                            />

                        </Flex>
                    </Flex>
                    <ModalSupport visible={visivel} onClose={handlerOnCloseModal} />
                </main>
            )
        }
    }

    return <UploadComponent />
}

