import React, { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";
import {Flex, Box, Container} from "@chakra-ui/react";

import AnonymousLayoutHeader from "../components/menu/AnonymousLayoutHeader";
import Footer from "../components/Footer";

const AnonymousLayout: FC = (): ReactElement => {
    return (
        <>
            {/*<Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Outlet />
                </Flex>
                <Flex flex={1}>
                    <Image alt={'auth bg'} objectFit={'cover'} src={authBg} />
                </Flex>
            </Stack>*/}
            <Box minH="100vh">
                <AnonymousLayoutHeader />
                <Container maxW={'xl'} mt={10}>
                    <Flex align={'center'} justify={'center'}>
                        <Outlet />
                    </Flex>
                </Container>
                <Footer />
            </Box>
        </>
    );
};

export default AnonymousLayout;