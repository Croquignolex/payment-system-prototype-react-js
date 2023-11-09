import React, {ReactElement} from "react";
import {Form, Formik, FormikProps} from "formik";
import {Box, Stack, Container, Flex} from "@chakra-ui/react";

import useContactAddPageHook from "./useContactAddPageHook";
import DisplayAlert from "../../components/DisplayAlert";
import {ContactAddFormType, contactAddSchema, initialValues} from "./contactPagesData";
import TextField from "../../components/form/TextField";
import SubmitButton from "../../components/form/SumitButton";
import SelectField from "../../components/form/SelectField";

const ContactAddPage = (): ReactElement => {
    const { handleContactAdd, contactTypesData, currenciesData, countriesData, isLoading, alertData } = useContactAddPageHook();

    return (
        <Stack>
            <DisplayAlert data={alertData} />
            <Formik initialValues={initialValues} validationSchema={contactAddSchema} onSubmit={handleContactAdd}>
                {(props: FormikProps<ContactAddFormType>) => (
                    <Form>
                        <Stack mt={4}>
                            <Stack as={Box} p={4} borderWidth='1px' borderRadius='3xl'>
                                <Flex>
                                    <TextField
                                        label="Prénom"
                                        name="firstName"
                                        isInvalid={!!props.errors.firstName && !!props.touched.firstName}
                                        errorMessage={props.errors.firstName}
                                    />
                                    <Box mx={3} />
                                    <TextField
                                        label="Nom"
                                        name="lastName"
                                        isInvalid={!!props.errors.lastName && !!props.touched.lastName}
                                        errorMessage={props.errors.lastName}
                                    />
                                </Flex>
                                <Flex>
                                    <TextField
                                        label="Email"
                                        name="emailAddress"
                                        isInvalid={!!props.errors.emailAddress && !!props.touched.emailAddress}
                                        errorMessage={props.errors.emailAddress}
                                    />
                                    <Box mx={3} />
                                    <TextField
                                        label="Numéro de téléphone"
                                        name="phoneNumber"
                                        isInvalid={!!props.errors.phoneNumber && !!props.touched.phoneNumber}
                                        errorMessage={props.errors.phoneNumber}
                                    />
                                </Flex>
                                <Flex>
                                    <SelectField
                                        label="Pays"
                                        name="countryCode"
                                        values={countriesData}
                                        isInvalid={!!props.errors.countryCode && !!props.touched.countryCode}
                                        errorMessage={props.errors.countryCode}
                                    />
                                    <Box mx={3} />
                                    <SelectField
                                        label="Dévise"
                                        name="currencyCode"
                                        values={currenciesData}
                                        isInvalid={!!props.errors.currencyCode && !!props.touched.currencyCode}
                                        errorMessage={props.errors.currencyCode}
                                    />
                                </Flex>
                                <Flex>
                                    <SelectField
                                        label="Type de contact"
                                        name="recipientType"
                                        values={contactTypesData}
                                        isInvalid={!!props.errors.recipientType && !!props.touched.recipientType}
                                        errorMessage={props.errors.recipientType}
                                    />
                                </Flex>
                            </Stack>
                        </Stack>
                        <Container maxW={'md'}>
                            <SubmitButton isLoading={isLoading}></SubmitButton>
                        </Container>
                    </Form>
                )}
            </Formik>
        </Stack>
    );
};

export default ContactAddPage;