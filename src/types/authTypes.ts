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
    country?: string,
}

