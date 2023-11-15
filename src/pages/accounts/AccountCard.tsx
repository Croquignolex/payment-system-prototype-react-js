import React, {FC, ReactElement} from "react";
import {Box, Flex, Card, CardHeader, Avatar, Heading, IconButton, Text} from "@chakra-ui/react";
import {BsThreeDotsVertical} from "react-icons/bs";

import {AccountModelType} from "../../types/modelsTypes";
import {getCountryFromCode, paymentTypeIcon} from "../../helpers/generalHelpers";

const AccountCard: FC<AccountCardProps> = ({ actionable = true, account }): ReactElement | null => {
    if(account === null || account === undefined) {
        return null;
    }

    return (
        <Card variant='outline'>
            <CardHeader>
                <Flex>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar size={"lg"} src={paymentTypeIcon(account.payerType)} />

                        <Box>
                            <Heading size='sm'>{account.firstName} {account.lastName}</Heading>
                            <Text>{account.emailAddress}</Text>
                            <Text>{account.phoneNumber}</Text>
                            <Text>{account.currencyCode} | {getCountryFromCode(account.countryCode)}</Text>
                        </Box>
                    </Flex>
                    {(actionable) && (
                        <IconButton
                            variant='ghost'
                            colorScheme='gray'
                            aria-label='See menu'
                            icon={<BsThreeDotsVertical />}
                        />
                    )}
                </Flex>
            </CardHeader>
        </Card>
    );
};

interface AccountCardProps {
    actionable?: boolean,
    account?: AccountModelType,
}

export default AccountCard;