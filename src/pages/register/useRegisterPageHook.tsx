import React, {ReactElement, useState} from "react";
import {useSteps} from "@chakra-ui/react";

import {registerDataType} from "../../types/pages/authTypes";
import RegisterStepOnePage from "./RegisterStepOnePage";

const useRegisterPageHook = (): any => {
    const { activeStep, setActiveStep } = useSteps();

    const [registerData, setRegisterData] = useState<registerDataType>({email: ''});

    const moveStep = (next: boolean = true): void => {
        setActiveStep(next ? activeStep + 1 : activeStep - 1);
    };

    const updateEmail = (email: string): void => {
        setRegisterData({...registerData, email});
    };

    const StepComponent = (): ReactElement | null => {
        switch (activeStep) {
            case 0: return <RegisterStepOnePage moveStep={moveStep} selectedEmail={registerData.email} updateEmail={updateEmail} />;
            // case 1: return <TransferAddStepTwo moveStep={moveStep} selectedContact={transferData.contact} updateContact={updateContact} />;
            // case 2: return <TransferAddStepTree moveStep={moveStep} amount={transferData.amount} currency={transferData.currency} updateAmountAndCurrency={updateAmountAndCurrency} />;
            // case 3: return <TransferAddStepFour moveStep={moveStep} transferData={transferData} />;
            default: return null;
        }
    };

    return { activeStep, StepComponent};
};

export default useRegisterPageHook;