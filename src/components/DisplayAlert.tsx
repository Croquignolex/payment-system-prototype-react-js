import React, { FC, ReactElement } from "react";
import { AlertIcon, Alert, Stack } from "@chakra-ui/react";

import {ErrorAlertType} from "../types/othersTypes";

const DisplayAlert: FC<DisplayAlertProps> = ({ data }): ReactElement | null => {
    if(data === null || data === undefined || !data?.show) {
        return null;
    }

    return (
        <Alert status={data.status} rounded='xl' mx={1}>
            <AlertIcon />
            {data.message}
        </Alert>
    );
};

interface DisplayAlertProps {
    data?: ErrorAlertType,
}

export default DisplayAlert;