import React, { ReactElement, FC } from "react";
import { AlertIcon, Alert, Stack } from "@chakra-ui/react";

import { AlertStatusType } from "../types/enumsTypes";

const DisplayAlert: FC<DisplayAlertProps> = ({ status, message }): ReactElement => {
    return (
        <Stack spacing={3}>
            <Alert status={status}>
                <AlertIcon />
                {message}
            </Alert>
        </Stack>
    );
};

interface DisplayAlertProps {
    status: AlertStatusType,
    message: string,
}

export default DisplayAlert;