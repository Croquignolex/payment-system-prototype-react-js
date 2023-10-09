export interface LoginRequestType {
    email: string,
    password: string
}

export interface RegisterRequestType extends LoginRequestType {
    lastName: string,
    firstName: string,
}

export interface LoginFormType extends LoginRequestType {
}


export interface RegisterFormType extends RegisterRequestType {
    confirmPassword: string;
}