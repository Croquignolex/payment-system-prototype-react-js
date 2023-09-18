import {API_BASE_URL} from "../constants/envConstants";
import {URLParam} from "../models/URLParamModel";

const API_V1_URL: string = `${API_BASE_URL}/api/v1`;

// Build complete url
export const joinBaseUrlWithParams = (to: string, params: URLParam[] = [], queries: URLParam[] = []): string => {
    let url: string = API_V1_URL + to;
    let i: number = 0;

    params.forEach((param: URLParam): void => {
        url = url.replace(`{${param.param}}`, `${encodeURIComponent(param.value)}`);
    });

    queries.forEach((query: URLParam): void => {
        if(i === 0) url = `${url}?${query.param}=${query.value}`;
        else url = `${url}&${query.param}=${query.value}`;
    });

    return url;
};