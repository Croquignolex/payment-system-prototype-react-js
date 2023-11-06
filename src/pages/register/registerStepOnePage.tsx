import React, {ReactElement, useEffect, useMemo} from "react";
import {Box, Center, Heading, Stack, Text} from "@chakra-ui/react";
import {Link, NavigateFunction, useLocation, useNavigate} from "react-router-dom";
import {FiArrowLeft} from "react-icons/fi";
import {Form, Formik, FormikProps} from "formik";

import {chooseCountryInitialValues, chooseCountrySchema} from "./registerPageData";
import {ChooseCountryFormType} from "../../types/authTypes";
import SubmitButton from "../../components/form/SumitButton";
import {routes} from "../../constants/routeConstants";
import SelectField from "../../components/form/SelectField";
import countriesJSON from '../../assets/countries.json';
import {FormSelectOptionType} from "../../types/othersTypes";

const StepOnePage = (): ReactElement => {
    const navigate: NavigateFunction = useNavigate();
    const { state: locationState } = useLocation();

    useEffect((): void => {
        if(!locationState?.trustedData) {
            navigate(routes.register.path);
        }
    }, []);

    const countriesData: FormSelectOptionType[] = useMemo((): FormSelectOptionType[] => (
        countriesJSON.map((country: { name: string, code: string }): FormSelectOptionType => ({
            label: country.name,
            key: country.code
        }))
    ), []);

    const handleChooseCountry = ({ country }: ChooseCountryFormType): void => {
        navigate(routes.registerStepTwo.path, {state: { trustedData: true, email: locationState?.email, country }});
    };

    return (
        <>
            <Stack w={'full'}>
                <Heading fontSize={'2xl'} alignSelf='center'>Où habitez-vous la plus part du temps?</Heading>
                <Box alignSelf='center' mt={2}>
                    Il nous sera possible de vous demander de prouver votre addresse
                </Box>
                <Formik initialValues={chooseCountryInitialValues} validationSchema={chooseCountrySchema} onSubmit={handleChooseCountry}>
                    {(props: FormikProps<ChooseCountryFormType>) => (
                        <Form>
                            <SelectField
                                noLabel
                                name="country"
                                values={countriesData}
                                isInvalid={!!props.errors.country && !!props.touched.country}
                                errorMessage={props.errors.country}
                            />
                            <SubmitButton label="Suivant"></SubmitButton>
                        </Form>
                    )}
                </Formik>
                <Center mt={50}>
                    <FiArrowLeft />
                    <Text as='u' fontWeight='bold'>
                        <Link to={routes.register.path}>
                            Retour
                        </Link>
                    </Text>
                </Center>
            </Stack>
        </>
    );
};

export default StepOnePage;