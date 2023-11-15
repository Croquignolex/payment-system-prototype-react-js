import React, {FC, ReactElement, useEffect} from "react";
import {useLocation} from "react-router-dom";
import {
    Box, Container, Flex, Spacer, Step, StepDescription, StepIcon, StepIndicator,
    StepNumber, Stepper, StepSeparator, StepStatus, Text, useSteps
} from "@chakra-ui/react";

import {appInfo} from "../../constants/envConstants";
import {routes} from "../../constants/routeConstants";

const AnonymousLayoutHeader: FC = (): ReactElement => {
    const { pathname: currentPath } = useLocation();
    const { activeStep, setActiveStep } = useSteps();

    const showStepIndicator: boolean = (
        currentPath === routes.registerStepOne.path ||
        currentPath === routes.registerStepTwo.path ||
        currentPath === routes.registerStepTree.path ||
        currentPath === routes.registerVerification.path
    );

    useEffect((): void => {
        if(showStepIndicator) {
            switch (currentPath) {
                case routes.registerStepOne.path:
                    setActiveStep(1);
                    break;
                case routes.registerStepTwo.path:
                case routes.registerVerification.path:
                    setActiveStep(2);
                    break;
                case routes.registerStepTree.path:
                    setActiveStep(3);
                    break;
                default:
                    setActiveStep(0);
            }
        }
    }, [currentPath]);

    return (
        <Flex h={20} alignItems="center" borderBottomWidth={1}>
            <Container maxW={'6xl'}>
                <Flex>
                    <Box>
                        <Text fontSize="4xl" fontWeight="bold">
                            {appInfo.name}
                        </Text>
                    </Box>
                    {showStepIndicator && (
                        <>
                            <Spacer />
                            <Box w={{sm: '60%', base: '100%'}} mt={4}>
                                <Stepper size='sm' index={activeStep}>
                                    {stepsLabels.map((label: string, index: number): ReactElement => (
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
                            </Box>
                            <Spacer />
                        </>
                    )}
                </Flex>
            </Container>
        </Flex>
    );
};

const stepsLabels: string[] = ['Email', 'Pays', 'Vérification', 'Mot de passe'];

export default AnonymousLayoutHeader;