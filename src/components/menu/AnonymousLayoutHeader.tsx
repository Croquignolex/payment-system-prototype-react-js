import React, {FC, ReactElement} from "react";
import {Box, Container, Flex, Text} from "@chakra-ui/react";

import {appInfo} from "../../constants/envConstants";

const AnonymousLayoutHeader: FC = (): ReactElement => {
    return (
        <Flex h={20} alignItems="center" borderBottomWidth={1}>
            <Container maxW={'6xl'}>
                <Box>
                    <Text fontSize="4xl" fontWeight="bold">
                        {appInfo.name}
                    </Text>
                </Box>
            </Container>
        </Flex>
    );
};

export default AnonymousLayoutHeader;