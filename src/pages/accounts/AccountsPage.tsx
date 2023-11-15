import React, {ReactElement} from "react";
import {Box, Stack, Flex, Button, SimpleGrid} from "@chakra-ui/react";
import {Link} from "react-router-dom";

import {routes} from "../../constants/routeConstants";
import SearchField from "../../components/form/SearchField";
import {AccountModelType} from "../../types/modelsTypes";
import Loader from "../../components/Loader";
import DisplayAlert from "../../components/DisplayAlert";
import useAccountsPageHook from "./useAccountsPageHook";
import AccountCard from "./AccountCard";

const AccountsPage = (): ReactElement => {
    const { isLoading, accounts, alertData } = useAccountsPageHook();

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
                         <Button colorScheme='blue' variant='outline' as={Link} to={routes.addAccount.path} rounded='full' size='lg'>
                             Ajouter un compte
                         </Button>
                     </Box>
                 </Flex>
             </Stack>

            <SimpleGrid columns={{ lg: 2, sm: 2}} spacing={4} mt={4}>
                {accounts.map((account: AccountModelType): ReactElement => <AccountCard account={account} />)}
            </SimpleGrid>
        </Stack>
    );
};

export default AccountsPage;