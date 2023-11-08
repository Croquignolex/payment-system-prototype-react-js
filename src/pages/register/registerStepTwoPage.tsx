import React, {ReactElement} from "react";
import {Box, Center, Heading, Icon, Stack, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {FiArrowLeft, FiExternalLink} from "react-icons/fi";
import {Form, Formik, FormikProps} from "formik";

import {verifyPhoneSchema} from "./registerPagesData";
import {VerifyPhoneFormType} from "../../types/pages/authTypes";
import SubmitButton from "../../components/form/SumitButton";
import {routes} from "../../constants/routeConstants";
import CustomPhoneField from "../../components/form/CustomPhoneField";
import useRegisterStepTwoPageHook from "./useRegisterStepTwoPageHook";

const RegisterStepTwoPage = (): ReactElement => {
    const { handleVerifyPhone, verifyPhoneInitialValues, backState } = useRegisterStepTwoPageHook();

    return (
        <>
            <Stack w={'full'}>
                <Heading fontSize={'2xl'} alignSelf='center'>Vérifiez votre numéro de téléphone avec un code</Heading>
                <Box alignSelf='center' mt={2}>
                    Ceci permet de garder votre compte sécurisé.
                    <Link to="#">
                        <Text as='u' fontWeight='bold' mx={1}>
                            En savoir plus
                        </Text>
                        <Icon as={FiExternalLink}></Icon>
                    </Link>
                </Box>
                <Formik initialValues={verifyPhoneInitialValues} validationSchema={verifyPhoneSchema} onSubmit={handleVerifyPhone} enableReinitialize>
                    {(props: FormikProps<VerifyPhoneFormType>) => (
                        <Form>
                            <CustomPhoneField
                                label="Numéro de téléphone"
                                code="phoneCode"
                                number="phoneNumber"
                                isInvalid={
                                    (!!props.errors.phoneCode && !!props.touched.phoneCode) ||
                                    (!!props.errors.phoneNumber && !!props.touched.phoneNumber)
                                }
                                errorMessage={
                                    props.errors.phoneCode ||
                                    props.errors.phoneNumber
                                }
                            />
                            <SubmitButton label="Envoyer le code de vérification"></SubmitButton>
                        </Form>
                    )}
                </Formik>
                <Center mt={50}>
                    <FiArrowLeft />
                    <Text as='u' fontWeight='bold'>
                        <Link to={routes.registerStepOne.path} state={backState}>
                            Retour
                        </Link>
                    </Text>
                </Center>
            </Stack>
        </>
    );
};

export default RegisterStepTwoPage;