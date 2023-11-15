import {useRadioGroup} from "@chakra-ui/react";

import {ContactModelType} from "../../types/modelsTypes";
import useContactsPageHook from "../contacts/useContactsPageHook";

const useTransferAddStepTwoPageHook = (selectedContact: ContactModelType | undefined, updateContact: (a: string, b: ContactModelType[]) => void): any => {
    const { isLoading, contacts, alertData } = useContactsPageHook();

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'contact',
        defaultValue: selectedContact?.emailAddress,
        onChange(selectedContactID: string): void {
            updateContact(selectedContactID, contacts);
        }
    });

    const group = getRootProps();

    return { isLoading, alertData, contacts, group, getRadioProps };
};

export default useTransferAddStepTwoPageHook;