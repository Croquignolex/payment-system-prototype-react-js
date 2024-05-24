import {useContext} from "react";
import {useMutation} from "@tanstack/react-query";
import {CreateToastFnReturn, useToast} from "@chakra-ui/react";
import {useNavigate, NavigateFunction} from "react-router-dom";

import { routes } from "../../constants/routeConstants";
import {PasswordFormType, registerDataType} from "../../types/pages/authTypes";
import {TRUST_AUTHORIZED_USER, UPDATE_USER_DATA, UserContext} from "../../contexts/UserContext";
import {ErrorAlertType, RequestResponseType} from "../../types/othersTypes";
import {registerRequest} from "../../helpers/apiRequestsHelpers";
import {AlertStatusEnumType} from "../../types/enumsTypes";
import {setLocaleStorageItem} from "../../helpers/localStorageHelpers";
import {toastAlert} from "../../helpers/generalHelpers";

const useRegisterStepFivePageHook = (registerData: registerDataType): any => {
    let alertData: ErrorAlertType | null = null;

    const toast: CreateToastFnReturn = useToast();
    const navigate: NavigateFunction = useNavigate();
    const { setGlobalUserState } = useContext(UserContext);

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
        const email: string = registerData.emailAddress;
        const emailAddress: string = registerData.emailAddress;
        const phoneNumber: string = registerData.phoneCode + registerData.phoneNumber;
        const firstName: string = registerData.firstName;
        const lastName: string = registerData.lastName;
        const countryCode: string = registerData.countryCode;

        console.log({ emailAddress, firstName, lastName, phoneNumber, password, countryCode, email })

        mutate({ emailAddress, firstName, lastName, phoneNumber, password, countryCode, email });
    };

    return { handleRegister, isLoading, alertData };
};

export default useRegisterStepFivePageHook;