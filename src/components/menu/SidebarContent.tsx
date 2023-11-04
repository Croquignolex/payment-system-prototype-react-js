import React, { FC, ReactElement, useMemo } from 'react';
import {Box, Flex, Text, CloseButton, BoxProps, Button, Stack} from "@chakra-ui/react";

import NavItem from "./NavItem";
import { routes } from "../../constants/routeConstants";
import { Link, useLocation } from "react-router-dom";

const SidebarContent: FC<SidebarContentProps> = ({ onClose, ...rest }): ReactElement => {
    const { pathname: currentPath } = useLocation();
    const manuItems: any[] = useMemo((): any[] => Object.values(routes), []);

    return (
        <Box
            transition="3s ease"
            bg={'white'}
            borderRight="1px"
            borderRightColor={'gray.200'}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}
        >
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Logo
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            <Stack direction={'column'} align={'center'} alignSelf={'center'} position={'relative'} pt={6}>
                <Button colorScheme={'blue'} rounded={'full'}>
                    Envoyer de l'argent
                </Button>
            </Stack>
            {manuItems.map((route: any): ReactElement|null => {
                if(route?.onSidebar) {
                    return (
                        <Link to={route?.path} key={route?.name}>
                            <NavItem key={route?.name} icon={route?.icon} isActive={currentPath === route?.path}>
                                {route?.title}
                            </NavItem>
                        </Link>
                    );
                }
                return null;
            })}
        </Box>
    );
};

interface SidebarContentProps extends BoxProps {
    onClose: () => void
}

export default SidebarContent;