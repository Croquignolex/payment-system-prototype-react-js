import React, {ReactElement, useEffect} from "react";
import {Box, Center, Heading, Stack, Text} from "@chakra-ui/react";
import {Link, NavigateFunction, useLocation, useNavigate} from "react-router-dom";
import {Form, Formik, FormikProps} from "formik";

import {verifyCodeInitialValues, verifyCodeSchema} from "./registerPageData";
import {VerifyCodeFormType} from "../../types/authTypes";
import SubmitButton from "../../components/form/SumitButton";
import {routes} from "../../constants/routeConstants";
import TextField from "../../components/form/TextField";

const RegisterVerificationPage = (): ReactElement => {
    const navigate: NavigateFunction = useNavigate();
    const { state: locationState } = useLocation();

    useEffect((): void => {
        if(!locationState?.trustedData) {
            navigate(routes.register.path);
        }
    }, []);

    const handleCodePhone = ({ code }: VerifyCodeFormType): void => {
        const state: any = {
            trustedData: true,
            email: locationState?.email,
            country: locationState?.country,
            phoneNumber: locationState?.phoneNumber,
            phoneCode: locationState?.phoneCode,
        };
        navigate(routes.registerStepTree.path, {state});
    };

    const backState: any = {trustedData: true, email: locationState?.email, country: locationState?.country, phoneCode: locationState?.phoneCode, phoneNumber: locationState?.phoneNumber};

    return (
        <>
            <Stack w={'full'}>
                <Heading fontSize={'2xl'} alignSelf='center'>Entrez le code à 6 chiffres</Heading>
                <Box alignSelf='center' mt={2}>
                    Nous l'avons envoyé au
                    <Text as="span" fontWeight='bold' ml={1}>
                        {locationState?.phoneCode}{locationState?.phoneNumber}.
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
                                <Text as='u' fontWeight='bold'>
                                    Je n'ai pas reçus de code
                                </Text>
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