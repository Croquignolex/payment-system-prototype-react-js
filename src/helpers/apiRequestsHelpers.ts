import {postRequest} from "./axiosHelpers";
import {authApiURI} from "../constants/apiURIConstants";
import {apiBaseURL} from "../constants/envConstants";

const API_V1_URL: string = `${apiBaseURL}/api/v1`;

export const loginRequest = ({email, password}: {email: string, password: string}): Promise<any> => {
    const url: string = joinBaseUrlWithParams(authApiURI.login);
    return postRequest(url, {email, password});
};

export const registerRequest = ({name, email, password}: {name: string, email: string, password: string}): Promise<any> => {
    const url: string = joinBaseUrlWithParams(authApiURI.register);
    return postRequest(url, {name, email, password});
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