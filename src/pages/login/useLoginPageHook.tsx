import { useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { routes } from "../../constants/routeConstants";
import {registerRequest} from "../../helpers/apiRequestsHelpers";
import { setLocaleStorageItem } from "../../helpers/localStorageHelpers";
import { UPDATE_USER_DATA, UserContext } from "../../components/UserContext";
import {ErrorAlertType, RequestResponseType} from "../../types/othersTypes";
import { LoginFormType } from "../../types/authTypes";
import {AlertStatusType} from "../../types/enumsTypes";

const useLoginPageHook = (): any => {
    const navigate: NavigateFunction = useNavigate();
    const { setGlobalState } = useContext(UserContext);

    // const { isLoading, isError, isSuccess, data, error, mutate }: RequestResponseType = useMutation(loginRequest);
    const { isLoading, isError, isSuccess, data, error, variables, mutate }: RequestResponseType = useMutation(registerRequest);

    const errorMessage: string = error?.response?.data?.message || error?.message;
    const errorAlertData: ErrorAlertType = { show: isError, status: AlertStatusType.error, message: errorMessage }

    if(isSuccess) {
        const accountId: string = data?.data?.accountId;
        const { lastName, firstName, email } = variables;

        setLocaleStorageItem('user', { lastName, firstName, email, accountId });

        setGlobalState({type: UPDATE_USER_DATA, payload: { isAuthorized: true, lastName, firstName, email, accountId }});

        navigate(routes.home.path, {state: { welcomeAlert: true }});
    }

    const handleLogin = ({ email, password }: LoginFormType): void => mutate({ email, password, firstName: 'Fake user', lastName: '' });

    return { handleLogin, isLoading, errorAlertData };
};

export default useLoginPageHook;