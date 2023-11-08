import {AddressModelType} from "../modelsTypes";

export interface AccountDetailsRequestType {
    accountId: string,
}

export interface AccountAddressUpdateRequestType extends AddressModelType {
    accountId: string,
}