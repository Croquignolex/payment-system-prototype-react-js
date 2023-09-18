import React, {ReactElement, Suspense} from 'react';
import {Routes} from './routes';
import {Spinner, Box, AbsoluteCenter} from '@chakra-ui/react';

const SuspenseLoader = (): ReactElement => {
    return (
        <Box position='relative' h='100vh'>
            <AbsoluteCenter axis='both'>
                <Spinner color='blue.500' size='xl' />
            </AbsoluteCenter>
        </Box>
    );
}

const App = (): ReactElement => {
    return (
        <Suspense fallback={<SuspenseLoader />}>
            <Routes isAuthorized={true} />
        </Suspense>
    );
}

export default App;