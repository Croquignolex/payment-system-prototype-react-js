import React, {FC, ReactElement} from "react";
import {FiArrowLeft} from "react-icons/fi";
import {SimpleGrid, Button, Center, Text} from "@chakra-ui/react";

import {ContactModelType} from "../../types/modelsTypes";
import Loader from "../../components/Loader";
import DisplayAlert from "../../components/DisplayAlert";
import RadioCard from "../../components/RadioCard";
import ContactCard from "../contacts/ContactCard";
import useTransferAddStepTwoPageHook from "./useTransferAddStepTwoHook";

const TransferAddStepTwoProps: FC<TransferAddStepTwoProps> = ({moveStep, selectedContact, updateContact}): ReactElement => {
    const { isLoading, alertData, contacts, group, getRadioProps } = useTransferAddStepTwoPageHook(selectedContact, updateContact);

    return (
        <>
            <strong>Choisissez un destianataire</strong>
            <Loader isLoading={isLoading} />
            <DisplayAlert data={alertData} />
            <SimpleGrid columns={{ lg: 3, sm: 2}} spacing={1} {...group}>
                {contacts.map((contact: ContactModelType, index: number): ReactElement => {
                    const radio: any = getRadioProps({ value: contact.emailAddress });
                    return (
                        <RadioCard key={index} {...radio}>
                            <ContactCard contact={contact} actionable={false} />
                        </RadioCard>
                    );
                })}
            </SimpleGrid>
            <Center mt={10}>
                <Button
                    colorScheme='blue'
                    isDisabled={selectedContact?.emailAddress === undefined}
                    size='lg'
                    rounded='full'
                    w={{sm: '50%', base: '100%'}}
                    onClick={() => moveStep(true)}
                >
                    Suivant
                </Button>
            </Center>
            <Center mt={50}>
                <FiArrowLeft />
                <Text as='u' fontWeight='bold' onClick={() => moveStep(false)} cursor='pointer'>
                    Retour
                </Text>
            </Center>
        </>
    );
};

interface TransferAddStepTwoProps {
    updateContact: (a: string, b: ContactModelType[]) => void,
    moveStep: (a: boolean) => void,
    selectedContact?: ContactModelType,
}

export default TransferAddStepTwoProps;