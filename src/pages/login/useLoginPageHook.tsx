import {useState, useEffect} from "react";
import {LoginFormType} from "./loginPageData";
import {FormikHelpers} from "formik";
import {useQuery, useMutation} from '@tanstack/react-query';
import {getRequest, postRequest} from "../../helpers/requestHelpers";
import {AUTH} from "../../constants/apiURIConstants";
import {AxiosResponse} from "axios";

const useLoginPageHook = () => {
    const mutation = useMutation({
        mutationFn: ({email, password}: LoginFormType) => {
            return postRequest({url: AUTH.login, data: {email, password}})
                //.then((res: AxiosResponse<any>) => res.data)
        },
        onError: (error, variables, context) => {
            console.log("mutation.onError", {error, variables, context})
        },
        onSuccess: (data, variables, context) => {
            console.log("mutation.onSuccess", {data, variables, context})
        },
    })

    useEffect((): void => {
        console.log("mutation.isLoading", mutation.isLoading)
        console.log("mutation.isError", mutation.isError)
        console.log("mutation.isSuccess ", mutation.isSuccess)
    }, [mutation.isLoading,  mutation.isError, mutation.isSuccess]);

    /*const handleLogin = (values: LoginFormType, actions: FormikHelpers<LoginFormType>) => {
        console.log({ values, actions });

        const {isLoading, error, data, isFetching} = useQuery({
            queryKey: ['repoData'],
            queryFn: () => getRequest({url: AUTH.login})
        });

        if (isLoading) return console.log('Loading....', isLoading)

        if (error) return console.log('ERROR....', error)

        if (data) return console.log('DATA....', data)

        if (isFetching) return console.log('Fetching....', isFetching)

        actions.setSubmitting(false);
    };*/



    const handleLogin = (values: LoginFormType, actions: FormikHelpers<LoginFormType>) => {
        console.log({ values, actions });

        mutation.mutate(values)

        actions.setSubmitting(false);
    };

    return {handleLogin};
};

export default useLoginPageHook;