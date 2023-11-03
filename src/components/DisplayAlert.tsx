import React, { FC } from "react";
import { AlertIcon, Alert, Stack } from "@chakra-ui/react";

import {ErrorAlertType} from "../types/othersTypes";

const DisplayAlert: FC<DisplayAlertProps> = ({ data }): React.ReactElement | null => {
    if(data === null || !data?.show) {
        return null;
    }

    return (
        <Stack spacing={3}>
            <Alert status={data.status}>
                <AlertIcon />
                {data.message}
            </Alert>
        </Stack>
    );
};

interface DisplayAlertProps {
    data?: ErrorAlertType,
}

export default DisplayAlert;