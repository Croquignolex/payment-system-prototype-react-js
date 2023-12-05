import {useContext, useEffect} from "react";
import {useMutation} from "@tanstack/react-query";
import {CreateToastFnReturn, useToast} from "@chakra-ui/react";
import {useNavigate, NavigateFunction, useLocation} from "react-router-dom";

import { routes } from "../../constants/routeConstants";
import {PasswordFormType} from "../../types/pages/authTypes";
import {TRUST_AUTHORIZED_USER, UPDATE_USER_DATA, UserContext} from "../../contexts/UserContext";
import {ErrorAlertType, RequestResponseType} from "../../types/othersTypes";
import {registerRequest} from "../../helpers/apiRequestsHelpers";
import {AlertStatusEnumType} from "../../types/enumsTypes";
import {setLocaleStorageItem} from "../../helpers/localStorageHelpers";
import {toastAlert} from "../../helpers/generalHelpers";

const useRegisterStepTreePageHook = (): any => {
    let alertData: ErrorAlertType | null = null;

    const toast: CreateToastFnReturn = useToast();
    const navigate: NavigateFunction = useNavigate();
    const { state: locationState } = useLocation();
    const { setGlobalUserState } = useContext(UserContext);

    const backState: any = {trustedData: true, email: locationState?.email, country: locationState?.country, phoneCode: locationState?.phoneCode, phoneNumber: locationState?.phoneNumber};

    useEffect((): void => {
        if(!locationState?.trustedData) {
            navigate(routes.register.path);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { isLoading, isError, isSuccess, data, error, variables, mutate }: RequestResponseType = useMutation(registerRequest);

    if(isError) {
        const message: string = error?.response?.data?.message || error?.message;

        alertData = { show: isError, status: AlertStatusEnumType.error, message };
    }

    if(isSuccess) {
        const accountId: string = data?.data?.accountId;
        const { lastName, firstName, email, phoneNumber } = variables;

        setLocaleStorageItem('user', { lastName, firstName, email, phoneNumber, accountId });

        setGlobalUserState({type: TRUST_AUTHORIZED_USER});
        setGlobalUserState({type: UPDATE_USER_DATA, payload: { lastName, firstName, email, phoneNumber, accountId }});

        navigate(routes.home.path);

        toastAlert(toast, `Bienvenue ${firstName} ${lastName}`, AlertStatusEnumType.info);
    }

    const handleRegister = ({ password }: PasswordFormType): void => {
        const email: string = locationState?.email;
        const phoneNumber: string = locationState?.phoneCode + locationState?.phoneNumber;
        const firstName: string = phoneNumber;
        const lastName: string = "";

        mutate({ email, firstName, lastName, phoneNumber, password });
    };

    return { handleRegister, isLoading, alertData, backState };
};

export default useRegisterStepTreePageHook;