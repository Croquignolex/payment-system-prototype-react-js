import {useRadioGroup} from "@chakra-ui/react";
import {useState} from "react";

import useAccountsPageHook from "../accounts/useAccountsPageHook";
import {AccountModelType} from "../../types/modelsTypes";

const useTransferAddStepOnePageHook = (moveStep: () => void, selectedAccount: AccountModelType | undefined, updateAccount: (b?: AccountModelType) => void): any => {
    const { isLoading, accounts, alertData } = useAccountsPageHook();
    const [selectedAccountID, setSelectedAccountID] = useState<string | undefined>(selectedAccount?.emailAddress);

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'account',
        defaultValue: selectedAccount?.emailAddress,
        onChange(selectedAccountID: string): void {
            setSelectedAccountID(selectedAccountID);
        }
    });

    const group = getRootProps();

    const nextAndSAve = () => {
        moveStep();
        const account: AccountModelType | undefined = accounts.find((account: AccountModelType): boolean => account.emailAddress === selectedAccountID);
        updateAccount(account);
    }

    return { isLoading, alertData, accounts, group, selectedAccountID, nextAndSAve, getRadioProps };
};

export default useTransferAddStepOnePageHook;