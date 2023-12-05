import React, { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";
import {Box, Stack} from "@chakra-ui/react";

import AnonymousLayoutHeader from "../components/menu/AnonymousLayoutHeader";
import Footer from "../components/Footer";

const AnonymousLayout: FC = (): ReactElement => {
    return (
        <>
            <Box minH="100vh">
                <AnonymousLayoutHeader />
                <Stack mt={10}>
                    <Outlet />
                </Stack>
                <Footer />
            </Box>
        </>
    );
};

export default AnonymousLayout;