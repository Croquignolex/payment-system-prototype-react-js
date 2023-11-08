import {IconType} from "react-icons";

import {AlertStatusType} from "./enumsTypes";

export interface ReducerActionType {
    type: string;
    payload: any;
}

export interface ErrorAlertType {
    show: boolean,
    status: AlertStatusType,
    message: string
}

export interface HeaderMenuItemType {
    path: string,
    name: string,
    key: string,
    icon: IconType,
    title: string,
    background: string,
    color: string,
}

export interface SidebarMenuItemType {
    path: string,
    name: string,
    key: string,
    icon: IconType,
    title: string,
    isActive: boolean,
}

export interface BreadcrumbItemsType {
    path: string,
    key: string,
    label: string,
}

export interface RequestResponseType {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    data?: any;
    error?: any;
    mutate?: any;
    variables?: any;
}

export interface FormSelectOptionType {
    label: string;
    key: string,
}

export interface FormDisabledFieldProps {
    label?: string;
    name: string;
    noLabel?: boolean;
}

export interface FormFieldProps extends FormDisabledFieldProps {
    isInvalid: boolean;
    errorMessage?: string;
}

export interface FormCustomDisabledPhoneFieldProps {
    label?: string;
    code: string,
    number: string,
    noLabel?: boolean;
}

export interface SelectFormFieldProps extends FormFieldProps {
    values: FormSelectOptionType[];
}