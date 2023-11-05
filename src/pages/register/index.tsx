import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Form, Formik, FormikProps } from "formik";
import {Heading, Stack, Text, HStack} from "@chakra-ui/react";

import TextField from "../../components/form/TextField";
import PasswordField from "../../components/form/PasswordField";
import { initialValues, registerSchema } from "./registerPageData";
import useRegisterPageHook from "./useRegisterPageHook";
import DisplayAlert from "../../components/DisplayAlert";
import { RegisterFormType } from "../../types/authTypes";
import { routes } from "../../constants/routeConstants";
import SubmitButton from "../../components/form/SumitButton";

const RegisterPage = (): ReactElement => {
    const { handleRegister, isLoading, errorAlertData } = useRegisterPageHook();

    return (
        <>
            <Stack spacing={4} w={'full'} maxW={'md'}>
                <Heading fontSize={'2xl'}>Créer votre compte</Heading>
                <DisplayAlert data={errorAlertData} />
                <Formik initialValues={initialValues} validationSchema={registerSchema} onSubmit={handleRegister}>
                    {(props: FormikProps<RegisterFormType>) => (
                        <Form>
                            <HStack spacing={4}>
                                <TextField
                                    label="Prénom"
                                    name="firstName"
                                    isInvalid={!!props.errors.firstName && !!props.touched.firstName}
                                    errorMessage={props.errors.firstName}
                                />
                                <TextField
                                    label="Nom"
                                    name="lastName"
                                    isInvalid={!!props.errors.lastName && !!props.touched.lastName}
                                    errorMessage={props.errors.lastName}
                                />
                            </HStack>
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
                            <PasswordField
                                label="Confirmation du mot de passe"
                                name="confirmPassword"
                                isInvalid={!!props.errors.confirmPassword && !!props.touched.confirmPassword}
                                errorMessage={props.errors.confirmPassword}
                            />
                            <SubmitButton isLoading={isLoading}></SubmitButton>
                        </Form>
                    )}
                </Formik>
                <Stack pt={6}>
                    <Text align={'center'}>
                        Vous avez déjà un compte? <Link to={routes.login.path} style={{ color: '#3182CE' }}>Cliquez ici</Link>
                    </Text>
                </Stack>
            </Stack>
        </>
    );
};

export default RegisterPage;