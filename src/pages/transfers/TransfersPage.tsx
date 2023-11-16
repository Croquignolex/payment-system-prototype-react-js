import React, {ReactElement} from "react";
import {Link} from "react-router-dom";
import {Box, Button, Flex, Stack} from "@chakra-ui/react";

import SearchField from "../../components/form/SearchField";
import {routes} from "../../constants/routeConstants";

const TransfersPage = (): ReactElement => {
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
                        <Button colorScheme='blue' variant='outline' as={Link} to={routes.addTransfer.path} rounded='full' size='lg'>
                            Envoyer de l'argent
                        </Button>
                    </Box>
                </Flex>
            </Stack>
        </Stack>
    );
};

export default TransfersPage;