import React, {ReactElement} from "react";
import {Box, Center, Heading, Stack, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {FiArrowLeft} from "react-icons/fi";
import {Form, Formik, FormikProps} from "formik";

import {chooseCountrySchema} from "./registerPagesData";
import {ChooseCountryFormType} from "../../types/pages/authTypes";
import SubmitButton from "../../components/form/SumitButton";
import {routes} from "../../constants/routeConstants";
import SelectField from "../../components/form/SelectField";
import useRegisterStepOnePageHook from "./useRegisterStepOnePageHook";

const RegisterStepOnePage = (): ReactElement => {
    const { handleChooseCountry, chooseCountryInitialValues, countriesData, backState } = useRegisterStepOnePageHook();

    return (
        <>
            <Stack w={'full'}>
                <Heading fontSize={'2xl'} alignSelf='center'>Où habitez-vous la plus part du temps?</Heading>
                <Box alignSelf='center' mt={2}>
                    Il nous sera possible de vous demander de prouver votre addresse
                </Box>
                <Formik initialValues={chooseCountryInitialValues} validationSchema={chooseCountrySchema} onSubmit={handleChooseCountry} enableReinitialize>
                    {(props: FormikProps<ChooseCountryFormType>) => (
                        <Form>
                            <SelectField
                                noLabel
                                name="country"
                                values={countriesData}
                                isInvalid={!!props.errors.country && !!props.touched.country}
                                errorMessage={props.errors.country}
                            />
                            <SubmitButton label="Continuer"></SubmitButton>
                        </Form>
                    )}
                </Formik>
                <Center mt={50}>
                    <FiArrowLeft />
                    <Text as='u' fontWeight='bold'>
                        <Link to={routes.register.path} state={backState}>
                            Retour
                        </Link>
                    </Text>
                </Center>
            </Stack>
        </>
    );
};

export default RegisterStepOnePage;