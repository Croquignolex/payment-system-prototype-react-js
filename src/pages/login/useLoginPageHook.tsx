import { useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { routes } from "../../constants/routeConstants";
import { loginRequest } from "../../helpers/apiRequestsHelpers";
import { setLocaleStorageItem } from "../../helpers/localStorageHelpers";
import { UPDATE_USER_DATA, UserContext } from "../../components/UserContext";
import {ErrorAlertType, RequestResponseType} from "../../types/othersTypes";
import { LoginFormType } from "../../types/authTypes";
import {AlertStatusType} from "../../types/enumsTypes";

const useLoginPageHook = (): any => {
    const navigate: NavigateFunction = useNavigate();
    const { setGlobalState } = useContext(UserContext);

    // const { isLoading, isError, isSuccess, data, error, mutate }: RequestResponseType = useMutation(loginRequest);
    const { isLoading, isError, isSuccess, error, mutate }: RequestResponseType = useMutation(loginRequest);

    const errorMessage: string = error?.response?.data?.message || error?.message;
    const errorAlertData: ErrorAlertType = { show: isError, status: AlertStatusType.error, message: errorMessage }

    if(isSuccess || isError) {
        // const { message, firstName, lastName, email, accountId, token } = data?.data;

        // *************************************** TO REMOVE *************************************** //
        const firstName: string = "Croquy";
        const lastName: string = "Corquignolex";
        const email: string = "crouy@exemple.com";
        const accountId: string = "73d5e89c-a221-4876-9ac9-09b7bcf2ec29";
        const token: string = "secrete-access-token";
        // *************************************** TO REMOVE *************************************** //

        setLocaleStorageItem('user', { firstName, lastName, email, accountId, 'access-token': token });

        setGlobalState({ type: UPDATE_USER_DATA, payload: { isAuthorized: true, firstName, lastName, email, accountId } });

        navigate(routes.home.path, { state: { welcomeAlert: true } });
    }

    const handleLogin = ({ email, password }: LoginFormType): void => mutate({ email, password });

    return { handleLogin, isLoading, errorAlertData };
};

export default useLoginPageHook;