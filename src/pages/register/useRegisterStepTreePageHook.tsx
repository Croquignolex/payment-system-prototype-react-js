import {useContext, useEffect} from "react";
import {useNavigate, NavigateFunction, useLocation} from "react-router-dom";

import { routes } from "../../constants/routeConstants";
import {PasswordFormType} from "../../types/pages/authTypes";
import {TRUST_AUTHORIZED_USER, UPDATE_USER_DATA, UserContext} from "../../contexts/UserContext";
import {ErrorAlertType, RequestResponseType} from "../../types/othersTypes";
import {useMutation} from "@tanstack/react-query";
import {registerRequest} from "../../helpers/apiRequestsHelpers";
import {AlertStatusType} from "../../types/enumsTypes";
import {setLocaleStorageItem} from "../../helpers/localStorageHelpers";

const useRegisterStepTreePageHook = (): any => {
    const navigate: NavigateFunction = useNavigate();
    const { state: locationState } = useLocation();
    const { setGlobalUserState } = useContext(UserContext);

    const backState: any = {trustedData: true, email: locationState?.email, country: locationState?.country, phoneCode: locationState?.phoneCode, phoneNumber: locationState?.phoneNumber};

    useEffect((): void => {
        if(!locationState?.trustedData) {
            navigate(routes.register.path);
        }
    }, []);

    const { isLoading, isError, isSuccess, data, error, variables, mutate }: RequestResponseType = useMutation(registerRequest);

    const errorMessage: string = error?.response?.data?.message || error?.message;
    const errorAlertData: ErrorAlertType = { show: isError, status: AlertStatusType.error, message: errorMessage };

    if(isSuccess) {
        const accountId: string = data?.data?.accountId;
        const { lastName, firstName, email, phoneNumber } = variables;

        setLocaleStorageItem('user', { lastName, firstName, email, phoneNumber, accountId });

        setGlobalUserState({type: TRUST_AUTHORIZED_USER});
        setGlobalUserState({type: UPDATE_USER_DATA, payload: { lastName, firstName, email, phoneNumber, accountId }});

        navigate(routes.home.path, {state: { welcomeAlert: true }});
    }

    const handleRegister = ({ password }: PasswordFormType): void => {
        const email: string = locationState?.email;
        const phoneNumber: string = locationState?.phoneCode + locationState?.phoneNumber;
        const firstName: string = phoneNumber;
        const lastName: string = "";

        mutate({ email, firstName, lastName, phoneNumber, password });
    };

    return { handleRegister, isLoading, errorAlertData, backState };
};

export default useRegisterStepTreePageHook;