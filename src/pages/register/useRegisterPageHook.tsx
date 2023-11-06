import {useEffect, useState} from "react";
import { useMutation } from "@tanstack/react-query";
import {useNavigate, NavigateFunction, useLocation} from "react-router-dom";

import { routes } from "../../constants/routeConstants";
import {checkEmailRequest} from "../../helpers/apiRequestsHelpers";
import {CheckEmailFormType} from "../../types/authTypes";
import {ErrorAlertType, RequestResponseType} from "../../types/othersTypes";
import {AlertStatusType} from "../../types/enumsTypes";

const useRegisterPageHook = (): any => {
    const navigate: NavigateFunction = useNavigate();
    const { state: locationState } = useLocation();

    const [checkEmailInitialValues, setCheckEmailInitialValues] = useState<CheckEmailFormType>({email: ''} );

    useEffect((): void => {
        if(locationState?.trustedData) {
            setCheckEmailInitialValues({email: locationState?.email});
        }
    }, []);

    // const { isLoading, isError, isSuccess, data, error, variables, mutate }: RequestResponseType = useMutation(checkEmailRequest);
    const { isLoading, isError, isSuccess, error, variables, mutate }: RequestResponseType = useMutation(checkEmailRequest);

    const errorMessage: string = error?.response?.data?.message || error?.message;
    const errorAlertData: ErrorAlertType = { show: isError, status: AlertStatusType.error, message: errorMessage };

    if(isSuccess || isError) {
        // const accountId: string = data?.data?.accountId;
        // const { lastName, firstName, email } = variables;

        const { email } = variables;

        // setLocaleStorageItem('user', { lastName, firstName, email, accountId });
        // setGlobalState({type: UPDATE_USER_DATA, payload: { isAuthorized: true, lastName, firstName, email, accountId }});

        navigate(routes.registerStepOne.path, {state: { trustedData: true, email }});
    }

    const handleCheckEmail = ({ email }: CheckEmailFormType): void => mutate({ email });

    return { handleCheckEmail, checkEmailInitialValues, isLoading, errorAlertData };
};

export default useRegisterPageHook;