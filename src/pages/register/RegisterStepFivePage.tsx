import React, {FC, ReactElement} from "react";
import {Box, Center, Heading, Stack, Text} from "@chakra-ui/react";
import {Form, Formik, FormikProps} from "formik";

import {verifyCodeInitialValues, verifyCodeSchema} from "./registerPagesData";
import {VerifyCodeFormType} from "../../types/pages/authTypes";
import SubmitButton from "../../components/form/SumitButton";
import TextField from "../../components/form/TextField";
import useRegisterStepFivePageHook from "./useRegisterStepFivePageHook";

const RegisterStepFourPage: FC<RegisterStepFourProps> = ({moveStep, selectedPhoneNumber, selectedPhoneCode}): ReactElement => {
    const { handleCodePhone } = useRegisterStepFivePageHook(moveStep);

    return (
        <>
            <Stack w={'full'}>
                <Heading fontSize={'2xl'} alignSelf='center'>Entrez le code à 6 chiffres</Heading>
                <Box alignSelf='center' mt={2}>
                    Nous l'avons envoyé au
                    <Text as="span" fontWeight='bold' ml={1}>
                        {selectedPhoneCode}{selectedPhoneNumber}.
                    </Text>
                    <Center>
                        <Text as='u' fontWeight='bold' onClick={() => moveStep(false)} cursor='pointer'>
                            Changer le numéro de téléphone
                        </Text>
                    </Center>
                </Box>
                <Stack my={6}>
                    <Formik initialValues={verifyCodeInitialValues} validationSchema={verifyCodeSchema} onSubmit={handleCodePhone}>
                        {(props: FormikProps<VerifyCodeFormType>) => (
                            <Form>
                                <TextField
                                    label="Votre code à 6 chiffres"
                                    name="code"
                                    isInvalid={!!props.errors.code && !!props.touched.code}
                                    errorMessage={props.errors.code}
                                />
                                <Center mt={10}>
                                    <Text as='u' fontWeight='bold' onClick={() => moveStep(false)} cursor='pointer'>
                                        Je n'ai pas reçus de code
                                    </Text>
                                </Center>
                                <SubmitButton />
                            </Form>
                        )}
                    </Formik>
                </Stack>
            </Stack>
        </>
    );
};

interface RegisterStepFourProps {
    moveStep: (a: boolean) => void,
    selectedPhoneNumber: string,
    selectedPhoneCode: string,
}

export default RegisterStepFourPage;