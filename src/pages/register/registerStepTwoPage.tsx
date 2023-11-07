import React, {ReactElement, useEffect, useState} from "react";
import {Box, Center, Heading, Icon, Stack, Text} from "@chakra-ui/react";
import {Link, NavigateFunction, useLocation, useNavigate} from "react-router-dom";
import {FiArrowLeft, FiExternalLink} from "react-icons/fi";
import {Form, Formik, FormikProps} from "formik";

import {verifyPhoneSchema} from "./registerPageData";
import {VerifyPhoneFormType} from "../../types/authTypes";
import SubmitButton from "../../components/form/SumitButton";
import {routes} from "../../constants/routeConstants";
import CustomPhoneField from "../../components/form/CustomPhoneField";

const RegisterStepTwoPage = (): ReactElement => {
    const navigate: NavigateFunction = useNavigate();
    const { state: locationState } = useLocation();

    const [verifyPhoneInitialValues, setVerifyPhoneInitialValues] = useState<VerifyPhoneFormType>({phoneNumber: '', phoneCode: ''} );

    useEffect((): void => {
        if(!locationState?.trustedData) {
            navigate(routes.register.path);
        }

        if(locationState?.trustedData) {
            setVerifyPhoneInitialValues({phoneNumber: locationState?.phoneNumber, phoneCode: locationState?.phoneCode});
        }
    }, []);

    const handleVerifyPhone = ({ phoneCode, phoneNumber }: VerifyPhoneFormType): void => {
        const state: any = {
            trustedData: true,
            email: locationState?.email,
            country: locationState?.country,
            phoneCode,
            phoneNumber
        };
        navigate(routes.registerVerification.path, {state});
    };

    const backState: any = {trustedData: true, email: locationState?.email, country: locationState?.country};

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