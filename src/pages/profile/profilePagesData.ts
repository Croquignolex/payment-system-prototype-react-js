import * as Yup from "yup";

import {formValidationMessage} from "../../constants/generalConstants";
import {AddressModelType} from "../../types/modelsTypes";

export const profileSchema: Yup.ObjectSchema<ProfileFormType> = Yup.object().shape({
    firstName: Yup.string().required(formValidationMessage.required),
    email: Yup.string().required(formValidationMessage.required),
    phoneNumber: Yup.string().required(formValidationMessage.required),
    lastName: Yup.string().required(formValidationMessage.required),
    street: Yup.string().required(formValidationMessage.required),
    zipCode: Yup.string().required(formValidationMessage.required),
    city: Yup.string().required(formValidationMessage.required),
    country: Yup.string().required(formValidationMessage.required),
});

export interface ProfileFormType extends AddressModelType {
    email: string;
    lastName: string;
    firstName: string;
    phoneNumber: string;
}