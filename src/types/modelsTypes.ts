import {AccountEnumType} from "./enumsTypes";
import {AccountAddFormType} from "../pages/accounts/accountPagesData";
import {ContactAddFormType} from "../pages/contacts/contactPagesData";

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

export interface ContactModelType extends ContactAddFormType {
    recipientId: string;
}

export interface AccountModelType extends AccountAddFormType {
    payerId: string;
}
