import { Context, createContext } from "react";

import { ReducerActionType } from "../types/othersTypes";
import { UserModelType } from "../types/modelsTypes";

export const UPDATE_USER_DATA: string = 'UPDATE_USER_DATA';
export const TRUST_UNAUTHORIZED_USER: string = 'TRUST_UNAUTHORIZED_USER';
export const CLEAR_USER_DATA: string = 'CLEAR_USER_DATA';

export const initialGlobalState: UserModelType = {
    isTrustedData: false,
    isAuthorized: false,
    email: '',
    lastName: '',
    firstName: '',
    accountId: '',
};

export const reducer = (state: UserModelType = initialGlobalState, action: ReducerActionType): UserModelType => {
    let nextState;
    switch (action.type) {

        case TRUST_UNAUTHORIZED_USER:
            nextState = {...state, isTrustedData: true, isAuthorized: false};
            return nextState || state;

        case UPDATE_USER_DATA:
            nextState = {
                ...state,
                isTrustedData: true,
                isAuthorized: action.payload?.isAuthorized,
                firstName: action.payload?.firstName,
                lastName: action.payload?.lastName,
                email: action.payload?.email,
                accountId: action.payload?.accountId,
            };
            return nextState || state;

        case CLEAR_USER_DATA:
            nextState = initialGlobalState;
            return nextState || state;

        default:
            return state;
    }
};

export const UserContext: Context<any> = createContext(null);