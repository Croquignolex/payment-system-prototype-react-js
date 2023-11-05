import * as Yup from "yup";

import {LoginFormType, LoginRequestType} from "../../types/authTypes";

export const infoInitialValues: InfoFormType = {
    firstName: 'alex', lastName: 'croquy', email: 'gpetitalex10@gmail.com',
    dayOfBirth: '6', monthOfBirth: '3', yearOfBirth: '1558',
    phoneCode: '237', phoneNumber: '691503072',
};
export const addressInitialValues: LoginFormType = { email: '', password: '' };

export const infoSchema: Yup.ObjectSchema<InfoFormType> = Yup.object().shape({
    firstName: Yup.string().required("Le prénom est réquis"),
    lastName: Yup.string().required("Le nom est réquis"),
    email: Yup.string().required("L'addresse email est réquise"),
    dayOfBirth: Yup.string().required("Le jour de naissance est réquis"),
    monthOfBirth: Yup.string().required("Le mois de naissance est réquis"),
    yearOfBirth: Yup.string().required("L'année de naissance est réquise"),
    phoneCode: Yup.string().required("L'indicatif téléphonique est réquis"),
    phoneNumber: Yup.string().required("Le numéro téléphone est réquis"),
});

export const addressInfoSchema: Yup.ObjectSchema<LoginFormType> = Yup.object().shape({
    email: Yup.string()
        .required("L'addresse email est réquise")
        .email("L'addresse email invalide"),
    password: Yup.string()
        .required('Le mot de passe est réquis')
        .min(2, 'Le mot de passe doit avoir au moins 2 caratères'),
});


export interface InfoFormType {
    lastName: string;
    firstName: string;
    email: string;
    dayOfBirth: string;
    monthOfBirth: string;
    yearOfBirth: string;
    phoneCode: string;
    phoneNumber: string;
}