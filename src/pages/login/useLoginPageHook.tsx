import {useContext} from "react";
import {useMutation} from '@tanstack/react-query';
import {NavigateFunction, useNavigate} from "react-router-dom";

import {homeUrl, LoginFormType} from "./loginPageData";
import {loginRequest} from "../../helpers/apiRequestsHelpers";
import {RequestResponseType} from "../../types/RequestResponseType";
import {setLocaleStorageItem} from "../../helpers/localStorageHelpers";
import {UPDATE_USER_DATA, UserContext} from "../../components/UserContext";

const useLoginPageHook = () => {
    const navigate: NavigateFunction = useNavigate();
    const {setGlobalState} = useContext(UserContext);

    const {isLoading, isError, isSuccess, data, error, mutate}: RequestResponseType = useMutation(loginRequest);

    const errorMessage: string = error?.response?.data?.message || error?.message;

    if(isSuccess) {
        const {message, name, email, token} = data?.data;

        setLocaleStorageItem('user', {name, email, 'access-token': token});

        setGlobalState({type: UPDATE_USER_DATA, payload: {isAuthorized: true, name, email}});

        navigate(homeUrl, {state: {loginMessage: message}});
    }

    const handleLogin = ({email, password}: LoginFormType): void => mutate({email, password});

    return {handleLogin, isLoading, isError, errorMessage};
};

export default useLoginPageHook;