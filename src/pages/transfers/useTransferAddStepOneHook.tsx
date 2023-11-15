import {useRadioGroup} from "@chakra-ui/react";
import {useState} from "react";

import useAccountsPageHook from "../accounts/useAccountsPageHook";
import {AccountModelType} from "../../types/modelsTypes";

const useTransferAddStepOnePageHook = (selectedAccount: AccountModelType | undefined, updateAccount: (a: string, b: AccountModelType[]) => void): any => {
    const { isLoading, accounts, alertData } = useAccountsPageHook();
    const [nextEnabled, setNextEnabled] = useState<boolean>(false);

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'account',
        defaultValue: selectedAccount?.emailAddress,
        onChange(selectedAccountID: string): void {
            updateAccount(selectedAccountID, accounts);

            if(!nextEnabled) {
                setNextEnabled(true);
            }
        }
    });

    const group = getRootProps();

    return { isLoading, alertData, accounts, group, nextEnabled, getRadioProps };
};

export default useTransferAddStepOnePageHook;