import { lazy, LazyExoticComponent, ReactElement } from 'react';
import { FiHome, FiUser, FiUsers, FiCreditCard, FiTrendingUp } from "react-icons/fi";

import AnonymousLayout from "../layouts/AnonymousLayout";
import MainLayout from "../layouts/MainLayout";

const LazyLoginPage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/login/LoginPage'));
const LazyRegisterPage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/register/RegisterPage'));
const LazyHomePage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/HomePage'));
const LazyProfilePage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/profile/ProfilePage'));
const LazyProfileEditPage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/profile/ProfileEditPage'));
const LazyNotFoundPage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/NotFoundPage'));
const LazyContactsPage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/contacts/ContactsPage'));
const LazyContactAddPage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/contacts/ContactAddPage'));
const LazyAccountsPage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/accounts/AccountsPage'));
const LazyAccountAddPage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/accounts/AccountAddPage'));
const LazyTransferAddPage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/transfers/TransferAddPage'));
const LazyTransfersPage: LazyExoticComponent<() => ReactElement> = lazy(() => import('../pages/transfers/TransfersPage'));

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
    accounts: {
        name: 'accounts',
        title: 'Comptes',
        component: LazyAccountsPage,
        path: '/accounts',
        icon: FiCreditCard,
        onSidebar: true,
        onHeader: false,
        breadcrumb: []
    },
    addAccount: {
        name: 'addContact',
        title: 'Ajouter un compte',
        component: LazyAccountAddPage,
        path: '/accounts/add',
        icon: null,
        onSidebar: false,
        onHeader: false,
        breadcrumb: [{path: '/accounts', label: 'Comptes'}]
    },
    transfers: {
        name: 'transfers',
        title: "Tranferts",
        component: LazyTransfersPage,
        path: '/transfers',
        icon: FiTrendingUp,
        onSidebar: true,
        onHeader: false,
        breadcrumb: []
    },
    addTransfer: {
        name: 'addTransfer',
        title: "Envoyer de l'argent",
        component: LazyTransferAddPage,
        path: '/transfer/add',
        icon: null,
        onSidebar: false,
        onHeader: false,
        breadcrumb: []
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
        routes: [routes.login, routes.register]
    },
    {
        layout: MainLayout,
        routes: [
            routes.home, routes.profile, routes.profileEdit,
            routes.contacts, routes.addContact,
            routes.accounts, routes.addAccount,
            routes.transfers, routes.addTransfer,
        ]
    },
    {
        layout: AnonymousLayout,
        isError: true,
        routes: [routes.notFound]
    },
];