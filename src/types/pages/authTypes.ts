import {PhoneType} from "../othersTypes";

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

export interface VerifyPhoneFormType extends PhoneType {
}

export interface VerifyCodeFormType {
    code: string,
}

export interface PasswordFormType {
    password: string,
    confirmPassword: string,
}

export interface registerDataType extends PhoneType {
    email: string,
    country: string,
}