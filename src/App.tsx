import React, { FC, ReactElement, Suspense, useContext, useReducer, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { AbsoluteCenter, Box, Spinner } from "@chakra-ui/react";

import { Routes } from "./routes";
import { getLocaleStorageItem } from "./helpers/localStorageHelpers";
import {addressReducer, AddressContext, initialGlobalAddressState} from "./contexts/AddressContext";
import {
    initialGlobalUserState, TRUST_UNAUTHORIZED_USER, UPDATE_USER_DATA,
    UserContext, TRUST_AUTHORIZED_USER, userReducer
} from "./contexts/UserContext";

const SuspenseLoader: FC = (): ReactElement => {
    return (
        <Box position='relative' h='100vh'>
            <AbsoluteCenter axis='both'>
                <Spinner color='blue.500' size='xl' />
            </AbsoluteCenter>
        </Box>
    );
};

const GlobalState: FC = (): ReactElement => {
    const { globalUserState, setGlobalUserState } = useContext(UserContext);

    useEffect((): void => {
        const userPersistedData = getLocaleStorageItem('user');

        if(userPersistedData) {
            const { lastName, firstName, emailAddress, phoneNumber, birthData, accountId } = userPersistedData;

            setGlobalUserState({ type: TRUST_AUTHORIZED_USER });
            setGlobalUserState({ type: UPDATE_USER_DATA, payload: { lastName, firstName, emailAddress, birthData, phoneNumber, accountId } });
        } else {
            setGlobalUserState({ type: TRUST_UNAUTHORIZED_USER });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(!globalUserState.isTrustedData) {
        return <SuspenseLoader />;
    }

    return (
        <Routes isAuthorized={globalUserState.isAuthorized} />
    );
};

const App: FC = (): ReactElement => {
    const [globalUserState, setGlobalUserState] = useReducer(userReducer, initialGlobalUserState);
    const [globalAddressState, setGlobalAddressState] = useReducer(addressReducer, initialGlobalAddressState);

    return (
        <UserContext.Provider value={{ globalUserState, setGlobalUserState }}>
            <AddressContext.Provider value={{ globalAddressState, setGlobalAddressState }}>
                <Suspense fallback={<SuspenseLoader />}>
                    <BrowserRouter>
                        <GlobalState />
                    </BrowserRouter>
                </Suspense>
            </AddressContext.Provider>
        </UserContext.Provider>
    );
};

export default App;