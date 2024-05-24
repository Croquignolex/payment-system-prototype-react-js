import React, {FC, ReactElement} from "react";
import {Box, Center, Heading, Stack, Text} from "@chakra-ui/react";
import {FiArrowLeft} from "react-icons/fi";
import {Form, Formik, FormikProps} from "formik";

import {chooseNamesSchema} from "./registerPagesData";
import useRegisterStepTwoPageHook from "./useRegisterStepTwoPageHook";
import {ChooseNamesFormType} from "../../types/pages/authTypes";
import TextField from "../../components/form/TextField";
import SubmitButton from "../../components/form/SumitButton";

const RegisterStepTwoPage: FC<RegisterStepTwoProps> = ({moveStep, selectedFirstName, selectedLastName, updateNames}): ReactElement => {
    const { handleChooseNames } = useRegisterStepTwoPageHook(moveStep, updateNames);

    return (
        <>
            <Heading fontSize={'2xl'} alignSelf='center'>Faisons connaissance</Heading>
            <Box alignSelf='center' mt={2}>
                Il nous sera possible de vous demander de prouver votre identité
            </Box>
            <Stack my={6}>
                <Formik initialValues={{firstName: selectedFirstName, lastName: selectedLastName}} validationSchema={chooseNamesSchema} onSubmit={handleChooseNames} enableReinitialize>
                    {(props: FormikProps<ChooseNamesFormType>) => (
                        <Form>
                            <TextField
                                label="Entrez votre Prénom"
                                name="firstName"
                                isInvalid={!!props.errors.firstName && !!props.touched.firstName}
                                errorMessage={props.errors.firstName}
                            />
                            <TextField
                                label="Entrez votre Nom de famille"
                                name="lastName"
                                isInvalid={!!props.errors.lastName && !!props.touched.lastName}
                                errorMessage={props.errors.lastName}
                            />
                            <SubmitButton label="Continuer"></SubmitButton>
                        </Form>
                    )}
                </Formik>
            </Stack>
            <Center mt={50}>
                <FiArrowLeft />
                <Text as='u' fontWeight='bold' onClick={() => moveStep(false)} cursor='pointer'>
                    Retour
                </Text>
            </Center>
        </>
    );
};

interface RegisterStepTwoProps {
    updateNames: (a: string, b: string) => void,
    moveStep: (a: boolean) => void,
    selectedFirstName: string,
    selectedLastName: string,
}

export default RegisterStepTwoPage;