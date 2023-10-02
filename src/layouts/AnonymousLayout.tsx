import React, { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { Flex, Stack, Image } from "@chakra-ui/react";

import authBg from "../assets/img/auth-bg.png";

const AnonymousLayout: FC = (): ReactElement => {
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Outlet />
            </Flex>
            <Flex flex={1}>
                <Image alt={'auth bg'} objectFit={'cover'} src={authBg} />
            </Flex>
        </Stack>
    );
};

export default AnonymousLayout;