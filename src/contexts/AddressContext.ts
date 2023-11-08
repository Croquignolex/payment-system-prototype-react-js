import { Context, createContext } from "react";

import { ReducerActionType } from "../types/othersTypes";
import {AddressModelType} from "../types/modelsTypes";

export const UPDATE_ADDRESS_DATA: string = 'UPDATE_ADDRESS_DATA';
export const CLEAR_ADDRESS_DATA: string = 'CLEAR_ADDRESS_DATA';

export const initialGlobalAddressState: AddressModelType = {
    street: '',
    city: '',
    zipCode: '',
    country: '',
};

export const addressReducer = (state: AddressModelType = initialGlobalAddressState, action: ReducerActionType): AddressModelType => {
    let nextState;
    switch (action.type) {

        case UPDATE_ADDRESS_DATA:
            nextState = {
                ...state,
                street: action.payload?.street,
                city: action.payload?.city,
                zipCode: action.payload?.zipCode,
                country: action.payload?.country,
            };
            return nextState || state;

        case CLEAR_ADDRESS_DATA:
            nextState = {...initialGlobalAddressState};
            return nextState || state;

        default:
            return state;
    }
};

export const AddressContext: Context<any> = createContext(null);