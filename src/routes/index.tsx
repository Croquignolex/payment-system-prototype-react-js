import React, {FC, ReactElement} from 'react';
import {Route, Routes as ReactRoutes} from 'react-router-dom';

import {routesDefinition} from "../constants/routeConstants";
import {generateFlattenRoutes} from "../helpers/generalHelpers";
import ProtectedRoute from "./ProtectedRoute";

const renderRoutes = (mainRoutes: any[]) => {
    const Routes: FC<{isAuthorized: boolean}> = ({ isAuthorized }) => {
        const layouts: ReactElement[] = mainRoutes.map(({ layout: Layout, routes, isPublic }, index: number) => {
            const subRoutes: any[] = generateFlattenRoutes(routes);

            return (
                <Route key={index} element={<Layout />}>
                    <Route element={<ProtectedRoute isAuthorized={isAuthorized} isPublic={isPublic} />}>
                        {
                            subRoutes.map(({ component: Component, path, name }) => {
                                return (
                                    Component && path && (
                                        <Route key={name} element={<Component />} path={path} />
                                    )
                                )
                            })
                        }
                    </Route>
                </Route>
             )
        });

        return <ReactRoutes>{layouts}</ReactRoutes>;
    }

    return Routes;
};

export const Routes: FC<{isAuthorized: boolean}> = renderRoutes(routesDefinition);