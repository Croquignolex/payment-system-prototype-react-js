import {FormikHelpers} from "formik";
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {LoginFormType} from "./loginPageData";
import {postRequest} from "../../helpers/axiosHelpers";
import {authApiURI} from "../../constants/apiURIConstants";

const useLoginPageHook = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: ({email, password}: LoginFormType) => {
            return postRequest({url: authApiURI.login, data: {email, password}})
                //.then((res: AxiosResponse<any>) => res.data)
        },
        onError: (error, variables, context) => {
            console.log("mutation.onError", {error, variables, context})
        },
        onSuccess: (data, variables, context) => {
            console.log("mutation.onSuccess", {data, variables, context})
        },
    })

    const handleLogin = (values: LoginFormType, actions: FormikHelpers<LoginFormType>) => {
        mutation.mutate(values);
        actions.setSubmitting(false);
    };

    return {handleLogin};
};

export default useLoginPageHook;