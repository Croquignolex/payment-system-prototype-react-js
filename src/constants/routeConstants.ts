import { lazy, LazyExoticComponent, ReactElement } from 'react';
import { FiHome, FiUser, FiUsers } from "react-icons/fi";

import AnonymousLayout from "../layouts/AnonymousLayout";
import MainLayout from "../layouts/MainLayout";

const LazyLoginPage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/login'));
const LazyRegisterPage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/register'));
const LazyHomePage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/home'));
const LazyProfilePage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/profile'));
const LazyProfileEditPage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/profile/profileEditPage'));
const LazyNotFoundPage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/notFound'));
const LazyRegisterStepOnePage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/register/registerStepOnePage'));
const LazyRegisterStepTwoPage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/register/registerStepTwoPage'));
const LazyRegisterStepTreePage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/register/registerStepTreePage'));
const LazyRegisterVerificationPage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/register/registerVerificationPage'));
const LazyContactsPage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/contacts'));
const LazyContactAddPage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/contacts/contactAddPage'));

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
    registerStepOne: {
        name: 'registerStepOne',
        title: 'Inscription',
        component: LazyRegisterStepOnePage,
        path: '/register/step-one',
        icon: null,
        onSidebar: false,
        onHeader: false,
    },
    registerStepTwo: {
        name: 'registerStepTwo',
        title: 'Inscription',
        component: LazyRegisterStepTwoPage,
        path: '/register/step-two',
        icon: null,
        onSidebar: false,
        onHeader: false,
    },
    registerStepTree: {
        name: 'registerStepTree',
        title: 'Inscription',
        component: LazyRegisterStepTreePage,
        path: '/register/step-tree',
        icon: null,
        onSidebar: false,
        onHeader: false,
    },
    registerVerification: {
        name: 'registerVerification',
        title: 'Inscription',
        component: LazyRegisterVerificationPage,
        path: '/register/verification',
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
        breadcrumb: []
    },
    profile: {
        name: 'profile',
        title: 'Mes détails',
        component: LazyProfilePage,
        path: '/profile',
        icon: FiUser,
        onSidebar: false,
        onHeader: true,
        breadcrumb: [{path: '/home', label: 'Accueil'}]
    },
    profileEdit: {
        name: 'profileEdit',
        title: 'Editer mes détails',
        component: LazyProfileEditPage,
        path: '/profile/edit',
        icon: null,
        onSidebar: false,
        onHeader: false,
        breadcrumb: [{path: '/home', label: 'Accueil'}, {path: '/profile', label: 'Mes détails'}]
    },
    contacts: {
        name: 'contacts',
        title: 'Contacts',
        component: LazyContactsPage,
        path: '/contacts',
        icon: FiUsers,
        onSidebar: true,
        onHeader: false,
        breadcrumb: []
    },
    addContact: {
        name: 'addContact',
        title: 'Ajouter un contact',
        component: LazyContactAddPage,
        path: '/contacts/add',
        icon: null,
        onSidebar: false,
        onHeader: false,
        breadcrumb: [{path: '/contacts', label: 'Contacts'}]
    },
    notFound: {
        name: 'notFound',
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
        routes: [
            routes.login, routes.register, routes.registerStepOne,
            routes.registerStepTwo, routes.registerStepTree, routes.registerVerification
        ]
    },
    {
        layout: MainLayout,
        routes: [
            routes.home, routes.profile, routes.profileEdit,
            routes.contacts, routes.addContact
        ]
    },
    {
        layout: AnonymousLayout,
        isError: true,
        routes: [routes.notFound]
    },
];