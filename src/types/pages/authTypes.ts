import {PhoneType} from "../othersTypes";

export interface CheckEmailRequestType {
    emailAddress: string,
}

export interface RegisterRequestType {
    email: string,
    emailAddress: string,
    firstName: string,
    lastName: string,
    countryCode: string,
    phoneNumber: string,
    password: string,
}

export interface LoginRequestType {
    emailAddress: string
    password: string
}

export interface LoginFormType extends LoginRequestType {
}


export interface CheckEmailFormType extends CheckEmailRequestType {
}

export interface ChooseNamesFormType {
    firstName: string,
    lastName: string,
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
    emailAddress: string,
    countryCode: string,
    firstName: string,
    lastName: string,
}