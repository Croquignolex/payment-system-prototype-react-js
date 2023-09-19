import * as Yup from "yup";
import {ROUTES} from "../../constants/routeConstants";

export const registerUrl: string = ROUTES[0]?.routes[1]?.name;

export const initialValues: LoginFormType = {email: '', password: ''};

export const LoginSchema: Yup.ObjectSchema<LoginFormType> = Yup.object().shape({
    email: Yup.string()
        .email("L'addresse email invalide")
        .required("L'addresse email est réquise"),
    password: Yup.string()
        .min(2, 'Le mot de passe doit avoir au moins 2 caratères')
        .required('Le mot de passe est réquis'),
});

export interface LoginFormType {
    email: string;
    password: string;
}