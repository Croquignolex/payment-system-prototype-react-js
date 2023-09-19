import {useState, useEffect} from "react";
import {LoginFormType} from "./loginPageData";
import {FormikHelpers} from "formik";

const useLoginPageHook = () => {
    /*useEffect((): void => {
        if(requestSucceeded(logoutRequest)) {
            applyInfoNotification(logoutRequest.message);
        }
    }, [logoutRequest]);*/

    const handleLogin = (values: LoginFormType, actions: FormikHelpers<LoginFormType>) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
    };

    return {handleLogin};
};

export default useLoginPageHook;