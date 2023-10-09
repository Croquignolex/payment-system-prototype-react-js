import React, { FC, ReactElement, Suspense, useContext, useReducer, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { AbsoluteCenter, Box, Spinner } from "@chakra-ui/react";

import { initialGlobalState, reducer, TRUST_UNAUTHORIZED_USER, UPDATE_USER_DATA, UserContext } from "./components/UserContext";
import { Routes } from "./routes";
import { getLocaleStorageItem } from "./helpers/localStorageHelpers";

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
    const { globalState, setGlobalState } = useContext(UserContext);

    useEffect((): void => {
        const userPersistedData = getLocaleStorageItem('user');

        if(userPersistedData) {
            const { lastName, firstName, email, accountId } = userPersistedData;

            setGlobalState({ type: UPDATE_USER_DATA, payload: { isAuthorized: true, lastName, firstName, email, accountId } });
        } else {
            setGlobalState({ type: TRUST_UNAUTHORIZED_USER });
        }
    }, []);

    if(!globalState.isTrustedData) {
        return <SuspenseLoader />;
    }

    return (
        <Routes isAuthorized={globalState.isAuthorized} />
    );
};

const App: FC = (): ReactElement => {
    const [globalState, setGlobalState] = useReducer(reducer, initialGlobalState);

    return (
        <UserContext.Provider value={{ globalState, setGlobalState }}>
            <Suspense fallback={<SuspenseLoader />}>
                <BrowserRouter>
                    <GlobalState />
                </BrowserRouter>
            </Suspense>
        </UserContext.Provider>
    );
};

export default App;