import React, {FC, ReactElement} from "react";
import {FiArrowLeft, FiUser} from "react-icons/fi";
import {Form, Formik, FormikProps} from "formik";
import {Button, Center, Text, Container, Box, Flex, Divider, Avatar, HStack} from "@chakra-ui/react";

import useTransferAddStepTreeHook from "./useTransferAddStepTreeHook";
import TextField from "../../components/form/TextField";
import SelectField from "../../components/form/SelectField";
import {ChooseAmountAndCurrencyFormType} from "../../types/pages/transfersTypes";
import {chooseAmountAndCurrencySchema} from "./transfertPagesData";

const TransferAddStepTree: FC<TransferAddStepTreeProps> = ({moveStep, selectedAmount, selectedCurrency, updateAmountAndCurrency}): ReactElement => {
    const { currenciesData, handleChooseAmountAndCurrency } = useTransferAddStepTreeHook(moveStep, updateAmountAndCurrency);

    return (
        <>
            <strong>Entrez le montant</strong>
            <Formik initialValues={{currency: selectedCurrency, amount: selectedAmount.toString()}} validationSchema={chooseAmountAndCurrencySchema} onSubmit={handleChooseAmountAndCurrency} enableReinitialize>
                {(props: FormikProps<ChooseAmountAndCurrencyFormType>) => (
                    <Form>
                        <Container maxW={"xl"} p={4} borderWidth='1px' borderRadius='3xl'>
                            <Flex>
                                <Box mb={4}>
                                    <SelectField
                                        label="Dévise"
                                        name="currency"
                                        values={currenciesData}
                                        isInvalid={!!props.errors.currency && !!props.touched.currency}
                                        errorMessage={props.errors.currency}
                                    />
                                </Box>
                                <Box mx={3} />
                                <Box mb={4}>
                                    <TextField
                                        label="Montant"
                                        name="amount"
                                        isInvalid={!!props.errors.amount && !!props.touched.amount}
                                        errorMessage={props.errors.amount}
                                    />
                                </Box>
                            </Flex>
                            <Divider my={4} />
                            <Flex>
                                <Box w={{base: '50%'}} fontWeight="bold">
                                    {+(props.values.amount) * 0.01} {props.values.currency}
                                </Box>
                                <Box w={{base: '50%'}} textAlign='right'>
                                    Frais de compte
                                </Box>
                            </Flex>
                            <Flex>
                                <Box w={{base: '50%'}} fontWeight="bold">
                                    {+(props.values.amount) * 0.01} {props.values.currency}
                                </Box>
                                <Box w={{base: '50%'}} textAlign='right'>
                                    Frais de service
                                </Box>
                            </Flex>
                            <Flex>
                                <Box w={{base: '50%'}} fontWeight="bold">
                                    {+(props.values.amount) * 0.02} {props.values.currency}
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
                                    <strong>{+(props.values.amount) + (+(props.values.amount) * 0.02)} {props.values.currency}</strong>
                                </Box>
                            </HStack>
                        </Container>
                        <Center mt={10}>
                            <Button
                                colorScheme='blue'
                                size='lg'
                                rounded='full'
                                w={{sm: '50%', base: '100%'}}
                                type='submit'
                            >
                                Suivant
                            </Button>
                        </Center>
                    </Form>
                )}
            </Formik>
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
    selectedAmount: number,
    selectedCurrency: string,
}

export default TransferAddStepTree;