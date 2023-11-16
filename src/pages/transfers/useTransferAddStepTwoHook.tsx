import {useRadioGroup} from "@chakra-ui/react";
import {useState} from "react";

import {ContactModelType} from "../../types/modelsTypes";
import useContactsPageHook from "../contacts/useContactsPageHook";

const useTransferAddStepTwoPageHook = (moveStep: (a: boolean) => void, selectedContact: ContactModelType | undefined, updateContact: (b?: ContactModelType) => void): any => {
    const { isLoading, contacts, alertData } = useContactsPageHook();
    const [selectedContactID, setSelectedContactID] = useState<string | undefined>(selectedContact?.emailAddress);

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'contact',
        defaultValue: selectedContact?.emailAddress,
        onChange(selectedContactID: string): void {
            setSelectedContactID(selectedContactID);
        }
    });

    const group = getRootProps();

    const nextAndSAve = () => {
        moveStep(true);
        const contact: ContactModelType | undefined = contacts.find((contact: ContactModelType): boolean => contact.emailAddress === selectedContactID);
        updateContact(contact);
    }

    return { isLoading, alertData, contacts, group, selectedContactID, nextAndSAve, getRadioProps };
};

export default useTransferAddStepTwoPageHook;