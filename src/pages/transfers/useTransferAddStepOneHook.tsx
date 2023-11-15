import {useRadioGroup} from "@chakra-ui/react";

import useAccountsPageHook from "../accounts/useAccountsPageHook";
import {AccountModelType} from "../../types/modelsTypes";

const useTransferAddStepOnePageHook = (selectedAccount: AccountModelType | undefined, updateAccount: (a: string, b: AccountModelType[]) => void): any => {
    const { isLoading, accounts, alertData } = useAccountsPageHook();

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'account',
        defaultValue: selectedAccount?.emailAddress,
        onChange(selectedAccountID: string): void {
            updateAccount(selectedAccountID, accounts);
        }
    });

    const group = getRootProps();

    return { isLoading, alertData, accounts, group, getRadioProps };
};

export default useTransferAddStepOnePageHook;