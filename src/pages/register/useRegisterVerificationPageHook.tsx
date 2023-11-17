import {useEffect} from "react";
import {useNavigate, NavigateFunction, useLocation} from "react-router-dom";

import { routes } from "../../constants/routeConstants";
import {VerifyCodeFormType} from "../../types/pages/authTypes";

const useRegisterVerificationPageHook = (): any => {
    const navigate: NavigateFunction = useNavigate();
    const { state: locationState } = useLocation();

    const backState: any = {trustedData: true, email: locationState?.email, country: locationState?.country, phoneCode: locationState?.phoneCode, phoneNumber: locationState?.phoneNumber};

    const phone: string = locationState?.phoneCode + locationState?.phoneNumber;

    useEffect((): void => {
        if(!locationState?.trustedData) {
            navigate(routes.register.path);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleCodePhone = ({ code }: VerifyCodeFormType): void => {
        const state: any = {
            trustedData: true,
            email: locationState?.email,
            country: locationState?.country,
            phoneNumber: locationState?.phoneNumber,
            phoneCode: locationState?.phoneCode,
        };
        navigate(routes.registerStepTree.path, {state});
    };

    return { handleCodePhone, phone, backState };
};

export default useRegisterVerificationPageHook;