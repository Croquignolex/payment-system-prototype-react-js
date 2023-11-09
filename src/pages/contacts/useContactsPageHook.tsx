import {useContext, useState} from "react";
import { useQuery } from "@tanstack/react-query";

import {contactsRequest} from "../../helpers/apiRequestsHelpers";
import {UserContext} from "../../contexts/UserContext";
import {ErrorAlertType, RequestResponseType} from "../../types/othersTypes";
import {AlertStatusType} from "../../types/enumsTypes";
import {ContactModelType} from "../../types/modelsTypes";

const useContactsPageHook = (): any => {
    let alertData: ErrorAlertType | null = null;

    const { globalUserState } = useContext(UserContext);

    const [queryEnabled, setQueryEnabled] = useState<boolean>(true);
    const [contacts, setContacts] = useState<ContactModelType[]>([]);

    const { isLoading, isError, isSuccess, data, error }: RequestResponseType = useQuery({
        queryKey: ["contacts"],
        queryFn: () => contactsRequest({accountId: globalUserState.accountId}),
        enabled: queryEnabled
    });

    if(isError) {
        alertData = { show: isError, status: AlertStatusType.error, message: error?.message };
    }

    if(queryEnabled && isSuccess) {
        setQueryEnabled(false);

        let contacts: ContactModelType[] = [];

        data?.data.forEach((item: any) => {
            const contact: ContactModelType = {
                firstName: item?.firstName,
                lastName: item?.lastName,
                emailAddress: item?.emailAddress,
                phoneNumber: item?.phoneNumber,
                recipientType: item?.recipientType,
                currencyCode: item?.currencyCode,
                countryCode: item?.countryCode
            };

            contacts.push(contact);
        });

        setContacts(contacts);
    }

    return { isLoading, contacts, alertData };
};

export default useContactsPageHook;