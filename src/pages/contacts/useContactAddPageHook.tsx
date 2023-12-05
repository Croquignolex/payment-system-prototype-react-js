import {useContext} from "react";
import {useMutation} from "@tanstack/react-query";
import {CreateToastFnReturn, useToast} from "@chakra-ui/react";
import {NavigateFunction, useNavigate} from "react-router-dom";

import {contactAddRequest} from "../../helpers/apiRequestsHelpers";
import {UserContext} from "../../contexts/UserContext";
import {ErrorAlertType, RequestResponseType} from "../../types/othersTypes";
import {AlertStatusEnumType} from "../../types/enumsTypes";
import {ContactAddFormType} from "./contactPagesData";
import useJsonFileHook from "../../hooks/useJsonFileHook";
import {toastAlert} from "../../helpers/generalHelpers";
import {routes} from "../../constants/routeConstants";

const useContactAddPageHook = (): any => {
    let alertData: ErrorAlertType | null = null;

    const toast: CreateToastFnReturn = useToast();
    const navigate: NavigateFunction = useNavigate();
    const { globalUserState } = useContext(UserContext);
    const { countriesData, contactTypesData, currenciesData } = useJsonFileHook();

    const {isLoading, isError, isSuccess, error, variables, mutate}: RequestResponseType = useMutation(contactAddRequest);

    if(isError) {
        window.scrollTo({top: 0, behavior: 'smooth'});

        const message: string = error?.response?.data?.message || error?.message;

        alertData = { show: isError, status: AlertStatusEnumType.error, message };
    }

    if(isSuccess) {
        const { firstName } = variables;

        navigate(routes.contacts.path);

        toastAlert(toast, `Contact ${firstName} ajouté avec succès`);
    }

    const handleContactAdd = ({recipientType, currencyCode, firstName, lastName, emailAddress, countryCode, phoneNumber}: ContactAddFormType): void => {
        mutate({ recipientType, currencyCode, firstName, lastName, emailAddress, countryCode, phoneNumber, accountId: globalUserState.accountId });
    };

    return { handleContactAdd, contactTypesData, currenciesData, countriesData, isLoading, alertData };
};

export default useContactAddPageHook;