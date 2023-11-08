import React, {ReactElement} from "react";
import {Box, Stack, HStack, Avatar, Text, Flex, Spacer, Button, Spinner, Center} from "@chakra-ui/react";
import {FiUser} from "react-icons/fi";
import {Link} from "react-router-dom";

import useProfilePageHook from "./useProfilePageHook";
import {routes} from "../../constants/routeConstants";
import DisplayAlert from "../../components/DisplayAlert";
import Loader from "../../components/Loader";

const ProfilePage = (): ReactElement => {
    const { isLoading, globalUserState, globalAddressState, alertData } = useProfilePageHook();

    return (
        <Stack>
            <Loader isLoading={isLoading} />
            <DisplayAlert data={alertData} />
            <HStack>
                <Avatar bg='gray.200' icon={<FiUser fontSize='2rem' color='black'/>} size='lg' />
                <Text as='u' fontWeight='bold' ml={1}>
                    <Link to="#">Ajouter une photo de profil</Link>
                </Text>
            </HStack>
            <Stack mt={4}>
                <Flex>
                    <Text fontSize='1.5rem' fontWeight='bold'>Informations personnelle</Text>
                    <Spacer />
                    <Button colorScheme='blue' variant='outline' as={Link} to={routes.profileEdit.path} rounded='full' size='sm'>
                        Editer mes détails
                    </Button>
                </Flex>
                <Stack as={Box} spacing={4} p={4} borderWidth='1px' borderRadius='3xl'>
                    <Flex>
                        <Box flex='1'>
                            <Box mb={6}>
                                Prénom <br/>
                                <strong>{globalUserState.firstName}</strong>
                            </Box>
                            <Box>
                                Email <br/>
                                <strong>{globalUserState.email}</strong>
                            </Box>
                        </Box>
                        <Box flex='1'>
                            <Box mb={6}>
                                Nom <br/>
                                <strong>{globalUserState.lastName}</strong>
                            </Box>
                            <Box>
                                Téléphone <br/>
                                <strong>{globalUserState.phoneNumber}</strong>
                            </Box>
                        </Box>
                    </Flex>
                </Stack>
            </Stack>
            <Stack mt={4}>
                <Text fontSize='1.5rem' fontWeight='bold'>Addresse personnelle</Text>
                <Stack as={Box} spacing={4} p={4} borderWidth='1px' borderRadius='3xl'>
                    <Flex>
                        <Box flex='1'>
                            <Box mb={6}>
                                Adresse <br/>
                                <strong>{globalAddressState.street}</strong>
                            </Box>
                            <Box>
                                Code postal <br/>
                                <strong>{globalAddressState.zipCode}</strong>
                            </Box>
                        </Box>
                        <Box flex='1'>
                            <Box mb={6}>
                                Ville <br/>
                                <strong>{globalAddressState.city}</strong>
                            </Box>
                            <Box>
                                Pays <br/>
                                <strong>{globalAddressState.country}</strong>
                            </Box>
                        </Box>
                    </Flex>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default ProfilePage;