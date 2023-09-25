import * as Yup from "yup";

import {routesPath} from "../../constants/routeConstants";

export const loginUrl: string = routesPath.login;

export const initialValues: RegisterFormType = {name: '', email: '', password: '', confirm: ''};

export const registerSchema: Yup.ObjectSchema<RegisterFormType> = Yup.object().shape({
    name: Yup.string()
        .required("Le nom est réquis")
        .min(2, 'Le nom doit avoir au moins 2 caratères'),
    email: Yup.string()
        .required("L'addresse email est réquise")
        .email("L'addresse email invalide"),
    password: Yup.string()
        .required('Le mot de passe est réquis')
        .min(2, 'Le mot de passe doit avoir au moins 2 caratères'),
    confirm: Yup.string()
        .required('Le mot de passe est réquis')
        .oneOf([Yup.ref('password')], 'La confirmation du mot de passe est incorrecte')
});

export interface RegisterFormType {
    name: string;
    email: string;
    password: string;
    confirm: string;
}