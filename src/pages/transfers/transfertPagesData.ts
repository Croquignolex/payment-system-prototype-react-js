import * as Yup from "yup";
import {formValidationMessage} from "../../constants/generalConstants";
import {ChooseAmountAndCurrencyFormType} from "../../types/pages/transfersTypes";

export const transferStepsLabels: string[] = ['Compte', 'Destinataire', 'Montant', 'Envoi'];

export const chooseAmountAndCurrencySchema: Yup.ObjectSchema<ChooseAmountAndCurrencyFormType> = Yup.object().shape({
    amount: Yup.string().required(formValidationMessage.required),
    currency: Yup.string().required(formValidationMessage.required),
});
