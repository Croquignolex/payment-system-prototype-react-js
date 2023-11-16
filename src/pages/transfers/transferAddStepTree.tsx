import React, {FC, ReactElement} from "react";
import {FiArrowLeft, FiUser} from "react-icons/fi";
import {Button, Center, Text, Container, FormLabel, Input,
    FormControl, Select, Box, Flex, Divider, Avatar, HStack
} from "@chakra-ui/react";

import useTransferAddStepTreeHook from "./useTransferAddStepTreeHook";
import {FormSelectOptionType} from "../../types/othersTypes";

const TransferAddStepTree: FC<TransferAddStepTreeProps> = ({moveStep, amount, currency, updateAmountAndCurrency}): ReactElement => {
    const { currenciesData, nextAndSAve, amountInput, currencySelect, handleAmountInput, handleCurrencySelect } = useTransferAddStepTreeHook(moveStep, amount, currency, updateAmountAndCurrency);

    return (
        <>
            <strong>Entrez le montant</strong>
            <Container maxW={"xl"} p={4} borderWidth='1px' borderRadius='3xl'>
                <Flex>
                    <FormControl mb={4}>
                        <FormLabel fontSize='md' fontWeight='normal'>Dévise</FormLabel>
                        <Select name="currency" size='lg' rounded='lg' borderColor="black" onChange={handleCurrencySelect} value={currencySelect}>
                            <option value=''>Choisir</option>
                            {currenciesData.map((item: FormSelectOptionType) => (
                                <option value={item.key}>{item.label}</option>
                            ))}
                        </Select>
                    </FormControl>
                    <Box mx={3} />
                    <FormControl mb={4}>
                        <FormLabel fontSize='md' fontWeight='normal'>Montant</FormLabel>
                        <Input name='amount' type="text" size='lg' borderColor="black" rounded='lg' value={amountInput} onChange={handleAmountInput} />
                    </FormControl>
                </Flex>
                <Divider my={4} />
                <Flex>
                    <Box w={{base: '50%'}} fontWeight="bold">
                        {amountInput * 0.01} {currencySelect}
                    </Box>
                    <Box w={{base: '50%'}} textAlign='right'>
                        Frais de compte
                    </Box>
                </Flex>
                <Flex>
                    <Box w={{base: '50%'}} fontWeight="bold">
                        {amountInput * 0.01} {currencySelect}
                    </Box>
                    <Box w={{base: '50%'}} textAlign='right'>
                        Frais de service
                    </Box>
                </Flex>
                <Flex>
                    <Box w={{base: '50%'}} fontWeight="bold">
                        {amountInput * 0.02} {currencySelect}
                    </Box>
                    <Box w={{base: '50%'}} textAlign='right'>
                        Frais total
                    </Box>
                </Flex>
                <Divider my={4} />
                <HStack>
                    <Avatar bg='gray.200' icon={<FiUser fontSize='1.5rem' color='black'/>} />
                    <Box>
                        <Text>Vous allez envoyer</Text>
                        <strong>{amountInput + (amountInput * 0.02)} {currencySelect}</strong>
                    </Box>
                </HStack>
            </Container>
            <Center mt={10}>
                <Button
                    colorScheme='blue'
                    size='lg'
                    rounded='full'
                    w={{sm: '50%', base: '100%'}}
                    onClick={nextAndSAve}
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

interface TransferAddStepTreeProps {
    updateAmountAndCurrency: (a: number, b: string) => void,
    moveStep: (a: boolean) => void,
    amount: number,
    currency: string,
}

export default TransferAddStepTree;