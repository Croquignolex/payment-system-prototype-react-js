import { lazy, LazyExoticComponent, ReactElement } from 'react';

import AnonymousLayout from "../layouts/AnonymousLayout";
import MainLayout from "../layouts/MainLayout";
import { FiHome, FiUser } from "react-icons/fi";
import ErrorLayout from "../layouts/ErrorLayout";

const LazyLoginPage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/login'));
const LazyRegisterPage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/register'));
const LazyHomePage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/home'));
const LazyProfilePage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/profile'));
const LazyNotFoundPage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/notFound'));

export const routes = {
    login: {
        name: 'login',
        title: 'Connexion',
        component: LazyLoginPage,
        path: '/',
        icon: null,
        onSidebar: false,
        onHeader: false,
    },
    register: {
        name: 'register',
        title: 'Inscription',
        component: LazyRegisterPage,
        path: '/register',
        icon: null,
        onSidebar: false,
        onHeader: false,
    },
    home: {
        name: 'home',
        title: 'Accueil',
        component: LazyHomePage,
        path: '/home',
        icon: FiHome,
        onSidebar: true,
        onHeader: false,
    },
    profile: {
        name: 'profile',
        title: 'Profil',
        component: LazyProfilePage,
        path: '/profile',
        icon: FiUser,
        onSidebar: false,
        onHeader: true,
    },
    404: {
        name: '404',
        title: 'Page introuvable',
        component: LazyNotFoundPage,
        path: '*',
        icon: null,
        onSidebar: false,
        onHeader: false,
    }
};

export const routesDefinition = [
    {
        layout: AnonymousLayout,
        isPublic: true,
        routes: [routes.login, routes.register]
    },
    {
        layout: MainLayout,
        isPublic: false,
        routes: [routes.home, routes.profile]
    },
    {
        layout: ErrorLayout,
        isPublic: true,
        routes: [routes["404"]]
    },
];