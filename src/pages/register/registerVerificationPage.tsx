import React, {ReactElement} from "react";
import {Box, Center, Heading, Stack, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {Form, Formik, FormikProps} from "formik";

import {verifyCodeInitialValues, verifyCodeSchema} from "./registerPagesData";
import {VerifyCodeFormType} from "../../types/pages/authTypes";
import SubmitButton from "../../components/form/SumitButton";
import {routes} from "../../constants/routeConstants";
import TextField from "../../components/form/TextField";
import useRegisterVerificationPageHook from "./useRegisterVerificationPageHook";

const RegisterVerificationPage = (): ReactElement => {
    const { handleCodePhone, phone, backState } = useRegisterVerificationPageHook();

    return (
        <>
            <Stack w={'full'}>
                <Heading fontSize={'2xl'} alignSelf='center'>Entrez le code à 6 chiffres</Heading>
                <Box alignSelf='center' mt={2}>
                    Nous l'avons envoyé au
                    <Text as="span" fontWeight='bold' ml={1}>
                        {phone}.
                    </Text>
                    <Center>
                        <Text as='u' fontWeight='bold'>
                            <Link to={routes.registerStepTwo.path} state={backState}>
                                Changer le numéro de téléphone
                            </Link>
                        </Text>
                    </Center>
                </Box>
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
                                <Link to="#" state={backState}>
                                    <Text as='u' fontWeight='bold'>
                                        Je n'ai pas reçus de code
                                    </Text>
                                </Link>
                            </Center>
                            <SubmitButton />
                        </Form>
                    )}
                </Formik>
            </Stack>
        </>
    );
};

export default RegisterVerificationPage;