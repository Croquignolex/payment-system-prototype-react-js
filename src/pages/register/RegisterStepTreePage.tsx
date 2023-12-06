import React, {FC, ReactElement} from "react";
import {Box, Center, Heading, Icon, Stack, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {FiArrowLeft, FiExternalLink} from "react-icons/fi";
import {Form, Formik, FormikProps} from "formik";

import {verifyPhoneSchema} from "./registerPagesData";
import {VerifyPhoneFormType} from "../../types/pages/authTypes";
import SubmitButton from "../../components/form/SumitButton";
import CustomPhoneField from "../../components/form/CustomPhoneField";
import useRegisterStepTreePageHook from "./useRegisterStepTreePageHook";

const RegisterStepTreePage: FC<RegisterStepTreeProps> = ({moveStep, selectedPhoneNumber, selectedPhoneCode, updatePhone}): ReactElement => {
    const { handleVerifyPhone } = useRegisterStepTreePageHook(moveStep, updatePhone);

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
                <Stack my={6}>
                    <Formik initialValues={{phoneCode: selectedPhoneCode, phoneNumber: selectedPhoneNumber}} validationSchema={verifyPhoneSchema} onSubmit={handleVerifyPhone} enableReinitialize>
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
                                <SubmitButton label="Envoyer le code de vérification" isDisabled={!props.dirty}></SubmitButton>
                            </Form>
                        )}
                    </Formik>
                </Stack>
                <Center mt={50}>
                    <FiArrowLeft />
                    <Text as='u' fontWeight='bold' onClick={() => moveStep(false)} cursor='pointer'>
                        Retour
                    </Text>
                </Center>
            </Stack>
        </>
    );
};

interface RegisterStepTreeProps {
    updatePhone: (a: string, b: string) => void,
    moveStep: (a: boolean) => void,
    selectedPhoneNumber: string,
    selectedPhoneCode: string,
}

export default RegisterStepTreePage;