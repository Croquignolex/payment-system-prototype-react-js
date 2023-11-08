import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Form, Formik, FormikProps } from "formik";
import {Box, Button, Heading, HStack, Stack, Text} from "@chakra-ui/react";

import TextField from "../../components/form/TextField";
import PasswordField from "../../components/form/PasswordField";
import { initialValues, loginSchema } from "./loginPageData";
import useLoginPageHook from "./useLoginPageHook";
import DisplayAlert from "../../components/DisplayAlert";
import { LoginFormType } from "../../types/pages/authTypes";
import { routes } from "../../constants/routeConstants";
import SubmitButton from "../../components/form/SumitButton";
import {appInfo} from "../../constants/envConstants";
import {FaFacebook, FaApple, FaGoogle} from "react-icons/fa";

const LoginPage = (): ReactElement => {
    const { handleLogin, isLoading, errorAlertData } = useLoginPageHook();

    return (
        <>
            <Stack w={'full'}>
                <Heading fontSize={'2xl'} alignSelf='center'>Bienvenue</Heading>
                <Box alignSelf='center' mt={2}>
                    Nouveau sur {appInfo.name}?
                    <Text as='u' fontWeight='bold' ml={1}>
                        <Link to={routes.register.path}>Incrivez-vous</Link>
                    </Text>
                </Box>
                <DisplayAlert data={errorAlertData} />
                <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={handleLogin}>
                    {(props: FormikProps<LoginFormType>) => (
                        <Form>
                            <TextField
                                label="Votre addresse email"
                                name="email"
                                isInvalid={!!props.errors.email && !!props.touched.email}
                                errorMessage={props.errors.email}
                            />
                            <PasswordField
                                label="Votre mot de passe"
                                name="password"
                                isInvalid={!!props.errors.password && !!props.touched.password}
                                errorMessage={props.errors.password}
                            />
                            <SubmitButton isLoading={isLoading} label="Connexion"></SubmitButton>
                        </Form>
                    )}
                </Formik>
                <Stack pt={6}>
                    <Text as='u' fontWeight='bold'>
                        <Link to="#">Vous avez des difficultés à vous connecter?</Link>
                    </Text>

                    <Text mt={2}>
                        Ou connectez-vous avec
                    </Text>

                    <HStack mt={2}>
                        <Stack w={'full'}>
                            <Button backgroundColor='white' color="red" borderWidth={1} rounded='full' leftIcon={<FaGoogle />}>
                                Google
                            </Button>
                        </Stack>
                        <Stack w={'full'}>
                            <Button backgroundColor='white' color="blue" borderWidth={1} rounded='full' leftIcon={<FaFacebook />}>
                                Facebook
                            </Button>
                        </Stack>
                        <Stack w={'full'}>
                            <Button backgroundColor='white' color="black" borderWidth={1} rounded='full' leftIcon={<FaApple />}>
                                Apple
                            </Button>
                        </Stack>
                    </HStack>
                </Stack>
            </Stack>
        </>
    );
};

export default LoginPage;