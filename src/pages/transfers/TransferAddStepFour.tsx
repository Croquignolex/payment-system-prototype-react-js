import React, {FC, ReactElement} from "react";
import {FiArrowLeft, FiChevronsRight, FiUser} from "react-icons/fi";
import {Container, Avatar, Box, Button, Center, Divider, Flex, HStack, Text} from "@chakra-ui/react";

import useTransferAddStepFourHook from "./useTransferAddStepFourHook";
import {transferDataType} from "../../types/othersTypes";
import AccountCard from "../accounts/AccountCard";
import ContactCard from "../contacts/ContactCard";
import Loader from "../../components/Loader";
import DisplayAlert from "../../components/DisplayAlert";

const TransferAddStepFour: FC<TransferAddStepFourProps> = ({moveStep, transferData}): ReactElement => {
    const {isLoading, alertData, handleTransferAdd} = useTransferAddStepFourHook(transferData);
console.log({alertData})
    return (
        <>
            <strong>Confirmation</strong>
            <Loader isLoading={isLoading} />
            <DisplayAlert data={alertData} />
            <Center>
                <HStack spacing={1}>
                    <AccountCard account={transferData.account} actionable={false} />
                    <FiChevronsRight fontSize="2em" />
                    <FiChevronsRight fontSize="2em" />
                    <FiChevronsRight fontSize="2em" />
                    <ContactCard contact={transferData.contact} actionable={false} />
                </HStack>
            </Center>
            <Container maxW={"xl"} p={4} borderWidth='1px' borderRadius='3xl'>
                <Flex>
                    <Box w={{base: '50%'}} fontWeight="bold">
                        {transferData.amount * 0.01} {transferData.currency}
                    </Box>
                    <Box w={{base: '50%'}} textAlign='right'>
                        Frais de compte
                    </Box>
                </Flex>
                <Flex>
                    <Box w={{base: '50%'}} fontWeight="bold">
                        {transferData.amount * 0.01} {transferData.currency}
                    </Box>
                    <Box w={{base: '50%'}} textAlign='right'>
                        Frais de service
                    </Box>
                </Flex>
                <Flex>
                    <Box w={{base: '50%'}} fontWeight="bold">
                        {transferData.amount * 0.02} {transferData.currency}
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
                        <strong>{transferData.amount + (transferData.amount * 0.02)} {transferData.currency}</strong>
                    </Box>
                </HStack>
            </Container>
            <Center mt={10}>
                <Button
                    colorScheme='blue'
                    size='lg'
                    rounded='full'
                    w={{sm: '50%', base: '100%'}}
                    onClick={handleTransferAdd}
                >
                    Valider
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

interface TransferAddStepFourProps {
    moveStep: (a: boolean) => void,
    transferData: transferDataType,
}

export default TransferAddStepFour;