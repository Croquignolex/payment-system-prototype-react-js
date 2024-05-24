import React, {ReactElement, useState} from "react";
import {useSteps} from "@chakra-ui/react";

import {registerDataType} from "../../types/pages/authTypes";
import RegisterStepOnePage from "./RegisterStepOnePage";
import RegisterStepTwoPage from "./RegisterStepTwoPage";
import RegisterStepTreePage from "./RegisterStepTreePage";
import RegisterStepFourPage from "./RegisterStepFourPage";
import RegisterStepFivePage from "./RegisterStepFivePage";
import RegisterStepSixPage from "./RegisterStepSixPage";

const useRegisterPageHook = (): any => {
    const { activeStep, setActiveStep } = useSteps();

    const [registerData, setRegisterData] = useState<registerDataType>({
        emailAddress: '', countryCode: '', firstName: '', lastName: '', phoneNumber: '', phoneCode: ''
    });

    const moveStep = (next: boolean = true, step: number = 1): void => {
        setActiveStep(next ? activeStep + step : activeStep - step);
    };

    const updateEmail = (emailAddress: string): void => {
        setRegisterData({...registerData, emailAddress});
    };

    const updateNames = (firstName: string, lastName: string): void => {
        setRegisterData({...registerData, firstName, lastName});
    };

    const updateCountry = (countryCode: string): void => {
        setRegisterData({...registerData, countryCode});
    };

    const updatePhone = (phoneCode: string, phoneNumber: string): void => {
        setRegisterData({...registerData, phoneNumber, phoneCode});
    };

    const StepComponent = (): ReactElement | null => {
        switch (activeStep) {
            case 0: return <RegisterStepOnePage moveStep={moveStep} selectedEmail={registerData.emailAddress} updateEmail={updateEmail} />;
            case 1: return <RegisterStepTwoPage moveStep={moveStep} selectedFirstName={registerData.firstName} selectedLastName={registerData.lastName} updateNames={updateNames} />;
            case 2: return <RegisterStepTreePage moveStep={moveStep} selectedCountry={registerData.countryCode} updateCountry={updateCountry} />;
            case 3: return <RegisterStepFourPage moveStep={moveStep} selectedPhoneNumber={registerData.phoneNumber} selectedPhoneCode={registerData.phoneCode} updatePhone={updatePhone} />;
            case 4: return <RegisterStepFivePage moveStep={moveStep} selectedPhoneNumber={registerData.phoneNumber} selectedPhoneCode={registerData.phoneCode} />;
            case 5: return <RegisterStepSixPage moveStep={moveStep} registerData={registerData} />;

            default: return null;
        }
    };

    return { activeStep, StepComponent};
};

export default useRegisterPageHook;