import * as Yup from "yup";

import { CheckEmailFormType } from "../../types/authTypes";
import {formValidationMessage} from "../../constants/generalConstants";

export const initialValues: CheckEmailFormType = { email: '' };

export const checkEmailSchema: Yup.ObjectSchema<CheckEmailFormType> = Yup.object().shape({
    email: Yup.string().required(formValidationMessage.required).email(formValidationMessage.email),
});