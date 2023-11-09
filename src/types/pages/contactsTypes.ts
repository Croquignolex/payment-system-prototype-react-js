import {ContactModelType} from "../modelsTypes";

export interface ContactAddRequestType extends ContactModelType {
    accountId: string,
}