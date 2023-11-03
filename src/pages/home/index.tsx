import React, {ReactElement} from "react";
import { Box } from '@chakra-ui/react'
import DisplayAlert from "../../components/DisplayAlert";
import useHomePageHook from "./useHomePageHook";

const Home = (): ReactElement => {
    const { welcomeAlertData } = useHomePageHook();

    return (
        <Box textAlign="center" py={10} px={6}>
            <DisplayAlert data={welcomeAlertData} />
            {/*<Heading as="h2" size="xl" mt={6} mb={2} color={"blue.500"}>
                Bienvenue
            </Heading>*/}
        </Box>
    )
}

export default Home;