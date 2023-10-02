import React, { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { Box, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";

import SidebarContent from "../components/menu/SidebarContent";
import MobileNav from "../components/menu/MobileNav";

const MainLayout: FC = (): ReactElement => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box minH="100vh" bg={'gray.100'}>
            <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            <MobileNav onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} p="4">
                <Outlet />
            </Box>
        </Box>
    );
};

export default MainLayout;