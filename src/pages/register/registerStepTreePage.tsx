import React, {ReactElement} from "react";
import {Center, Heading, Stack, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {FiArrowLeft} from "react-icons/fi";
import {Form, Formik, FormikProps} from "formik";

import {passwordInitialValues, passwordSchema} from "./registerPagesData";
import {PasswordFormType} from "../../types/pages/authTypes";
import SubmitButton from "../../components/form/SumitButton";
import {routes} from "../../constants/routeConstants";
import PasswordField from "../../components/form/PasswordField";
import DisplayAlert from "../../components/DisplayAlert";
import useRegisterStepTreePageHook from "./useRegisterStepTreePageHook";

const RegisterStepTreePage = (): ReactElement => {
    const { handleRegister, isLoading, alertData, backState } = useRegisterStepTreePageHook();

    return (
        <>
            <Stack w={'full'}>
                <Heading fontSize={'2xl'} alignSelf='center'>Créez votre mot de passe</Heading>
                <DisplayAlert data={alertData} />
                <Stack my={6}>
                    <Formik initialValues={passwordInitialValues} validationSchema={passwordSchema} onSubmit={handleRegister} enableReinitialize>
                        {(props: FormikProps<PasswordFormType>) => (
                            <Form>
                                <PasswordField
                                    label="Votre mot de passe"
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
                                <Text align='center' mt={10}>
                                    Le mot de passe doit contenir au moins une
                                    <strong> majuscule</strong>, une<strong> minuscule</strong>, un
                                    <strong> chiffre</strong> et un<strong> caratère spécial</strong>
                                </Text>
                                <SubmitButton isLoading={isLoading} label="Continuer"></SubmitButton>
                            </Form>
                        )}
                    </Formik>
                </Stack>
                <Center mt={50}>
                    <FiArrowLeft />
                    <Text as='u' fontWeight='bold'>
                        <Link to={routes.registerStepTwo.path} state={backState}>
                            Retour
                        </Link>
                    </Text>
                </Center>
            </Stack>
        </>
    );
};

export default RegisterStepTreePage;