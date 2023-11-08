import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Form, Formik, FormikProps } from "formik";
import {FaApple, FaFacebook, FaGoogle} from "react-icons/fa";
import {Heading, Stack, Text, HStack, Box, Button} from "@chakra-ui/react";

import TextField from "../../components/form/TextField";
import {checkEmailSchema} from "./registerPagesData";
import useRegisterPageHook from "./useRegisterPageHook";
import {CheckEmailFormType} from "../../types/pages/authTypes";
import { routes } from "../../constants/routeConstants";
import SubmitButton from "../../components/form/SumitButton";

const RegisterPage = (): ReactElement => {
    const { handleCheckEmail, checkEmailInitialValues } = useRegisterPageHook();

    return (
        <>
            <Stack w={'full'}>
                <Heading fontSize={'2xl'} alignSelf='center'>Créez votre compte</Heading>
                <Box alignSelf='center' mt={2}>
                    Vous avez déjà un compte?
                    <Text as='u' fontWeight='bold' ml={1}>
                        <Link to={routes.login.path}>Connectez-vous</Link>
                    </Text>
                </Box>
                {/*<DisplayAlert data={errorAlertData} />*/}
                <Formik initialValues={checkEmailInitialValues} validationSchema={checkEmailSchema} onSubmit={handleCheckEmail} enableReinitialize>
                    {(props: FormikProps<CheckEmailFormType>) => (
                        <Form>
                            <TextField
                                label="Tout d'abord, entrez votre addresse email"
                                name="email"
                                isInvalid={!!props.errors.email && !!props.touched.email}
                                errorMessage={props.errors.email}
                            />
                            <SubmitButton label="Suivant"></SubmitButton>
                        </Form>
                    )}
                </Formik>
                <Stack pt={6}>
                    <Text mt={2}>
                        Ou inscrivez-vous avec
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

                    <Box alignSelf='center' mt={2}>
                        En vous inscrivant, vous acceptez nos
                    </Box>

                    <Box alignSelf='center'>
                        <Text as='u' fontWeight='bold' mr={1}>
                            <Link to="#">Conditions d'utilisations</Link>
                        </Text>
                        et
                        <Text as='u' fontWeight='bold' ml={1}>
                            <Link to="#">Politiques de confidentialité</Link>
                        </Text>
                    </Box>
                </Stack>
            </Stack>
        </>
    );
};

export default RegisterPage;