export interface LoginRequestType {
    email: string,
    password: string
}

export interface RegisterRequestType extends LoginRequestType {
    name: string
}

export interface LoginFormType extends LoginRequestType {
}


export interface RegisterFormType extends RegisterRequestType {
    confirm: string;
}