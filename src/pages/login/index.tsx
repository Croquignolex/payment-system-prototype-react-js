import React, {ReactElement, useState} from 'react';
import {Link} from "react-router-dom";
import {Button, Checkbox, FormControl, FormErrorMessage, FormLabel, Heading, Input, Stack, Text, InputGroup, InputRightElement, IconButton} from "@chakra-ui/react";
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import {Field, Form, Formik, FormikProps, FormikHelpers} from 'formik';
import * as Yup from 'yup';

import {ROUTES} from "../../constants/routeConstants";

const registerUrl: string = ROUTES[0]?.routes[1]?.name;

const Login = (): ReactElement => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const initialValues: LoginFormType = { email: '', password: '' };

    return (
        <>
            <Stack spacing={4} w={'full'} maxW={'md'}>
                <Heading fontSize={'2xl'}>Connectez-vous à votre compte</Heading>
                <Formik
                    initialValues={initialValues}
                    validationSchema={LoginSchema}
                    onSubmit={(values: LoginFormType, actions: FormikHelpers<LoginFormType>) => {
                        console.log({ values, actions });
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                    }}
                >
                    {(props: FormikProps<LoginFormType>) => (
                        <Form>
                            {/* Email input */}
                            <FormControl isInvalid={!!props.errors.email && props.touched.email}>
                                <FormLabel>Email</FormLabel>
                                <Field as={Input} id="email" name="email" type="text" />
                                <FormErrorMessage>{props.errors.email}</FormErrorMessage>
                                <FormErrorMessage>{props.errors.password}</FormErrorMessage>
                            </FormControl>
                            {/* Password input */}
                            <FormControl id="password">
                                <FormLabel>Mot de passe</FormLabel>
                                <InputGroup>
                                    <InputRightElement>
                                        <IconButton
                                            variant="text"
                                            color={'blue.500'}
                                            aria-label={showPassword ? 'Mask password' : 'Reveal password'}
                                            icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                                            onClick={() => setShowPassword(!showPassword)}
                                        />
                                    </InputRightElement>
                                    <Input
                                        id="password"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        autoComplete="current-password"
                                        required
                                    />
                                </InputGroup>
                            </FormControl>
                            <Stack spacing={6}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox defaultChecked>Se souvenir de moi</Checkbox>
                                    <Text color={'blue.500'}>Mot de passe oublié?</Text>
                                </Stack>
                                <Button colorScheme={'blue'} variant={'solid'} isLoading={props.isSubmitting} type='submit'>
                                    Sign in
                                </Button>
                            </Stack>
                        </Form>
                    )}
                </Formik>
                <Stack pt={6}>
                    <Text align={'center'}>
                        Vous n'avez pas de compte? <Link to={registerUrl} style={{color: '#3182CE'}}>Cliquez ici</Link>
                    </Text>
                </Stack>
            </Stack>
        </>
    );
};

const LoginSchema: Yup.ObjectSchema<LoginFormType> = Yup.object().shape({
    email: Yup.string()
        .email("L'addresse email invalide")
        .required("L'addresse email est réquise"),
    password: Yup.string()
        .min(2, 'Le mot de passe doit avoir au moins 2 caratères')
        .required('Le mot de passe est réquis'),
});

interface LoginFormType {
    email: string;
    password: string;
}

export default Login;