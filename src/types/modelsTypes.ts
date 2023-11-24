export interface UserModelType {
    isTrustedData: boolean;
    isAuthorized: boolean;
    lastName: string;
    firstName: string;
    emailAddress: string;
    phoneNumber: string;
    accountId: string;
}

export interface AddressModelType {
    street: string;
    city: string;
    zipCode: string;
    country: string;
}

export interface ContactModelType {
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    recipientType: string;
    currencyCode: string;
    countryCode: string;
}

export interface AccountModelType {
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    payerType: string;
    currencyCode: string;
    countryCode: string;
}
