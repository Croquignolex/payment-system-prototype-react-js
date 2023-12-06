import {useSteps} from "@chakra-ui/react";
import React, {ReactElement, useState} from "react";

import TransferAddStepOne from "./TransferAddStepOne";
import {AccountModelType, ContactModelType} from "../../types/modelsTypes";
import TransferAddStepTwo from "./TransferAddStepTwo";
import TransferAddStepFour from "./TransferAddStepFour";
import TransferAddStepTree from "./TransferAddStepTree";
import {transferDataType} from "../../types/othersTypes";

const useTransferAddPageHook = (): any => {
    const { activeStep, setActiveStep } = useSteps();

    const [transferData, setTransferData] = useState<transferDataType>({account: undefined, contact: undefined, amount: 0, currency: ''});

    const moveStep = (next: boolean = true): void => {
        setActiveStep(next ? activeStep + 1 : activeStep - 1);
    };

    const updateAccount = (account?: AccountModelType): void => {
        account && setTransferData({...transferData, account});
    };

    const updateContact = (contact?: ContactModelType): void => {
        contact && setTransferData({...transferData, contact});
    };

    const updateAmountAndCurrency = (amount: number = 0, currency: string = ''): void => {
        setTransferData({...transferData, amount, currency});
    };

    const StepComponent = (): ReactElement | null => {
        switch (activeStep) {
            case 0: return <TransferAddStepOne moveStep={moveStep} selectedAccount={transferData.account} updateAccount={updateAccount} />;
            case 1: return <TransferAddStepTwo moveStep={moveStep} selectedContact={transferData.contact} updateContact={updateContact} />;
            case 2: return <TransferAddStepTree moveStep={moveStep} selectedAmount={transferData.amount} selectedCurrency={transferData.currency} updateAmountAndCurrency={updateAmountAndCurrency} />;
            case 3: return <TransferAddStepFour moveStep={moveStep} transferData={transferData} />;
            default: return null;
        }
    };

    return { activeStep, StepComponent };
};

export default useTransferAddPageHook;