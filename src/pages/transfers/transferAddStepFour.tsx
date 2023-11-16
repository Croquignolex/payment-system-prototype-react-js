import React, {FC, ReactElement} from "react";
import {FiArrowLeft} from "react-icons/fi";
import {Center, Text} from "@chakra-ui/react";

import useTransferAddStepFourHook from "./useTransferAddStepFourHook";

const TransferAddStepFour: FC<TransferAddStepFourProps> = ({moveStep}): ReactElement => {
    const {} = useTransferAddStepFourHook();

    return (
        <>

            <Center mt={50}>
                <FiArrowLeft />
                <Text as='u' fontWeight='bold' onClick={() => moveStep(false)} cursor='pointer'>
                    Retour
                </Text>
            </Center>
        </>
    );
};

interface TransferAddStepFourProps {
    moveStep: (a: boolean) => void,
}

export default TransferAddStepFour;