import React, { ReactElement, FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { routes } from "../constants/routeConstants";

const ProtectedRoute: FC<{ isPublic: boolean, isAuthorized: boolean }> = ({ isPublic, isAuthorized }): ReactElement => {
    if(isAuthorized && isPublic) {
        return <Navigate to={routes.home.path} />;
    }

    if(!isAuthorized && !isPublic) {
        return <Navigate to={routes.login.path} />;
    }

    return <Outlet />;
};

export default ProtectedRoute;