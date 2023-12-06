import {AccountModelType, ContactModelType} from "../modelsTypes";

export interface CheckEmailRequestType {
    email: string,
}

export interface RegisterRequestType extends CheckEmailRequestType {
    firstName: string,
    lastName: string,
    password: string,
}

export interface LoginRequestType extends CheckEmailRequestType {
    password: string
}

export interface LoginFormType extends LoginRequestType {
}


export interface CheckEmailFormType extends CheckEmailRequestType {
}

export interface ChooseCountryFormType {
    country: string,
}

export interface VerifyPhoneFormType {
    phoneNumber: string,
    phoneCode: string,
}

export interface VerifyCodeFormType {
    code: string,
}

export interface PasswordFormType {
    password: string,
    confirmPassword: string,
}

export interface registerDataType {
    email: string,
    country: string,
}