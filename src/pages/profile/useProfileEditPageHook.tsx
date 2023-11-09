import {useContext, useEffect, useState} from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {useMutation, useQuery} from "@tanstack/react-query";

import {accountAddressUpdateRequest, accountDetailsRequest} from "../../helpers/apiRequestsHelpers";
import {UPDATE_USER_DATA, UserContext} from "../../contexts/UserContext";
import {ErrorAlertType, RequestResponseType} from "../../types/othersTypes";
import {AlertStatusType} from "../../types/enumsTypes";
import {ProfileFormType} from "./profilePagesData";
import {AddressContext, UPDATE_ADDRESS_DATA} from "../../contexts/AddressContext";
import {setLocaleStorageItem} from "../../helpers/localStorageHelpers";
import {toastAlert} from "../../helpers/generalHelpers";
import {routes} from "../../constants/routeConstants";
import {CreateToastFnReturn, useToast} from "@chakra-ui/react";

const useProfileEditPageHook = (): any => {
    let alertData: ErrorAlertType | null = null;

    const toast: CreateToastFnReturn = useToast();
    const navigate: NavigateFunction = useNavigate();
    const { globalUserState, setGlobalUserState } = useContext(UserContext);
    const { globalAddressState, setGlobalAddressState } = useContext(AddressContext);

    const [mutationEnabled, setMutationEnabled] = useState<boolean>(false);
    const [queryEnabled, setQueryEnabled] = useState<boolean>(true);
    const [profileInitialValues, setProfileInitialValues] = useState<ProfileFormType>({
        firstName: '', lastName: '', phoneNumber: '', email: '',
        street: '', zipCode: '', city: '', country: ''
    });

    useEffect((): void => {
        setProfileInitialValues({
            firstName: globalUserState.firstName,
            lastName: globalUserState.lastName,
            phoneNumber: globalUserState.phoneNumber,
            email: globalUserState.email,
            street: globalAddressState.street,
            zipCode: globalAddressState.zipCode,
            city: globalAddressState.city,
            country: globalAddressState.country,
        });
    }, []);

    const {
        isLoading: isQueryLoading, isError: isQueryError,
        isSuccess: isQuerySuccess, data: queryData, error: queryError
    }: RequestResponseType = useQuery({
        queryKey: ["account-details-2"],
        queryFn: () => accountDetailsRequest({accountId: globalUserState.accountId}),
        enabled: queryEnabled
    });

    const {
        isLoading: isMutationLoading, isError: isMutationError, isSuccess: isMutationSuccess,
        error: mutationError, variables: mutationVariables, mutate
    }: RequestResponseType = useMutation(accountAddressUpdateRequest);

    if(isMutationError || isQueryError) {
        window.scrollTo({top: 0, behavior: 'smooth'});

        const show: boolean = isMutationError || isQueryError;
        const message: string = mutationError?.message || queryError?.message;

        alertData = { show, status: AlertStatusType.error, message };
    }

    if(queryEnabled && isQuerySuccess) {
        setQueryEnabled(false);

        setProfileInitialValues({
            firstName: queryData?.data?.firstName,
            lastName: queryData?.data?.lastName,
            phoneNumber: queryData?.data?.phoneNumber,
            email: queryData?.data?.emailAddress,
            street: queryData?.data?.address?.street,
            zipCode: queryData?.data?.address?.zipCode,
            city: queryData?.data?.address?.city,
            country: queryData?.data?.address?.country,
        });
    }

    if(isMutationSuccess) {
        toastAlert(toast, "Profil mis à jour avec succès");

        navigate(routes.profile.path);
    }

    if(mutationEnabled && isMutationSuccess) {
        setMutationEnabled(false);
        window.scrollTo({top: 0, behavior: 'smooth'});

        const accountId = globalUserState.accountId;
        const { lastName, firstName, email, phoneNumber, street, zipCode, city, country } = mutationVariables;

        setLocaleStorageItem('user', { lastName, firstName, email, phoneNumber, accountId });

        setGlobalUserState({ type: UPDATE_USER_DATA, payload: { firstName, lastName, email, phoneNumber, accountId } });
        setGlobalAddressState({ type: UPDATE_ADDRESS_DATA, payload: { street, city, zipCode, country } });
    }

    const handleProfileUpdate = ({street, zipCode, city, country}: ProfileFormType): void => {
        setMutationEnabled(true);
        mutate({ street, zipCode, city, country, accountId: globalUserState.accountId });
    };

    return { profileInitialValues, handleProfileUpdate, isQueryLoading, isMutationLoading, alertData };
};

export default useProfileEditPageHook;