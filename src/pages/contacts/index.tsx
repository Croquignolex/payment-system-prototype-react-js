import React, {ReactElement} from "react";
import {Box, Stack, Flex, Button, SimpleGrid} from "@chakra-ui/react";
import {Link} from "react-router-dom";

import {routes} from "../../constants/routeConstants";
import SearchField from "../../components/form/SearchField";
import useContactsPageHook from "./useContactsPageHook";
import Loader from "../../components/Loader";
import DisplayAlert from "../../components/DisplayAlert";
import ContactCard from "./contactCard";
import {ContactModelType} from "../../types/modelsTypes";

const ContactsPage = (): ReactElement => {
    const { isLoading, contacts, alertData } = useContactsPageHook();

    return (
        <Stack>
            <Loader isLoading={isLoading} />
            <DisplayAlert data={alertData} />
            <Stack>
                <Flex>
                    <Box flex={4}>
                        <SearchField name="seach" />
                    </Box>
                    <Box mx={1} />
                    <Box flex={1}>
                        <Button colorScheme='blue' variant='outline' as={Link} to={routes.addContact.path} rounded='full' size='lg'>
                            Ajouter un contact
                        </Button>
                    </Box>
                </Flex>
            </Stack>

            <SimpleGrid columns={{ lg: 2, sm: 2}} spacing={4} mt={4}>
                {contacts.map((contact: ContactModelType): ReactElement => <ContactCard contact={contact} />)}
            </SimpleGrid>
        </Stack>
    );
};

export default ContactsPage;