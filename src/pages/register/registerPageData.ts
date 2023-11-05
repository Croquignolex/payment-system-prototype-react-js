import * as Yup from "yup";

import { RegisterFormType } from "../../types/authTypes";

export const initialValues: RegisterFormType = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

export const registerSchema: Yup.ObjectSchema<RegisterFormType> = Yup.object().shape({
    firstName: Yup.string().required("Le prénom est réquis"),
    lastName: Yup.string().required("Le nom est réquis"),
    email: Yup.string()
        .required("L'addresse email est réquise")
        .email("L'addresse email invalide"),
    password: Yup.string()
        .required("Le mot de passe est réquis")
        .min(2, "Le mot de passe doit avoir au moins 2 caratères"),
    confirmPassword: Yup.string()
        .required("La confirmation du mot de passe est réquise")
        .oneOf([Yup.ref('password')], "La confirmation du mot de passe est incorrecte")
});