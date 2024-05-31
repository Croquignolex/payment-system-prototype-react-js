import {useContext, useState} from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {CreateToastFnReturn, useToast} from "@chakra-ui/react";
import {useMutation, useQuery, UseQueryResult} from "@tanstack/react-query";

import {ErrorAlertType, RequestResponseType, transferDataType} from "../../types/othersTypes";
import {transferAddRequest, transferCheck} from "../../helpers/apiRequestsHelpers";
import {AccountEnumType, AlertStatusEnumType, TransferEnumType} from "../../types/enumsTypes";
import {AccountModelType, ContactModelType} from "../../types/modelsTypes";
import {UserContext} from "../../contexts/UserContext";
import {routes} from "../../constants/routeConstants";
import {toastAlert} from "../../helpers/generalHelpers";
import {AxiosError, AxiosResponse} from "axios";

const useTransferAddStepFourPageHook = (transferData: transferDataType): any => {
    let alertData: ErrorAlertType | null = null;

    const navigate: NavigateFunction = useNavigate();
    const toast: CreateToastFnReturn = useToast();
    const { globalUserState } = useContext(UserContext);

    const [queryEnabled, setQueryEnabled] = useState<boolean>(false);
    const [sent, setSend] = useState<boolean>(false);

    const { refetch, isFetching: isCheckLoading, isError: isCheckError, isSuccess: isCheckSuccess, data: checkData, error: checkError }: UseQueryResult<AxiosResponse, AxiosError> = useQuery({
        queryKey: ["check-transfer"],
        queryFn: () => transferCheck(transferData.account?.payerId),
        enabled: queryEnabled
    });

    if(!isCheckLoading && queryEnabled && isCheckError) {
        setQueryEnabled(false);
        alertData = { show: isCheckError, status: AlertStatusEnumType.error, message: checkError?.message };
    }

    if(!isCheckLoading && queryEnabled && isCheckSuccess) {
        switch (checkData.data?.status) {
            case "PENDING":
                refetch().then();
                break;
            case "FAILED":
                const message: string = "Transfer error";
                alertData = { show: true, status: AlertStatusEnumType.error, message };
                break;
            case "SUCCESS":
                navigate(routes.transfers.path);
                toastAlert(toast, `Transfer de ${transferData.amount} éffectué avec succès`);
            break;
        }
    }

    const {isLoading, isError, isSuccess, error, data, mutate}: RequestResponseType = useMutation(transferAddRequest);

    if(isError) {
        window.scrollTo({top: 0, behavior: 'smooth'});

        const message: string = error?.response?.data?.message || error?.message;

        alertData = { show: isError, status: AlertStatusEnumType.error, message };
    }

    if(!sent && isSuccess) {
        const message: string = data.data?.message;

        if(message) alertData = { show: true, status: AlertStatusEnumType.error, message };
        else {
            setSend(true);
            setQueryEnabled(true);
        }
    }

    const handleTransferAdd = (): void => {
        alertData = null;
        setSend(false);
        setQueryEnabled(false);

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

    return {isLoading: isLoading || isCheckLoading, alertData, handleTransferAdd};
};

export default useTransferAddStepFourPageHook;