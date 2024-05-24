import {getRequest, postRequest, putRequest} from "./axiosHelpers";
import {accountApiURI, accountsApiURI, authApiURI, contactsApiURI, transfersApiURI} from "../constants/apiURIConstants";
import {apiBaseURL} from "../constants/envConstants";
import {LoginRequestType, RegisterRequestType} from "../types/pages/authTypes";
import {AccountAddressUpdateRequestType, AccountDetailsRequestType} from "../types/pages/accountTypes";
import {ContactAddRequestType} from "../types/pages/contactsTypes";
import {AccountAddRequestType} from "../types/pages/accountsTypes";
import {TransferAddRequestType} from "../types/pages/transfersTypes";
import {TransferEnumType} from "../types/enumsTypes";

const API_V1_URL: string = `${apiBaseURL}`;

export const loginRequest = ({ emailAddress, password }: LoginRequestType): Promise<any> => {
    const url: string = joinBaseUrlWithParams(authApiURI.login);
    return postRequest(url, { email: emailAddress, password });
};

export const registerRequest = (values: RegisterRequestType): Promise<any> => {
    const { firstName, lastName, email, emailAddress, countryCode, phoneNumber, password }: RegisterRequestType = values;
    const url: string = joinBaseUrlWithParams(authApiURI.register);
    return postRequest(url, { firstName, lastName, email, emailAddress, countryCode, phoneNumber, password });
};

export const accountDetailsRequest = ({ accountId }: AccountDetailsRequestType) => {
    const url: string = joinBaseUrlWithParams(accountApiURI.fetch, [{param: 'accountId', value: accountId}]);
    return getRequest(url);
};

export const accountAddressUpdateRequest = ({ country, zipCode, street, city, accountId }: AccountAddressUpdateRequestType) => {
    const url: string = joinBaseUrlWithParams(accountApiURI.updateAddress, [{param: 'accountId', value: accountId}]);
    return putRequest(url, { country, zipCode, street, city });
};

export const contactsRequest = ({ accountId }: AccountDetailsRequestType) => {
    const url: string = joinBaseUrlWithParams(contactsApiURI.fetch, [{param: 'accountId', value: accountId}]);
    return getRequest(url);
};

export const contactAddRequest = ({ recipientType, currencyCode, firstName, lastName, emailAddress, countryCode, phoneNumber, accountId }: ContactAddRequestType) => {
    const url: string = joinBaseUrlWithParams(contactsApiURI.add, [{param: 'accountId', value: accountId}]);
    return putRequest(url, { recipientType, currencyCode, firstName, lastName, emailAddress, countryCode, phoneNumber });
};

export const accountsRequest = ({ accountId }: AccountDetailsRequestType) => {
    const url: string = joinBaseUrlWithParams(accountsApiURI.fetch, [{param: 'accountId', value: accountId}]);
    return getRequest(url);
};

export const accountAddRequest = ({ payerType, currencyCode, firstName, lastName, emailAddress, countryCode, phoneNumber, accountId }: AccountAddRequestType) => {
    const url: string = joinBaseUrlWithParams(accountsApiURI.add, [{param: 'accountId', value: accountId}]);
    return putRequest(url, { payerType, currencyCode, firstName, lastName, emailAddress, countryCode, phoneNumber });
};

export const transferAddRequest = ({ accountId, payerId, recipientId, amount, transferType }: TransferAddRequestType) => {
    let url: string;

    switch (transferType) {
        case TransferEnumType.mtnToMtn:
            url = joinBaseUrlWithParams(transfersApiURI.addMtnToMtn, [{param: 'accountId', value: accountId}]);
            break;
    }

    const amountStr: string = amount.toString();
    return postRequest(url, { payerId, recipientId, amount: amountStr });
    // return putRequest(url, { payerId, recipientId, amount });
};

// Build complete url
const joinBaseUrlWithParams = (to: string, params?: URLParamType[], queries?: URLParamType[]): string => {
    let url: string = API_V1_URL + to;

    if(params) {
        params.forEach((param: URLParamType): void => {
            url = url.replace(`{${param.param}}`, `${encodeURIComponent(param.value)}`);
        });
    }

    if(queries) {
        let i: number = 0;

        queries.forEach((query: URLParamType): void => {
            if(i === 0) url = `${url}?${query.param}=${query.value}`;
            else url = `${url}&${query.param}=${query.value}`;
        });
    }

    return url;
};

export interface URLParamType {
    param: string;
    value: string;
}