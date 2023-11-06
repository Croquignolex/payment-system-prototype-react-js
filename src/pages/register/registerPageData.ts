import * as Yup from "yup";

import {CheckEmailFormType, ChooseCountryFormType} from "../../types/authTypes";
import {formValidationMessage} from "../../constants/generalConstants";

export const checkEmailInitialValues: CheckEmailFormType = { email: '' };

export const checkEmailSchema: Yup.ObjectSchema<CheckEmailFormType> = Yup.object().shape({
    email: Yup.string().required(formValidationMessage.required).email(formValidationMessage.email),
});

export const chooseCountryInitialValues: ChooseCountryFormType = { country: '' };

export const chooseCountrySchema: Yup.ObjectSchema<ChooseCountryFormType> = Yup.object().shape({
    country: Yup.string(),
});