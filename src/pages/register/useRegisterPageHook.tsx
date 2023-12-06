import React, {ReactElement, useState} from "react";
import {useSteps} from "@chakra-ui/react";

import {registerDataType} from "../../types/pages/authTypes";
import RegisterStepOnePage from "./RegisterStepOnePage";
import RegisterStepTwoPage from "./RegisterStepTwoPage";
import RegisterStepTreePage from "./RegisterStepTreePage";
import RegisterStepFourPage from "./RegisterStepFourPage";

const useRegisterPageHook = (): any => {
    const { activeStep, setActiveStep } = useSteps();

    const [registerData, setRegisterData] = useState<registerDataType>({email: '', country: '', phoneNumber: '', phoneCode: ''});

    const moveStep = (next: boolean = true): void => {
        setActiveStep(next ? activeStep + 1 : activeStep - 1);
    };

    const updateEmail = (email: string): void => {
        setRegisterData({...registerData, email});
    };

    const updateCountry = (country: string): void => {
        setRegisterData({...registerData, country});
    };

    const updatePhone = (phoneCode: string, phoneNumber: string): void => {
        setRegisterData({...registerData, phoneNumber, phoneCode});
    };

    const StepComponent = (): ReactElement | null => {
        switch (activeStep) {
            case 0: return <RegisterStepOnePage moveStep={moveStep} selectedEmail={registerData.email} updateEmail={updateEmail} />;
            case 1: return <RegisterStepTwoPage moveStep={moveStep} selectedCountry={registerData.country} updateCountry={updateCountry} />;
            case 2: return <RegisterStepTreePage moveStep={moveStep} selectedPhoneNumber={registerData.phoneNumber} selectedPhoneCode={registerData.phoneCode} updatePhone={updatePhone} />;
            case 3: return <RegisterStepFourPage moveStep={moveStep} selectedPhoneNumber={registerData.phoneNumber} selectedPhoneCode={registerData.phoneCode} />;
            default: return null;
        }
    };

    return { activeStep, StepComponent};
};

export default useRegisterPageHook;