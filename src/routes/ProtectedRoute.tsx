import React, {ReactElement, FC} from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {routesPath} from "../constants/routeConstants";

const homeUrl: string = routesPath.home;
const loginUrl: string = routesPath.login;

const ProtectedRoute: FC<{isPublic: boolean, isAuthorized: boolean}> = ({ isPublic, isAuthorized }): ReactElement => {
    if(isAuthorized && isPublic) {
        return <Navigate to={homeUrl} />;
    }

    if(!isAuthorized && !isPublic) {
        return <Navigate to={loginUrl} />;
    }

    return <Outlet />;
};

export default ProtectedRoute;