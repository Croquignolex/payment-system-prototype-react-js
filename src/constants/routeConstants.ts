import {lazy, LazyExoticComponent, ReactElement} from 'react';

import AnonymousLayout from "../layouts/AnonymousLayout";
import MainLayout from "../layouts/MainLayout";

const LazyLoginPage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/login'));
const LazyRegisterPage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/register'));
const LazyHomePage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/home'));
const LazyNotFoundPage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/notFound'));

export const routesPath = {
    login: '/',
    register: '/register',
    home: '/home',
} as const;

export const routesDefinition = [
    {
        layout: AnonymousLayout,
        isPublic: true,
        routes: [
            {
                name: 'login',
                title: 'Login page',
                component: LazyLoginPage,
                path: routesPath.login
            },
            {
                name: 'register',
                title: 'Register page',
                component: LazyRegisterPage,
                path: routesPath.register
            }
        ]
    },
    {
        layout: MainLayout,
        isPublic: false,
        routes: [
            {
                name: 'home',
                title: 'Home page',
                component: LazyHomePage,
                path: routesPath.home
            },
            /*{
                name: 'users',
                title: 'Users',
                hasSideLink: true,
                routes: [
                    {
                        name: 'list-users',
                        title: 'List of users',
                        hasSideLink: true,
                        component: LazyUsersPage,
                        path: '/users'
                    },
                    {
                        name: 'create-user',
                        title: 'Add user',
                        hasSideLink: true,
                        component: LazyUserCreatePage,
                        path: '/users/create'
                    },
                    {
                        name: 'details-user',
                        title: 'User details',
                        hasSideLink: false,
                        component: LazyUserPage,
                        path: '/users/{id}'
                    }
                ]
            }*/
        ]
    },
    {
        layout: AnonymousLayout,
        isPublic: true,
        routes: [
            {
                name: 'not-found',
                title: 'Page not found',
                component: LazyNotFoundPage,
                path: '*'
            }
        ]
    },
];