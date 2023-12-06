import React, {FC, ReactElement} from "react";
import {Center, Heading, Stack, Text} from "@chakra-ui/react";
import {FiArrowLeft} from "react-icons/fi";
import {Form, Formik, FormikProps} from "formik";

import {passwordInitialValues, passwordSchema} from "./registerPagesData";
import {PasswordFormType, registerDataType} from "../../types/pages/authTypes";
import SubmitButton from "../../components/form/SumitButton";
import PasswordField from "../../components/form/PasswordField";
import DisplayAlert from "../../components/DisplayAlert";
import useRegisterStepFivePageHook from "./useRegisterStepFivePageHook";

const RegisterStepFivePage: FC<RegisterStepFourProps> = ({moveStep, registerData}): ReactElement => {
    const { handleRegister, isLoading, alertData } = useRegisterStepFivePageHook(registerData);

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
                    <Text as='u' fontWeight='bold' onClick={(): void => moveStep(false, 2)} cursor='pointer'>
                        Retour
                    </Text>
                </Center>
            </Stack>
        </>
    );
};

interface RegisterStepFourProps {
    moveStep: (a: boolean, b: number) => void,
    registerData: registerDataType,
}

export default RegisterStepFivePage;