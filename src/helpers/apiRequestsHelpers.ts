import {getRequest, postRequest, putRequest} from "./axiosHelpers";
import {accountApiURI, accountsApiURI, authApiURI, contactsApiURI} from "../constants/apiURIConstants";
import { apiBaseURL } from "../constants/envConstants";
import {LoginRequestType, RegisterRequestType} from "../types/pages/authTypes";
import {AccountAddressUpdateRequestType, AccountDetailsRequestType} from "../types/pages/accountTypes";
import {ContactAddRequestType} from "../types/pages/contactsTypes";
import {AccountAddRequestType} from "../types/pages/accountsTypes";

const API_V1_URL: string = `${apiBaseURL}`;

export const loginRequest = ({ email, password }: LoginRequestType): Promise<any> => {
    const url: string = joinBaseUrlWithParams(authApiURI.login);
    return postRequest(url, { email, password });
};

export const registerRequest = ({ firstName, lastName, email, password }: RegisterRequestType): Promise<any> => {
    const url: string = joinBaseUrlWithParams(authApiURI.register);
    return postRequest(url, { firstName, lastName, email, password });
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