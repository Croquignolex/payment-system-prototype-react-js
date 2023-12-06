import React, { ReactElement } from "react";
import {
    Stack,
    Text,
    Stepper,
    Step,
    StepIndicator,
    StepStatus,
    StepIcon,
    StepNumber,
    StepDescription,
    StepSeparator,
    Container,
    Flex
} from "@chakra-ui/react";

import {registerStepsLabels} from "./registerPagesData";
import useRegisterPageHook from "./useRegisterPageHook";

const RegisterPage = (): ReactElement => {
    const { activeStep, StepComponent } = useRegisterPageHook();

    return (
        <>
            <Flex align={'center'} justify={'center'}>
                <Stepper size='sm' index={activeStep} w={'4xl'}>
                    {registerStepsLabels.map((label: string, index: number): ReactElement => (
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
            </Flex>
            <Container mt={4} maxW={'xl'}>
                <Flex align={'center'} justify={'center'}>
                    <Stack w={'full'}>
                        <StepComponent />
                    </Stack>
                </Flex>
            </Container>
        </>
    );
};

export default RegisterPage;