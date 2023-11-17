import React, {ReactElement} from "react";
import {Box, Stack, HStack, Avatar, Text, Container, Flex} from "@chakra-ui/react";
import {FiUser} from "react-icons/fi";
import {Link} from "react-router-dom";

import useProfileEditPageHook from "./useProfileEditPageHook";
import DisplayAlert from "../../components/DisplayAlert";
import {Form, Formik, FormikProps} from "formik";
import {ProfileFormType, profileSchema} from "./profilePagesData";
import TextField from "../../components/form/TextField";
import TextDisabledField from "../../components/form/TextDisabledField";
import SubmitButton from "../../components/form/SumitButton";
import Loader from "../../components/Loader";

const ProfileEditPage = (): ReactElement => {
    const { profileInitialValues, handleProfileUpdate, isQueryLoading, isMutationLoading, alertData } = useProfileEditPageHook();

    return (
        <Stack>
            <Loader isLoading={isQueryLoading} />
            <DisplayAlert data={alertData} />
            <HStack>
                <Avatar bg='gray.200' icon={<FiUser fontSize='2rem' color='black'/>} size='lg' />
                <Text as='u' fontWeight='bold' ml={1}>
                    <Link to="#">Ajouter une photo de profil</Link>
                </Text>
            </HStack>
            <Formik initialValues={profileInitialValues} validationSchema={profileSchema} onSubmit={handleProfileUpdate} enableReinitialize>
                {(props: FormikProps<ProfileFormType>) => (
                    <Form>
                        <Stack mt={4}>
                            <Text fontSize='1.5rem' fontWeight='bold'>Informations personnelle</Text>
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
                                    <Box w={{base: '50%'}}>
                                        <TextDisabledField label="Email" name="email" />
                                        Cliquez
                                        <Text as='u' fontWeight='bold' mx={1}>
                                            <Link to="#">ici</Link>
                                        </Text>
                                        Pour changer votre email
                                    </Box>
                                    <Box mx={3} />
                                    <Box w={{base: '50%'}}>
                                        <TextDisabledField label="Numéro de téléphone" name="phoneNumber"/>
                                        Cliquez
                                        <Text as='u' fontWeight='bold' mx={1}>
                                            <Link to="#">ici</Link>
                                        </Text>
                                        Pour changer votre numéro de téléphone
                                    </Box>
                                </Flex>
                            </Stack>
                        </Stack>
                        <Stack mt={6}>
                            <Text fontSize='1.5rem' fontWeight='bold'>Addresse personnelle</Text>
                            <Stack as={Box} p={4} borderWidth='1px' borderRadius='3xl'>
                                <Flex>
                                    <TextField
                                        label="Adresse"
                                        name="street"
                                        isInvalid={!!props.errors.street && !!props.touched.street}
                                        errorMessage={props.errors.street}
                                    />
                                    <Box mx={3} />
                                    <TextField
                                        label="Code postal"
                                        name="zipCode"
                                        isInvalid={!!props.errors.zipCode && !!props.touched.zipCode}
                                        errorMessage={props.errors.zipCode}
                                    />
                                </Flex>
                                <Flex>
                                    <TextField
                                        label="Ville"
                                        name="city"
                                        isInvalid={!!props.errors.city && !!props.touched.city}
                                        errorMessage={props.errors.city}
                                    />
                                    <Box mx={3} />
                                    <TextField
                                        label="Pays"
                                        name="country"
                                        isInvalid={!!props.errors.country && !!props.touched.country}
                                        errorMessage={props.errors.country}
                                    />
                                </Flex>
                            </Stack>
                        </Stack>
                        <Container maxW={'md'}>
                            <SubmitButton isLoading={isMutationLoading}></SubmitButton>
                        </Container>
                    </Form>
                )}
            </Formik>
        </Stack>
    );
};

export default ProfileEditPage;