import * as Yup from "yup";

import {formValidationMessage} from "../../constants/generalConstants";
import {CheckEmailFormType, ChooseCountryFormType, PasswordFormType,
    VerifyCodeFormType, VerifyPhoneFormType
} from "../../types/pages/authTypes";

// export const checkEmailInitialValues: CheckEmailFormType = { email: '' };

export const checkEmailSchema: Yup.ObjectSchema<CheckEmailFormType> = Yup.object().shape({
    email: Yup.string().required(formValidationMessage.required).email(formValidationMessage.email),
});

// export const chooseCountryInitialValues: ChooseCountryFormType = { country: '' };

export const chooseCountrySchema: Yup.ObjectSchema<ChooseCountryFormType> = Yup.object().shape({
    country: Yup.string().required(formValidationMessage.required),
});

// export const verifyPhoneInitialValues: VerifyPhoneFormType = { phoneCode: '', phoneNumber: '' };

export const verifyPhoneSchema: Yup.ObjectSchema<VerifyPhoneFormType> = Yup.object().shape({
    phoneCode: Yup.string().required(formValidationMessage.required),
    phoneNumber: Yup.string().required(formValidationMessage.required),
});

export const verifyCodeInitialValues: VerifyCodeFormType = { code: '' };

export const verifyCodeSchema: Yup.ObjectSchema<VerifyCodeFormType> = Yup.object().shape({
    code: Yup.string()
        .required(formValidationMessage.required)
        .min(6, formValidationMessage.minMax)
        .max(6, formValidationMessage.minMax),
});

export const passwordInitialValues: PasswordFormType = { password: '', confirmPassword: '' };

export const passwordSchema: Yup.ObjectSchema<PasswordFormType> = Yup.object().shape({
    password: Yup.string()
        .required(formValidationMessage.required)
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{4,})/, formValidationMessage.password),
    confirmPassword: Yup.string()
        .required(formValidationMessage.required)
        .oneOf([Yup.ref('password')], formValidationMessage.confirm)
});