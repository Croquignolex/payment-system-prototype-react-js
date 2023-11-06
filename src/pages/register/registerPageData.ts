import * as Yup from "yup";

import {
    CheckEmailFormType,
    ChooseCountryFormType,
    VerifyCodeFormType,
    VerifyPhoneFormType
} from "../../types/authTypes";
import {formValidationMessage} from "../../constants/generalConstants";

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
    code: Yup.string().required(formValidationMessage.required).max(6, formValidationMessage.minMax),
});