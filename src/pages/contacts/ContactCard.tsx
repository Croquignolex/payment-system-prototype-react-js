import React, {FC, ReactElement} from "react";
import {FiUser} from "react-icons/fi";
import {Box, Flex, Card, CardHeader, Avatar, Heading, IconButton, Text, AvatarGroup} from "@chakra-ui/react";
import {BsThreeDotsVertical} from "react-icons/bs";

import {ContactModelType} from "../../types/modelsTypes";
import {getCountryFromCode, paymentTypeIcon} from "../../helpers/generalHelpers";

const ContactCard: FC<ContactCardProps> = ({ contact }): ReactElement | null => {
    if(contact === null || contact === undefined) {
        return null;
    }

    return (
        <Card variant='outline'>
            <CardHeader>
                <Flex>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <AvatarGroup>
                            <Avatar bg='gray.200' icon={<FiUser fontSize='1.5rem' color='black'/>} />
                            <Avatar size='sm' src={paymentTypeIcon(contact.recipientType)} />
                        </AvatarGroup>

                        <Box>
                            <Heading size='sm'>{contact.firstName} {contact.lastName}</Heading>
                            <Text>{contact.emailAddress}</Text>
                            <Text>{contact.phoneNumber}</Text>
                            <Text>{contact.currencyCode} | {getCountryFromCode(contact.countryCode)}</Text>
                        </Box>
                    </Flex>
                    <IconButton
                        variant='ghost'
                        colorScheme='gray'
                        aria-label='See menu'
                        icon={<BsThreeDotsVertical />}
                    />
                </Flex>
            </CardHeader>
        </Card>
    );
};

interface ContactCardProps {
    contact?: ContactModelType,
}

export default ContactCard;