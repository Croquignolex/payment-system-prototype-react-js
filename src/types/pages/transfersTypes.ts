import {TransferEnumType} from "../enumsTypes";

export interface TransferAddRequestType {
    accountId: string,
    payerId: string,
    recipientId: string,
    amount: string,
    transferType: TransferEnumType,
}

export interface ChooseAmountAndCurrencyFormType {
    currency: string,
    amount: string,
}

