import React, {ReactElement} from "react";
import {Box, Stack, Flex, Button} from "@chakra-ui/react";
import {Link} from "react-router-dom";

import {routes} from "../../constants/routeConstants";
import SearchField from "../../components/form/SearchField";

const AccountsPage = (): ReactElement => {
    // const { isLoading, contacts, alertData } = useContactsPageHook();

    return (
        <Stack>
            {/*<Loader isLoading={isLoading} />*/}
            {/*<DisplayAlert data={alertData} />*/}
             <Stack>
                 <Flex>
                     <Box flex={4}>
                         <SearchField name="seach" />
                     </Box>
                     <Box mx={1} />
                     <Box flex={1}>
                         <Button colorScheme='blue' variant='outline' as={Link} to={routes.addAccount.path} rounded='full' size='lg'>
                             Ajouter un compte
                         </Button>
                     </Box>
                 </Flex>
             </Stack>
        </Stack>
    );
};

export default AccountsPage;