import {useContext, useState} from "react";
import { useQuery } from "@tanstack/react-query";

import {accountsRequest} from "../../helpers/apiRequestsHelpers";
import {UserContext} from "../../contexts/UserContext";
import {ErrorAlertType, RequestResponseType} from "../../types/othersTypes";
import {AlertStatusType} from "../../types/enumsTypes";
import {AccountModelType} from "../../types/modelsTypes";

const useTransfersPageHook = (): any => {
    let alertData: ErrorAlertType | null = null;

    const { globalUserState } = useContext(UserContext);

    const [queryEnabled, setQueryEnabled] = useState<boolean>(true);
    const [accounts, setAccounts] = useState<AccountModelType[]>([]);

    const { isLoading, isError, isSuccess, data, error }: RequestResponseType = useQuery({
        queryKey: ["accounts"],
        queryFn: () => accountsRequest({accountId: globalUserState.accountId}),
        enabled: queryEnabled
    });

    if(isError) {
        alertData = { show: isError, status: AlertStatusType.error, message: error?.message };
    }

    if(queryEnabled && isSuccess) {
        setQueryEnabled(false);

        let accounts: AccountModelType[] = [];

        data?.data.forEach((item: any) => {
            const contact: AccountModelType = {
                firstName: item?.firstName,
                lastName: item?.lastName,
                emailAddress: item?.emailAddress,
                phoneNumber: item?.phoneNumber,
                payerType: item?.payerType,
                currencyCode: item?.currencyCode,
                countryCode: item?.countryCode
            };

            accounts.push(contact);
        });

        setAccounts(accounts);
    }

    return { isLoading, accounts, alertData };
};

export default useTransfersPageHook;