export interface CheckEmailRequestType {
    email: string,
}

export interface RegisterRequestType extends CheckEmailRequestType {
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
