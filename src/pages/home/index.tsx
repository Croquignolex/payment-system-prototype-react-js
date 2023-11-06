import React, {ReactElement} from "react";
import {Heading, Container, Text, Button, Stack, Box} from '@chakra-ui/react';

import useHomePageHook from "./useHomePageHook";

const HomePage = (): ReactElement => {
    useHomePageHook();

    return (
        <>
            <Container maxW={'3xl'}>
                <Stack as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }} py={{ base: 10, md: 20 }}>
                    <Heading fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
                        Envoyer de l'argent <br />
                        <Text as={'span'} color={'blue.500'}>
                            en toute sécurité
                        </Text>
                    </Heading>
                    <Text color={'gray.500'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </Text>
                    <Stack direction={'column'} spacing={3} align={'center'} alignSelf={'center'} position={'relative'}>
                        <Button colorScheme={'blue'} rounded={'full'} px={6}>
                           Envoyer de l'argent
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
};

export default HomePage;