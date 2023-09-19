import {API_BASE_URL} from "../constants/envConstants";
import axios, {InternalAxiosRequestConfig, AxiosInstance, AxiosResponse} from "axios";
import {getLocaleStorageItem} from "./localStorageHelpers";

const API_V1_URL: string = `${API_BASE_URL}/api/v1`;

const axiosApiInstance: AxiosInstance = axios.create({timeout: 30000});

// Axios request interceptor to add automatically token
axiosApiInstance.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
    config.headers["content-type"] = 'application/json';
    const accessToken = getLocaleStorageItem('access-token');
    if(accessToken) {
        config.headers["authorization"] = `Bearer ${accessToken}`;
    }
    return config;
}, error => Promise.reject(error));

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

export const getRequest = async ({url, urlParams, queryParams, config}: RequestParamType): Promise<any> => {
    return axiosApiInstance
        .get(joinBaseUrlWithParams(url, urlParams, queryParams), config)
        .then((res: AxiosResponse<any>) => res.data);
};

export const postRequest = async ({url, data, urlParams, queryParams, config}: RequestParamType): Promise<any> => {
    return axiosApiInstance
        .post(joinBaseUrlWithParams(url, urlParams, queryParams), data, config)
        //.then((res: AxiosResponse<any>) => res.data)
        //.catch(e => console.log({e}));
};

export interface URLParamType {
    param: string;
    value: string;
}

export interface RequestParamType {
    url: string;
    data?: any;
    config?: any;
    urlParams?: URLParamType[];
    queryParams?: URLParamType[];
}