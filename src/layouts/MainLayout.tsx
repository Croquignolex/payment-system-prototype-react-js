import React, {FC, ReactElement, useMemo} from "react";
import {Outlet, useLocation} from "react-router-dom";
import {Box, Drawer, DrawerContent, useDisclosure} from "@chakra-ui/react";

import SidebarContent from "../components/menu/SidebarContent";
import MobileNav from "../components/menu/MobileNav";
import {routes} from "../constants/routeConstants";
import {BreadcrumbItemsType, HeaderMenuItemType, SidebarMenuItemType} from "../types/othersTypes";
import PageBreadcrumb from "../components/menu/PageBreadcrumb";

const MainLayout: FC = (): ReactElement => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { pathname: currentPath } = useLocation();

    const headerMenuItems: HeaderMenuItemType[] = useMemo((): any[] => (
        Object
            .values(routes)
            .filter(route=> route?.onHeader)
            .map(route => ({
                path: route?.path,
                name: route?.name,
                key: route?.name,
                icon: route?.icon,
                title: route?.title,
                background: (currentPath === route?.path) ? 'blue.500' : 'white',
                color: (currentPath === route?.path) ? 'white' : 'black',
            }))
    ), [currentPath]);

    const sidebarMenuItems: SidebarMenuItemType[] = useMemo((): any[] => (
        Object
            .values(routes)
            .filter(route=> route?.onSidebar)
            .map(route => ({
                path: route?.path,
                name: route?.name,
                key: route?.name,
                icon: route?.icon,
                title: route?.title,
                isActive: currentPath === route?.path
            }))
    ), [currentPath]);

    const {pageTitle, breadcrumbItems}: any = useMemo((): any => {
        const currentRoute: any = Object.values(routes).filter(route=> currentPath === route?.path)[0];

        const breadcrumbItems: BreadcrumbItemsType = currentRoute?.breadcrumb.map((item: any) => ({
            path: item?.path,
            label: item?.label,
            key: item?.label
        }));

        return {pageTitle: currentRoute?.title, breadcrumbItems}
    }, [currentPath]);

    return (
        // <Box minH="100vh" bg={'gray.100'}>
        <Box minH="100vh">
            <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} menuItems={sidebarMenuItems} />
            <Drawer isOpen={isOpen} placement="left" onClose={onClose} returnFocusOnClose={false} onOverlayClick={onClose} size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} menuItems={sidebarMenuItems} />
                </DrawerContent>
            </Drawer>
            <MobileNav onOpen={onOpen} menuItems={headerMenuItems} />
            <Box ml={{ base: 0, md: 60 }} p="4">
                <PageBreadcrumb pageTitle={pageTitle} items={breadcrumbItems} />
                <Outlet />
            </Box>
        </Box>
    );
};

export default MainLayout;