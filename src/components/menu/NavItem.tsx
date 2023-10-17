import React, { FC, ReactElement } from "react";
import { Box, Flex, Icon, FlexProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

const NavItem: FC<NavItemProps> = ({ icon, isActive, children, ...rest }): ReactElement => {
    return (
        <Box as="a" href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{ bg: 'blue.500', color: 'white' }}
                background={isActive ? 'blue.500' : 'white'}
                color={isActive ? 'white' : 'black'}
                {...rest}
            >
                { icon && (<Icon mr="4" as={icon} />) }
                {children}
            </Flex>
        </Box>
    );
};

interface NavItemProps extends FlexProps {
    icon: IconType,
    isActive: boolean,
    children: React.ReactNode,
}

export default NavItem;