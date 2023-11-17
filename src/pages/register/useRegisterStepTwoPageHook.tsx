import {useEffect, useState} from "react";
import {useNavigate, NavigateFunction, useLocation} from "react-router-dom";

import { routes } from "../../constants/routeConstants";
import {VerifyPhoneFormType} from "../../types/pages/authTypes";

const useRegisterStepTwoPageHook = (): any => {
    const navigate: NavigateFunction = useNavigate();
    const { state: locationState } = useLocation();

    const [verifyPhoneInitialValues, setVerifyPhoneInitialValues] = useState<VerifyPhoneFormType>({phoneNumber: '', phoneCode: ''} );

    useEffect((): void => {
        if(!locationState?.trustedData) {
            navigate(routes.register.path);
        }

        if(locationState?.trustedData) {
            setVerifyPhoneInitialValues({phoneNumber: locationState?.phoneNumber, phoneCode: locationState?.phoneCode});
        }
    });

    const handleVerifyPhone = ({ phoneCode, phoneNumber }: VerifyPhoneFormType): void => {
        const state: any = {
            trustedData: true,
            email: locationState?.email,
            country: locationState?.country,
            phoneCode,
            phoneNumber
        };
        navigate(routes.registerVerification.path, {state});
    };

    const backState: any = {trustedData: true, email: locationState?.email, country: locationState?.country};

    return { handleVerifyPhone, verifyPhoneInitialValues, backState };
};

export default useRegisterStepTwoPageHook;