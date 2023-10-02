import React, { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
import { Form, Formik, FormikProps } from "formik";
import { Button, Checkbox, Heading, Stack, Text } from "@chakra-ui/react";

import TextField from "../../components/form/TextField";
import PasswordField from "../../components/form/PasswordField";
import { initialValues, loginSchema } from "./loginPageData";
import useLoginPageHook from "./useLoginPageHook";
import DisplayAlert from "../../components/DisplayAlert";
import { AlertStatusType } from "../../types/enumsTypes";
import { LoginFormType } from "../../types/authTypes";
import { routes } from "../../constants/routeConstants";

const LoginPage = (): ReactElement => {
    const { handleLogin, isLoading, isError, errorMessage } = useLoginPageHook();
    const { state: routeState } = useLocation();

    return (
        <>
            <Stack spacing={4} w={'full'} maxW={'md'}>
                <Heading fontSize={'2xl'}>Connectez-vous à votre compte</Heading>
                {isError && <DisplayAlert status={AlertStatusType.error} message={errorMessage} />}
                {(routeState?.registerMessage) && <DisplayAlert status={AlertStatusType.success} message={routeState?.registerMessage || ""} />}
                <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={handleLogin}>
                    {(props: FormikProps<LoginFormType>) => (
                        <Form>
                            <TextField
                                label="Email"
                                name="email"
                                isInvalid={!!props.errors.email && !!props.touched.email}
                                errorMessage={props.errors.email}
                            />
                            <PasswordField
                                label="Mot de passe"
                                name="password"
                                isInvalid={!!props.errors.password && !!props.touched.password}
                                errorMessage={props.errors.password}
                            />
                            <Stack spacing={6}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}
                                    mt={4}
                                >
                                    <Checkbox defaultChecked>Se souvenir de moi</Checkbox>
                                    <Text color={'blue.500'}>Mot de passe oublié?</Text>
                                </Stack>
                                <Button colorScheme={'blue'} variant={'solid'} isLoading={isLoading} type='submit'>
                                    Connexion
                                </Button>
                            </Stack>
                        </Form>
                    )}
                </Formik>
                <Stack pt={6}>
                    <Text align={'center'}>
                        Vous n'avez pas de compte? <Link to={routes.register.path} style={{ color: '#3182CE' }}>Cliquez ici</Link>
                    </Text>
                </Stack>
            </Stack>
        </>
    );
};

export default LoginPage;