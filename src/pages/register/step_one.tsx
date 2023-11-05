import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Form, Formik, FormikProps } from "formik";
import {Heading, Stack, Text, HStack, Box, Button} from "@chakra-ui/react";

import TextField from "../../components/form/TextField";
import {checkEmailSchema, initialValues} from "./registerPageData";
import useRegisterPageHook from "./useRegisterPageHook";
import DisplayAlert from "../../components/DisplayAlert";
import {CheckEmailFormType} from "../../types/authTypes";
import { routes } from "../../constants/routeConstants";
import SubmitButton from "../../components/form/SumitButton";
import {FaApple, FaFacebook, FaGoogle} from "react-icons/fa";

const StepOnePage = (): ReactElement => {
    // const { handleCheckEmail, isLoading, errorAlertData } = useRegisterPageHook();

    return (
        <>
            Step one
        </>
    );
};

export default StepOnePage;