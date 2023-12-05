import * as Yup from "yup";

import {formValidationMessage} from "../../constants/generalConstants";

export const initialValues: AccountAddFormType = {
    emailAddress: '',
    firstName: '',
    lastName: '',
    countryCode: '',
    payerType: '',
    phoneNumber: '',
    currencyCode: ''
};

export const accountAddSchema: Yup.ObjectSchema<AccountAddFormType> = Yup.object().shape({
    firstName: Yup.string().required(formValidationMessage.required),
    emailAddress: Yup.string().required(formValidationMessage.required),
    phoneNumber: Yup.string().required(formValidationMessage.required),
    lastName: Yup.string().required(formValidationMessage.required),
    countryCode: Yup.string().required(formValidationMessage.required),
    payerType: Yup.string().required(formValidationMessage.required),
    currencyCode: Yup.string().required(formValidationMessage.required),
});

export interface AccountAddFormType {
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    payerType: string;
    currencyCode: string;
    countryCode: string;
}