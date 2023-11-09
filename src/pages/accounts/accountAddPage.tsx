import React, {ReactElement} from "react";
import {Form, Formik, FormikProps} from "formik";
import {Box, Stack, Container, Flex} from "@chakra-ui/react";

import useAccountAddPageHook from "./useAccountAddPageHook";
import DisplayAlert from "../../components/DisplayAlert";
import {AccountAddFormType, accountAddSchema, initialValues} from "./accountPagesData";
import TextField from "../../components/form/TextField";
import SubmitButton from "../../components/form/SumitButton";
import SelectField from "../../components/form/SelectField";

const AccountAddPage = (): ReactElement => {
    const { handleAccountAdd, accountTypesData, currenciesData, countriesData, isLoading, alertData } = useAccountAddPageHook();

    return (
        <Stack>
            <DisplayAlert data={alertData} />
            <Formik initialValues={initialValues} validationSchema={accountAddSchema} onSubmit={handleAccountAdd}>
                {(props: FormikProps<AccountAddFormType>) => (
                    <Form>
                        <Stack mt={4}>
                            <Stack as={Box} p={4} borderWidth='1px' borderRadius='3xl'>
                                <Flex>
                                    <SelectField
                                        label="Type de compte"
                                        name="payerType"
                                        values={accountTypesData}
                                        isInvalid={!!props.errors.payerType && !!props.touched.payerType}
                                        errorMessage={props.errors.payerType}
                                    />
                                </Flex>
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

export default AccountAddPage;