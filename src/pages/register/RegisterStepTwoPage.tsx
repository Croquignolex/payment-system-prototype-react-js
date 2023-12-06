import React, {FC, ReactElement} from "react";
import {Box, Center, Heading, Stack, Text} from "@chakra-ui/react";
import {FiArrowLeft} from "react-icons/fi";
import {Form, Formik, FormikProps} from "formik";

import {chooseCountrySchema} from "./registerPagesData";
import {ChooseCountryFormType} from "../../types/pages/authTypes";
import SubmitButton from "../../components/form/SumitButton";
import SelectField from "../../components/form/SelectField";
import useRegisterStepTwoPageHook from "./useRegisterStepTwoPageHook";

const RegisterStepTwoPage: FC<RegisterStepTwoProps> = ({moveStep, selectedCountry, updateCountry}): ReactElement => {
    const { handleChooseCountry, countriesData } = useRegisterStepTwoPageHook(moveStep, updateCountry);

    return (
        <>
            <Heading fontSize={'2xl'} alignSelf='center'>Où habitez-vous la plus part du temps?</Heading>
            <Box alignSelf='center' mt={2}>
                Il nous sera possible de vous demander de prouver votre addresse
            </Box>
            <Stack my={6}>
                <Formik initialValues={{country: selectedCountry}} validationSchema={chooseCountrySchema} onSubmit={handleChooseCountry} enableReinitialize>
                    {(props: FormikProps<ChooseCountryFormType>) => (
                        <Form>
                            <SelectField
                                noLabel
                                name="country"
                                values={countriesData}
                                isInvalid={!!props.errors.country && !!props.touched.country}
                                errorMessage={props.errors.country}
                            />
                            <SubmitButton label="Continuer" isDisabled={!props.dirty}></SubmitButton>
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
        </>
    );
};

interface RegisterStepTwoProps {
    updateCountry: (b: string) => void,
    moveStep: (a: boolean) => void,
    selectedCountry: string,
}

export default RegisterStepTwoPage;