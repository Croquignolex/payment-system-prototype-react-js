import {useMutation} from '@tanstack/react-query';
import {NavigateFunction, useNavigate} from "react-router-dom";

import {homeUrl, LoginFormType} from "./loginPageData";
import {loginRequest} from "../../helpers/apiRequestsHelpers";
import {RequestResponseType} from "../../types/RequestResponseType";

const useLoginPageHook = () => {
    const navigate: NavigateFunction = useNavigate();

    const {isLoading, isError, isSuccess, data, error, mutate}: RequestResponseType = useMutation(loginRequest);

    const errorMessage: string = error?.response?.data?.message || error?.message;

    if(isSuccess) {
        const loginMessage: string = data?.data?.message;
        navigate(homeUrl, {state: {loginMessage}});
    }

    const handleLogin = ({email, password}: LoginFormType): void => mutate({email, password});

    return {handleLogin, isLoading, isError, errorMessage};
};

export default useLoginPageHook;