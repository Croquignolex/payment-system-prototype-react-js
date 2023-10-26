import React, { ReactElement, useContext } from "react";
import { Box, Heading } from '@chakra-ui/react'

const Home = (): ReactElement => {
    return (
        <Box textAlign="center" py={10} px={6}>
            <Heading as="h2" size="xl" mt={6} mb={2} color={"blue.500"}>
                Bienvenue
            </Heading>
        </Box>
    )
}

export default Home;