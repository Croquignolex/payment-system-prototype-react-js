import React, { FC } from "react";
import { AlertIcon, Alert, Stack } from "@chakra-ui/react";

import {ErrorAlertType} from "../types/othersTypes";

const DisplayAlert: FC<DisplayAlertProps> = ({ data }): React.ReactElement | null => {
    if(data === null || !data?.show) {
        return null;
    }

    return (
        <Alert status={data.status} rounded='lg' mx={1}>
            <AlertIcon />
            {data.message}
        </Alert>
    );
};

interface DisplayAlertProps {
    data?: ErrorAlertType,
}

export default DisplayAlert;