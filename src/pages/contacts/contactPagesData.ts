import * as Yup from "yup";

import {formValidationMessage} from "../../constants/generalConstants";
import {ContactModelType} from "../../types/modelsTypes";

export const initialValues: ContactAddFormType = { emailAddress: '', firstName: '', lastName: '', countryCode: '', recipientType: '', phoneNumber: '', currencyCode: '' };

export const contactAddSchema: Yup.ObjectSchema<ContactAddFormType> = Yup.object().shape({
    firstName: Yup.string().required(formValidationMessage.required),
    emailAddress: Yup.string().required(formValidationMessage.required),
    phoneNumber: Yup.string().required(formValidationMessage.required),
    lastName: Yup.string().required(formValidationMessage.required),
    countryCode: Yup.string().required(formValidationMessage.required),
    recipientType: Yup.string().required(formValidationMessage.required),
    currencyCode: Yup.string().required(formValidationMessage.required),
});

export interface ContactAddFormType extends ContactModelType {

}