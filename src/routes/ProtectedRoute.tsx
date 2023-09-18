import React, {ReactElement, FC} from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute: FC<{isPublic: boolean, isAuthorized: boolean}> = ({ isPublic, isAuthorized }): ReactElement => {
    return (isPublic || isAuthorized) ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoute;