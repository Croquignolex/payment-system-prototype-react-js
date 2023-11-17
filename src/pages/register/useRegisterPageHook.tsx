import {useEffect, useState} from "react";
import {useNavigate, NavigateFunction, useLocation} from "react-router-dom";

import { routes } from "../../constants/routeConstants";
import {CheckEmailFormType} from "../../types/pages/authTypes";

const useRegisterPageHook = (): any => {
    const navigate: NavigateFunction = useNavigate();
    const { state: locationState } = useLocation();

    const [checkEmailInitialValues, setCheckEmailInitialValues] = useState<CheckEmailFormType>({email: ''} );

    useEffect((): void => {
        if(locationState?.trustedData) {
            setCheckEmailInitialValues({email: locationState?.email});
        }
        // @ts-ignore
    }, []);

    const handleCheckEmail = ({ email }: CheckEmailFormType): void => {
        navigate(routes.registerStepOne.path, {state: { trustedData: true, email }});
    };

    return { handleCheckEmail, checkEmailInitialValues };
};

export default useRegisterPageHook;