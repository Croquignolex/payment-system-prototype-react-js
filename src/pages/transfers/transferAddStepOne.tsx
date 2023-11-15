import React, {FC, ReactElement} from "react";
import {SimpleGrid, Button, Center} from "@chakra-ui/react";

import {AccountModelType} from "../../types/modelsTypes";
import AccountCard from "../accounts/AccountCard";
import Loader from "../../components/Loader";
import DisplayAlert from "../../components/DisplayAlert";
import RadioCard from "../../components/RadioCard";
import useTransferAddStepOnePageHook from "./useTransferAddStepOneHook";

const TransferAddStepOne: FC<TransferAddStepOneProps> = ({moveStep, selectedAccount, updateAccount}): ReactElement => {
    const { isLoading, nextEnabled, alertData, accounts, group, getRadioProps } = useTransferAddStepOnePageHook(selectedAccount, updateAccount);

    return (
        <>
            <strong>Choisissez un compte</strong>
            <Loader isLoading={isLoading} />
            <DisplayAlert data={alertData} />
            <SimpleGrid columns={{ lg: 3, sm: 2}} spacing={1} {...group}>
                {accounts.map((account: AccountModelType, index: number): ReactElement => {
                    const radio: any = getRadioProps({ value: account.emailAddress });
                    return (
                        <RadioCard key={index} {...radio}>
                            <AccountCard account={account} actionable={false} />
                        </RadioCard>
                    );
                })}
            </SimpleGrid>
            <Center mt={10}>
                <Button colorScheme='blue' isDisabled={!nextEnabled} size='lg' rounded='full' onClick={moveStep} w={{sm: '50%', base: '100%'}}>
                    Suivant
                </Button>
            </Center>
        </>
    );
};

interface TransferAddStepOneProps {
    updateAccount: (a: string, b: AccountModelType[]) => void,
    moveStep: () => void,
    selectedAccount?: AccountModelType,
}

export default TransferAddStepOne;