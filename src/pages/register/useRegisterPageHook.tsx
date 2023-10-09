import { useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, NavigateFunction } from "react-router-dom";

import { routes } from "../../constants/routeConstants";
import { registerRequest } from "../../helpers/apiRequestsHelpers";
import { RegisterFormType } from "../../types/authTypes";
import { RequestResponseType } from "../../types/othersTypes";
import { setLocaleStorageItem } from "../../helpers/localStorageHelpers";
import { UPDATE_USER_DATA, UserContext } from "../../components/UserContext";

const useRegisterPageHook = (): any => {
    const navigate: NavigateFunction = useNavigate();
    const { setGlobalState } = useContext(UserContext);

    const { isLoading, isError, isSuccess, data, error, variables, mutate }: RequestResponseType = useMutation(registerRequest);

    const errorMessage: string = error?.response?.data?.message || error?.message;


    if(isSuccess) {
        const accountId: string = data?.data?.accountId;
        const { lastName, firstName, email } = variables;

        setLocaleStorageItem('user', { lastName, firstName, email, accountId });

        setGlobalState({type: UPDATE_USER_DATA, payload: { isAuthorized: true, lastName, firstName, email, accountId }});

        navigate(routes.home.path, {state: { loginMessage: `Bienvenue ${firstName}` }});
    }

    const handleRegister = ({ firstName, lastName, email, password }: RegisterFormType): void => mutate({ firstName, lastName, email, password });

    return { handleRegister, isLoading, isError, errorMessage };
};

export default useRegisterPageHook;