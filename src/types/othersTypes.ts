export interface ReducerActionType {
    type: string;
    payload: any;
}

export interface RequestResponseType {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    data?: any;
    error?: any;
    mutate: any;
    variables?: any;
}

export interface FormFieldProps {
    label: string;
    name: string;
    isInvalid: boolean;
    errorMessage?: string;
}