import React, {FC, ReactElement, Suspense, useContext, useReducer, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {AbsoluteCenter, Box, Spinner} from "@chakra-ui/react";

import {AUTHORIZE_USER, initialGlobalState, reducer, UserContext} from "./components/UserContext";
import {Routes} from "./routes";

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
    const {globalState, setGlobalState} = useContext(UserContext);

    useEffect((): void => {
        setGlobalState({type: AUTHORIZE_USER});
    }, []);

    if(!globalState.isTrusted) {
        return <SuspenseLoader />;
    }

    return (
        <Routes isAuthorized={globalState.isAuthorized} />
    );
};


const App = (): ReactElement => {
    const [globalState, setGlobalState] = useReducer(reducer, initialGlobalState);

    return (
        <UserContext.Provider value={{globalState, setGlobalState}}>
            <Suspense fallback={<SuspenseLoader />}>
                <BrowserRouter>
                    <GlobalState />
                </BrowserRouter>
            </Suspense>
        </UserContext.Provider>
    );
};

export default App;