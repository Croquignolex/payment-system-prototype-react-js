import * as Yup from "yup";

import {routesPath} from "../../constants/routeConstants";

export const registerUrl: string = routesPath.register;
export const homeUrl: string = routesPath.home;

export const initialValues: LoginFormType = {email: '', password: ''};

export const loginSchema: Yup.ObjectSchema<LoginFormType> = Yup.object().shape({
    email: Yup.string()
        .required("L'addresse email est réquise")
        .email("L'addresse email invalide"),
    password: Yup.string()
        .required('Le mot de passe est réquis')
        .min(2, 'Le mot de passe doit avoir au moins 2 caratères'),
});

export interface LoginFormType {
    email: string;
    password: string;
}