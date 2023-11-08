export interface UserModelType {
    isTrustedData: boolean;
    isAuthorized: boolean;
    lastName: string;
    firstName: string;
    email: string;
    phoneNumber: string;
    accountId: string;
}

export interface AddressModelType {
    street: string;
    city: string;
    zipCode: string;
    country: string;
}
