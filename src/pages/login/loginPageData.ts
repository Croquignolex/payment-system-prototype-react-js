import * as Yup from "yup";

import { LoginFormType } from "../../types/pages/authTypes";
import {formValidationMessage} from "../../constants/generalConstants";

export const initialValues: LoginFormType = { emailAddress: '', password: '' };

export const loginSchema: Yup.ObjectSchema<LoginFormType> = Yup.object().shape({
    emailAddress: Yup.string().required(formValidationMessage.required).email(formValidationMessage.email),
    password: Yup.string().required(formValidationMessage.required),
});