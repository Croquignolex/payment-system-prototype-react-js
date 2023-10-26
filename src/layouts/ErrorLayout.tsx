import React, { FC, ReactElement } from "react";
import { NavigateFunction, Outlet, useNavigate } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

import { routes } from "../constants/routeConstants";

const ErrorLayout: FC = (): ReactElement => {
    const navigate: NavigateFunction = useNavigate();

    const handleGoToHome = (): void => navigate(routes.home.path);

    return (
        <Box textAlign="center" py={10} px={6}>
            <Outlet />
            <Button colorScheme={'blue'} variant="solid" onClick={handleGoToHome}>
                Aller à l'accueil
            </Button>
        </Box>
    );
};

export default ErrorLayout;