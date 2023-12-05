import {useContext, useState} from "react";
import { useQuery } from "@tanstack/react-query";

import {accountDetailsRequest} from "../../helpers/apiRequestsHelpers";
import {UPDATE_USER_DATA, UserContext} from "../../contexts/UserContext";
import {ErrorAlertType, RequestResponseType} from "../../types/othersTypes";
import {AlertStatusEnumType} from "../../types/enumsTypes";
import {setLocaleStorageItem} from "../../helpers/localStorageHelpers";
import {AddressContext, UPDATE_ADDRESS_DATA} from "../../contexts/AddressContext";

const useProfilePageHook = (): any => {
    let alertData: ErrorAlertType | null = null;

    const { globalUserState, setGlobalUserState } = useContext(UserContext);
    const { globalAddressState, setGlobalAddressState } = useContext(AddressContext);

    const [queryEnabled, setQueryEnabled] = useState<boolean>(true);

    const { isLoading, isError, isSuccess, data, error }: RequestResponseType = useQuery({
        queryKey: ["account-details"],
        queryFn: () => accountDetailsRequest({accountId: globalUserState.accountId}),
        enabled: queryEnabled
    });

    if(isError) {
        alertData = { show: isError, status: AlertStatusEnumType.error, message: error?.message };
    }

    if(queryEnabled && isSuccess) {
        setQueryEnabled(false);

        const accountId: string = data?.data?.accountId;
        const firstName: string = data?.data?.firstName;
        const lastName: string = data?.data?.lastName;
        const email: string = data?.data?.emailAddress;
        const phoneNumber: string = data?.data?.phoneNumber;
        const street: string = data?.data?.address?.street;
        const city: string = data?.data?.address?.city;
        const zipCode: string = data?.data?.address?.zipCode;
        const country: string = data?.data?.address?.country;

        setLocaleStorageItem('user', { firstName, lastName, email, phoneNumber, accountId });

        setGlobalUserState({ type: UPDATE_USER_DATA, payload: { firstName, lastName, email, phoneNumber, accountId } });
        setGlobalAddressState({ type: UPDATE_ADDRESS_DATA, payload: { street, city, zipCode, country } });
    }

    return { isLoading, globalUserState, globalAddressState, alertData };
};

export default useProfilePageHook;