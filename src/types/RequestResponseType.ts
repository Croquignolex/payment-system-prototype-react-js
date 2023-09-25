export interface RequestResponseType {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    data?: any;
    error?: any;
    mutate: any;
}