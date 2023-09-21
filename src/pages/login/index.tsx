import React, {ReactElement} from 'react';
import {Link} from "react-router-dom";
import {Form, Formik, FormikProps} from 'formik';
import {Button, Checkbox, Heading, Stack, Text, Alert, AlertIcon} from "@chakra-ui/react";

import TextField from "../../components/form/TextField";
import PasswordField from "../../components/form/PasswordField";
import {initialValues, LoginFormType, loginSchema, registerUrl} from "./loginPageData";
import useLoginPageHook from "./useLoginPageHook";

const LoginPage = (): ReactElement => {
    const {handleLogin} = useLoginPageHook();

    return (
        <>
            <Stack spacing={4} w={'full'} maxW={'md'}>
                <Heading fontSize={'2xl'}>Connectez-vous à votre compte</Heading>
                <Stack spacing={3}>
                    <Alert status='error'>
                        <AlertIcon />
                        There was an error processing your request
                    </Alert>
                </Stack>
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
                                    justify={'space-between'}>
                                    <Checkbox defaultChecked>Se souvenir de moi</Checkbox>
                                    <Text color={'blue.500'}>Mot de passe oublié?</Text>
                                </Stack>
                                <Button colorScheme={'blue'} variant={'solid'} isLoading={props.isSubmitting} type='submit'>
                                    Connexion
                                </Button>
                            </Stack>
                        </Form>
                    )}
                </Formik>
                <Stack pt={6}>
                    <Text align={'center'}>
                        Vous n'avez pas de compte? <Link to={registerUrl} style={{color: '#3182CE'}}>Cliquez ici</Link>
                    </Text>
                </Stack>
            </Stack>
        </>
    );
};

export default LoginPage;