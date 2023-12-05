import {TransferEnumType} from "../enumsTypes";

export interface TransferAddRequestType {
    accountId: string,
    payerId: string,
    recipientId: string,
    amount: string,
    transferType: TransferEnumType,
}