import {useSteps} from "@chakra-ui/react";
import React, {ReactElement, useState} from "react";

import TransferAddStepOne from "./transferAddStepOne";
import {AccountModelType, ContactModelType} from "../../types/modelsTypes";
import TransferAddStepTwo from "./transferAddStepTwo";
import TransferAddStepFour from "./transferAddStepFour";
import TransferAddStepTree from "./transferAddStepTree";

const useTransferAddPageHook = (): any => {
    const { activeStep, setActiveStep } = useSteps();
    const [data, setData] = useState<stateDataType>({account: undefined, contact: undefined, amount: 0, currency: ''});

    const moveStep = (next: boolean = true): void => {
        setActiveStep(next ? activeStep + 1 : activeStep - 1);
    };

    const updateAccount = (account?: AccountModelType): void => {
        account && setData({...data, account});
    };

    const updateContact = (contact?: ContactModelType): void => {
        contact && setData({...data, contact});
    };

    const updateAmountAndCurrency = (amount: number = 0, currency: string = ''): void => {
        setData({...data, amount, currency});
    };

    const StepComponent = (): ReactElement | null => {
        switch (activeStep) {
            case 0: return <TransferAddStepOne moveStep={moveStep} selectedAccount={data.account} updateAccount={updateAccount} />;
            case 1: return <TransferAddStepTwo moveStep={moveStep} selectedContact={data.contact} updateContact={updateContact} />;
            case 2: return <TransferAddStepTree moveStep={moveStep} amount={data.amount} currency={data.currency} updateAmountAndCurrency={updateAmountAndCurrency} />;
            case 3: return <TransferAddStepFour moveStep={moveStep} />;
            default: return null;
        }
    };

    return { activeStep, StepComponent };
};

interface stateDataType {
    account?: AccountModelType,
    contact?: ContactModelType,
    amount: number,
    currency: string
}

export default useTransferAddPageHook;