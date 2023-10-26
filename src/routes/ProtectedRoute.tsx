import React, { ReactElement, FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { routes } from "../constants/routeConstants";

const ProtectedRoute: FC<ProtectedRouteProps> = ({ isPublic, isAuthorized, isError }): ReactElement => {
    if(!isError) {
        if(isAuthorized && isPublic) {
            return <Navigate to={routes.home.path} />;
        }

        if(!isAuthorized && !isPublic) {
            return <Navigate to={routes.login.path} />;
        }
    }

    return <Outlet />;
};

export interface ProtectedRouteProps {
    isPublic?: boolean,
    isAuthorized: boolean,
    isError?: boolean
}

export default ProtectedRoute;