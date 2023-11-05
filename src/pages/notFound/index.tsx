import React, { ReactElement } from "react";
import { Heading, Text } from "@chakra-ui/react";

const NotFoundPage = (): ReactElement => {
    return (
        <>
            <Heading
                display="inline-block"
                as="h1"
                size="4xl"
                backgroundColor="blue.500"
                backgroundClip="text"
            >
                404
            </Heading>
            <Text fontSize="18px" mt={3} mb={2}>
                Page introuvable
            </Text>
            <Text mb={6}>
                La page que vous cherchez semble ne pas exister
            </Text>
        </>
    )
}

export default NotFoundPage;