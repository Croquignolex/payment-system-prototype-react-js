import {useContext} from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {CreateToastFnReturn, useToast} from "@chakra-ui/react";
import {useMutation} from "@tanstack/react-query";

import {ErrorAlertType, RequestResponseType, transferDataType} from "../../types/othersTypes";
import {transferAddRequest} from "../../helpers/apiRequestsHelpers";
import {AccountEnumType, AlertStatusEnumType, TransferEnumType} from "../../types/enumsTypes";
import {AccountModelType, ContactModelType} from "../../types/modelsTypes";
import {UserContext} from "../../contexts/UserContext";
import {routes} from "../../constants/routeConstants";
import {toastAlert} from "../../helpers/generalHelpers";

const useTransferAddStepFourPageHook = (transferData: transferDataType): any => {
    let alertData: ErrorAlertType | null = null;

    const navigate: NavigateFunction = useNavigate();
    const toast: CreateToastFnReturn = useToast();
    const { globalUserState } = useContext(UserContext);

    const {isLoading, isError, isSuccess, error, variables, mutate}: RequestResponseType = useMutation(transferAddRequest);

    if(isError) {
        window.scrollTo({top: 0, behavior: 'smooth'});

        const message: string = error?.response?.data?.message || error?.message;

        alertData = { show: isError, status: AlertStatusEnumType.error, message };
    }

    if(isSuccess) {
        const { amount } = variables;

        navigate(routes.transfers.path);

        toastAlert(toast, `Transfer de ${amount} éffectué avec succès`);
    }

    const handleTransferAdd = (): void => {
        const account: AccountModelType | undefined = transferData.account;
        const contact: ContactModelType | undefined = transferData.contact;
        const amount: number = transferData.amount;

        if(
            (account?.payerType === AccountEnumType.mtnCM) &&
            (contact?.recipientType === AccountEnumType.mtnCM)
        ) {
            mutate({ payerId: account.payerId, recipientId: contact.recipientId, transferType: TransferEnumType.mtnToMtn, amount, accountId: globalUserState.accountId });
        }
        else toastAlert(toast, "Opération non permise pour le moment", AlertStatusEnumType.warning);
    };

    return {isLoading, alertData, handleTransferAdd};
};

export default useTransferAddStepFourPageHook;