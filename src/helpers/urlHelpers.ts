import {API_BASE_URL} from "../constants/envConstants";
import {URLParamType} from "../types/URLParamType";

const API_V1_URL: string = `${API_BASE_URL}/api/v1`;

// Build complete url
export const joinBaseUrlWithParams = (to: string, params: URLParamType[] = [], queries: URLParamType[] = []): string => {
    let url: string = API_V1_URL + to;
    let i: number = 0;

    params.forEach((param: URLParamType): void => {
        url = url.replace(`{${param.param}}`, `${encodeURIComponent(param.value)}`);
    });

    queries.forEach((query: URLParamType): void => {
        if(i === 0) url = `${url}?${query.param}=${query.value}`;
        else url = `${url}&${query.param}=${query.value}`;
    });

    return url;
};