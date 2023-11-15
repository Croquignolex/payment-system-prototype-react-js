import {useSteps} from "@chakra-ui/react";
import React, {ReactElement, useState} from "react";

import TransferAddStepOne from "./transferAddStepOne";
import {AccountModelType, ContactModelType} from "../../types/modelsTypes";

const useTransferAddPageHook = (): any => {
    const { activeStep, setActiveStep } = useSteps();
    const [data, setData] = useState<{account?: AccountModelType, contact?: ContactModelType, amount: number}>({account: undefined, contact: undefined, amount: 0});

    const moveStep = (next: boolean = true): void => {
        setActiveStep(next ? activeStep + 1 : activeStep - 1);
    };

    const updateAccount = (accountID: string, accounts: AccountModelType[]): void => {
        const account: AccountModelType | undefined = accounts.find((account: AccountModelType): boolean => account.emailAddress === accountID);
        setData({...data, account});
    };

    const updateContact = (contactID: string, contacts: ContactModelType[]): void => {
        const contact: ContactModelType | undefined = contacts.find((contact: ContactModelType): boolean => contact.emailAddress === contactID);
        setData({...data, contact});
    };

    const updateAmount = (amount: number): void => {
        setData({...data, amount});
    };

    const StepComponent = (): ReactElement | null => {
        switch (activeStep) {
            case 0: return <TransferAddStepOne moveStep={moveStep} updateAccount={updateAccount} selectedAccount={data.account} />;
            // case 1: return <TransferAddStepOne moveStep={moveStep} />;
            // case 2: return <TransferAddStepOne moveStep={moveStep} />;
            // case 3: return <TransferAddStepOne moveStep={moveStep} />;
            default: return null;
        }
    };

    return { activeStep, StepComponent };
};

export default useTransferAddPageHook;