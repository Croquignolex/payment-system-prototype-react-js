import React, {ReactElement, FC} from 'react';
import {AlertIcon, Alert, Stack} from "@chakra-ui/react";

import {AlertStatusType} from "../types/AlertStatusType";

const DisplayAlert: FC<{status: AlertStatusType, message: string}> = ({status, message}): ReactElement => {
    return (
        <Stack spacing={3}>
            <Alert status={status}>
                <AlertIcon />
                {message}
            </Alert>
        </Stack>
    );
};

export default DisplayAlert;