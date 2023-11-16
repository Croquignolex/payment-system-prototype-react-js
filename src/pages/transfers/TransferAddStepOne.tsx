import React, {FC, ReactElement} from "react";
import {SimpleGrid, Button, Center} from "@chakra-ui/react";

import {AccountModelType} from "../../types/modelsTypes";
import AccountCard from "../accounts/AccountCard";
import Loader from "../../components/Loader";
import DisplayAlert from "../../components/DisplayAlert";
import RadioCard from "../../components/RadioCard";
import useTransferAddStepOneHook from "./useTransferAddStepOneHook";

const TransferAddStepOne: FC<TransferAddStepOneProps> = ({moveStep, selectedAccount, updateAccount}): ReactElement => {
    const { isLoading, alertData, accounts, group, selectedAccountID, nextAndSAve, getRadioProps } = useTransferAddStepOneHook(moveStep, selectedAccount, updateAccount);

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
                <Button
                    colorScheme='blue'
                    isDisabled={selectedAccountID === undefined}
                    size='lg'
                    rounded='full'
                    w={{sm: '50%', base: '100%'}}
                    onClick={nextAndSAve}
                >
                    Suivant
                </Button>
            </Center>
        </>
    );
};

interface TransferAddStepOneProps {
    updateAccount: (b?: AccountModelType) => void,
    moveStep: () => void,
    selectedAccount?: AccountModelType,
}

export default TransferAddStepOne;