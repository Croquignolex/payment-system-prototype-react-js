import {Context, createContext} from "react";

import {UserType} from "../types/UserType";
import {ReducerActionType} from "../types/ReducerActionType";

export const UPDATE_USER_DATA: string = 'UPDATE_USER_DATA';
export const AUTHORIZE_USER: string = 'AUTHORIZE_USER';
export const CLEAR_USER_DATA: string = 'CLEAR_USER_DATA';

export const initialGlobalState: UserType = {
    isTrustedData: false,
    isAuthorized: false,
    name: '',
    email: '',
};

export const reducer = (state: UserType = initialGlobalState, action: ReducerActionType): UserType => {
    let nextState;
    switch (action.type) {
        case AUTHORIZE_USER:
            nextState = {...state, isAuthorized: true};
            return nextState || state;
        case UPDATE_USER_DATA:
            nextState = {
                ...state,
                isTrustedData: true,
                name: action.payload?.name,
                email: action.payload?.email
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