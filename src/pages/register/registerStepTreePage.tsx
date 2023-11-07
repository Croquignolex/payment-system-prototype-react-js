import React, {ReactElement, useContext, useEffect} from "react";
import {Center, Heading, Stack, Text} from "@chakra-ui/react";
import {Link, NavigateFunction, useLocation, useNavigate} from "react-router-dom";
import {FiArrowLeft} from "react-icons/fi";
import {Form, Formik, FormikProps} from "formik";
import {useMutation} from "@tanstack/react-query";

import {passwordInitialValues, passwordSchema} from "./registerPageData";
import {PasswordFormType} from "../../types/authTypes";
import SubmitButton from "../../components/form/SumitButton";
import {routes} from "../../constants/routeConstants";
import PasswordField from "../../components/form/PasswordField";
import {registerRequest} from "../../helpers/apiRequestsHelpers";
import {ErrorAlertType, RequestResponseType} from "../../types/othersTypes";
import {AlertStatusType} from "../../types/enumsTypes";
import DisplayAlert from "../../components/DisplayAlert";
import {setLocaleStorageItem} from "../../helpers/localStorageHelpers";
import {UPDATE_USER_DATA, UserContext} from "../../components/UserContext";

const RegisterStepTreePage = (): ReactElement => {
    const navigate: NavigateFunction = useNavigate();
    const { state: locationState } = useLocation();
    const { setGlobalState } = useContext(UserContext);

    useEffect((): void => {
        if(!locationState?.trustedData) {
            navigate(routes.register.path);
        }
    }, []);

    const { isLoading, isError, isSuccess, data, error, variables, mutate }: RequestResponseType = useMutation(registerRequest);

    const errorMessage: string = error?.response?.data?.message || error?.message;
    const errorAlertData: ErrorAlertType = { show: isError, status: AlertStatusType.error, message: errorMessage };

    if(isSuccess) {
        const accountId: string = data?.data?.accountId;
        const { lastName, firstName, email } = variables;

        setLocaleStorageItem('user', { lastName, firstName, email, accountId });

        setGlobalState({type: UPDATE_USER_DATA, payload: { isAuthorized: true, lastName, firstName, email, accountId }});

        navigate(routes.home.path, {state: { welcomeAlert: true }});
    }

    const handleRegister = ({ password }: PasswordFormType): void => {
        const email: string = locationState?.email;
        const firstName: string = locationState?.phoneCode + locationState?.phoneNumber;
        const lastName: string = "";

        mutate({ email, firstName, lastName, password });
    };

    const backState: any = {trustedData: true, email: locationState?.email, country: locationState?.country, phoneCode: locationState?.phoneCode, phoneNumber: locationState?.phoneNumber};

    return (
        <>
            <Stack w={'full'}>
                <Heading fontSize={'2xl'} alignSelf='center'>Créez votre mot de passe</Heading>
                <DisplayAlert data={errorAlertData} />
                <Formik initialValues={passwordInitialValues} validationSchema={passwordSchema} onSubmit={handleRegister} enableReinitialize>
                    {(props: FormikProps<PasswordFormType>) => (
                        <Form>
                            <PasswordField
                                label="Votre mot de passe"
                                name="password"
                                isInvalid={!!props.errors.password && !!props.touched.password}
                                errorMessage={props.errors.password}
                            />
                            <PasswordField
                                label="Confirmation du mot de passe"
                                name="confirmPassword"
                                isInvalid={!!props.errors.confirmPassword && !!props.touched.confirmPassword}
                                errorMessage={props.errors.confirmPassword}
                            />
                            <Text align='center' mt={10}>
                                Le mot de passe doit contenir au moins une
                                <strong> majuscule</strong>, une<strong> minuscule</strong>, un
                                <strong> chiffre</strong> et un<strong> caratère spécial</strong>
                            </Text>
                            <SubmitButton isLoading={isLoading} label="Continuer"></SubmitButton>
                        </Form>
                    )}
                </Formik>
                <Center mt={50}>
                    <FiArrowLeft />
                    <Text as='u' fontWeight='bold'>
                        <Link to={routes.registerStepTwo.path} state={backState}>
                            Retour
                        </Link>
                    </Text>
                </Center>
            </Stack>
        </>
    );
};

export default RegisterStepTreePage;