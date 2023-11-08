import { Context, createContext } from "react";

import { ReducerActionType } from "../types/othersTypes";
import { UserModelType } from "../types/modelsTypes";

export const UPDATE_USER_DATA: string = 'UPDATE_USER_DATA';
export const TRUST_UNAUTHORIZED_USER: string = 'TRUST_UNAUTHORIZED_USER';
export const TRUST_AUTHORIZED_USER: string = 'TRUST_AUTHORIZED_USER';
export const CLEAR_USER_DATA: string = 'CLEAR_USER_DATA';

export const initialGlobalUserState: UserModelType = {
    isTrustedData: false,
    isAuthorized: false,
    email: '',
    lastName: '',
    firstName: '',
    accountId: '',
    birthData: '',
    phoneNumber: '',
};

export const userReducer = (state: UserModelType = initialGlobalUserState, action: ReducerActionType): UserModelType => {
    let nextState;
    switch (action.type) {

        case TRUST_UNAUTHORIZED_USER:
            nextState = {...state, isTrustedData: true, isAuthorized: false};
            return nextState || state;

        case TRUST_AUTHORIZED_USER:
            nextState = {...state, isTrustedData: true, isAuthorized: true};
            return nextState || state;

        case UPDATE_USER_DATA:
            nextState = {
                ...state,
                firstName: action.payload?.firstName,
                lastName: action.payload?.lastName,
                email: action.payload?.email,
                birthData: action.payload?.birthData,
                phoneNumber: action.payload?.phoneNumber,
                accountId: action.payload?.accountId,
            };
            return nextState || state;

        case CLEAR_USER_DATA:
            nextState = {...initialGlobalUserState, isTrustedData: true};
            return nextState || state;

        default:
            return state;
    }
};

export const UserContext: Context<any> = createContext(null);