import React, {ReactElement} from "react";
import {Box, Heading, Container, Stack, HStack} from "@chakra-ui/react";
import {Form, Formik, FormikProps} from "formik";

import {infoSchema, infoInitialValues, InfoFormType} from "./profilePageData";
import TextField from "../../components/form/TextField";
import useProfilePageHook from "./useProfilePageHook";
import TextDisabledField from "../../components/form/TextDisabledField";
import CustomDateField from "../../components/form/CustomDateField";
import SubmitButton from "../../components/form/SumitButton";
import CustomPhoneField from "../../components/form/CustomPhoneField";

const ProfilePage = (): ReactElement => {
    const { handleInfo } = useProfilePageHook();

    return (
        <>
            {/*<DisplayAlert data={errorAlertData} />*/}
            <Container maxW={'3xl'}>
                <Heading as='h4' size='md' py={4}>Information personnelle</Heading>
                <Formik initialValues={infoInitialValues} validationSchema={infoSchema} onSubmit={handleInfo} enableReinitialize={true}>
                    {(props: FormikProps<InfoFormType>) => (
                        <Form>
                            <Stack as={Box} spacing={4} p={4} borderWidth='1px' borderRadius='lg' backgroundColor='white'>
                                <HStack spacing={4}>
                                    <TextField
                                        label="Prénom"
                                        name="firstName"
                                        isInvalid={!!props.errors.firstName && !!props.touched.firstName}
                                        errorMessage={props.errors.firstName}
                                    />
                                    <TextField
                                        label="Nom"
                                        name="lastName"
                                        isInvalid={!!props.errors.lastName && !!props.touched.lastName}
                                        errorMessage={props.errors.lastName}
                                    />
                                </HStack>
                                <HStack spacing={4}>
                                    <CustomDateField
                                        label="Date de naissance"
                                        day="dayOfBirth"
                                        month="monthOfBirth"
                                        year="yearOfBirth"
                                        isInvalid={
                                            (!!props.errors.dayOfBirth && !!props.touched.dayOfBirth) ||
                                            (!!props.errors.monthOfBirth && !!props.touched.monthOfBirth) ||
                                            (!!props.errors.yearOfBirth && !!props.touched.yearOfBirth)
                                        }
                                        errorMessage={
                                            props.errors.dayOfBirth ||
                                            props.errors.monthOfBirth ||
                                            props.errors.yearOfBirth
                                        }
                                    />
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
                                </HStack>
                                <TextDisabledField label="Email" name="email" />
                            </Stack>
                            <Container maxW={'md'}>
                                <SubmitButton isLoading={false}></SubmitButton>
                            </Container>
                        </Form>
                    )}
                </Formik>
            </Container>
        </>
    )
}

export default ProfilePage;