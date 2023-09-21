import {FormikHelpers} from "formik";
import {useMutation} from '@tanstack/react-query';
import {useNavigate, NavigateFunction} from 'react-router-dom';

import {loginUrl, RegisterFormType} from "./registerPageData";
import {RequestStatusType} from "../../types/RequestStatusType";
import {registerRequest} from "../../helpers/apiRequestsHelpers";

const useRegisterPageHook = (): any => {
    const navigate: NavigateFunction = useNavigate();

    const {status: registerStatus, error: registerError, mutate: registerMutate} = useMutation(registerRequest);

    const isRegisterLoading: boolean = (registerStatus === RequestStatusType.Loading);
    const isRegisterError: boolean = (registerStatus === RequestStatusType.Error);

    if(registerStatus === RequestStatusType.Success) {
        navigate(loginUrl, {state: {registered: true}});
    }

    const handleRegister = ({name, email, password}: RegisterFormType, actions: FormikHelpers<RegisterFormType>): void => {
        registerMutate({name, email, password});
    };

    return {handleRegister, isRegisterLoading, isRegisterError, registerError};
};

export default useRegisterPageHook;