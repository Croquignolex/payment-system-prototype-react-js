import {useContext} from "react";
import {useMutation} from "@tanstack/react-query";
import {CreateToastFnReturn, useToast} from "@chakra-ui/react";
import {NavigateFunction, useNavigate} from "react-router-dom";

import {accountAddRequest} from "../../helpers/apiRequestsHelpers";
import {UserContext} from "../../contexts/UserContext";
import {ErrorAlertType, RequestResponseType} from "../../types/othersTypes";
import {AlertStatusEnumType} from "../../types/enumsTypes";
import useJsonFileHook from "../../hooks/useJsonFileHook";
import {toastAlert} from "../../helpers/generalHelpers";
import {routes} from "../../constants/routeConstants";
import {AccountAddFormType} from "./accountPagesData";

const useAccountAddPageHook = (): any => {
    let alertData: ErrorAlertType | null = null;

    const toast: CreateToastFnReturn = useToast();
    const navigate: NavigateFunction = useNavigate();
    const { globalUserState } = useContext(UserContext);
    const { countriesData, accountTypesData, currenciesData } = useJsonFileHook();

    const {isLoading, isError, isSuccess, error, variables, mutate}: RequestResponseType = useMutation(accountAddRequest);

    if(isError) {
        window.scrollTo({top: 0, behavior: 'smooth'});

        const message: string = error?.response?.data?.message || error?.message;

        alertData = { show: isError, status: AlertStatusEnumType.error, message };
    }

    if(isSuccess) {
        const { firstName } = variables;

        navigate(routes.accounts.path);

        toastAlert(toast, `Compte ${firstName} ajouté avec succès`);
    }

    const handleAccountAdd = ({payerType, currencyCode, firstName, lastName, emailAddress, countryCode, phoneNumber}: AccountAddFormType): void => {
        mutate({ payerType, currencyCode, firstName, lastName, emailAddress, countryCode, phoneNumber, accountId: globalUserState.accountId });
    };

    return { handleAccountAdd, accountTypesData, currenciesData, countriesData, isLoading, alertData };
};

export default useAccountAddPageHook;