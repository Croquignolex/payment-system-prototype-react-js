import React, {ReactElement} from "react";
import {Stack, Stepper, Step, StepIndicator, StepStatus, StepIcon, StepNumber, StepDescription, Text, StepSeparator} from "@chakra-ui/react";

import {transferStepsLabels} from "./transfertPagesData";
import useTransferAddPageHook from "./useTransferAddPageHook";

const TransferAddPage = (): ReactElement => {
    const { activeStep, StepComponent } = useTransferAddPageHook();

    return (
        <Stack>
            <Stepper size='sm' index={activeStep}>
                {transferStepsLabels.map((label: string, index: number): ReactElement => (
                    <Step key={index}>
                        <StepIndicator>
                            <StepStatus
                                complete={<StepIcon />}
                                incomplete={<StepNumber />}
                                active={<StepNumber />}
                            />
                        </StepIndicator>
                        <StepDescription>
                            <Text fontWeight={(activeStep === index) ? "bold" : "normal"}>{label}</Text>
                        </StepDescription>
                        <StepSeparator />
                    </Step>
                ))}
            </Stepper>
             <Stack mt={4}>
                <StepComponent />
             </Stack>
        </Stack>
    );
};

export default TransferAddPage;