import React, { FC, ReactElement, useContext, useMemo } from "react";
import { Link, NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { FiLogOut, FiChevronDown, FiMenu, FiSettings, FiHelpCircle, FiUser } from "react-icons/fi";
import {
    Box, Flex, FlexProps, useColorModeValue, IconButton, Text, HStack,
    Menu, MenuButton, Avatar, VStack, MenuList, MenuItem, Icon,
} from "@chakra-ui/react";

import { CLEAR_USER_DATA, UserContext } from "../UserContext";
import { routes } from "../../constants/routeConstants";
import { RequestResponseType } from "../../types/othersTypes";
import { useMutation } from "@tanstack/react-query";
import { logoutRequest } from "../../helpers/apiRequestsHelpers";
import { removeLocaleStorageItem } from "../../helpers/localStorageHelpers";

const MobileNav: FC<MobileNavProps> = ({ onOpen, ...rest }) => {
    const { mutate }: RequestResponseType = useMutation(logoutRequest);
    const { globalState, setGlobalState } = useContext(UserContext);
    const { pathname: currentPath } = useLocation();
    const navigate: NavigateFunction = useNavigate();

    const manuItems: any[] = useMemo((): any[] => Object.values(routes), []);

    const handleLogout = (): void => {
        removeLocaleStorageItem('user');

        setGlobalState({ type: CLEAR_USER_DATA });

        navigate(routes.login.path);

        mutate();
    };

    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={'white'}
            borderBottomWidth="1px"
            borderBottomColor={'gray.200'}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}
        >
            <IconButton
                display={{ base: 'flex', md: 'none'}}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <HStack spacing={{ base: '0', md: '6' }}>
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton
                            transition="all 0.3s"
                            _focus={{ boxShadow: 'none' }}
                            _hover={{ color: 'blue.500' }}
                            _expanded={{ color: 'blue.500' }}
                        >
                            <HStack>
                                <Avatar bg='blue.500' icon={<FiUser fontSize='1.5rem' />} />
                                <VStack display={{ base: 'none', md: 'flex' }} alignItems="flex-start">
                                    <Text fontSize="sm">{globalState?.firstName}</Text>
                                </VStack>
                                <Box display={{ base: 'none', md: 'flex' }}>
                                    <FiChevronDown />
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList
                            bg={useColorModeValue('white', 'gray.900')}
                            borderColor={useColorModeValue('gray.200', 'gray.700')}
                        >
                            {manuItems.map((route: any): ReactElement|null => {
                                if(route?.onHeader) {
                                    return (
                                        <Link to={route?.path} key={route?.name}>
                                            <MenuItem
                                                key={route?.name}
                                                background={(currentPath === route?.path) ? 'blue.500' : 'white'}
                                                color={(currentPath === route?.path) ? 'white' : 'black'}
                                                _hover={{ bg: 'gray.100', color: 'black' }}
                                            >
                                                <Icon mr="2" as={route?.icon} />
                                                {route?.title}
                                            </MenuItem>
                                        </Link>
                                    );
                                }
                                return null;
                            })}
                            <MenuItem icon={<FiSettings />}>
                                Paramètres
                            </MenuItem>
                            <MenuItem icon={<FiHelpCircle />}>
                                Centre d'aide
                            </MenuItem>
                            <MenuItem color={'red.500'} icon={<FiLogOut />} onClick={handleLogout}>
                                Déconnexion
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};

interface MobileNavProps extends FlexProps {
    onOpen: () => void
}

export default MobileNav;