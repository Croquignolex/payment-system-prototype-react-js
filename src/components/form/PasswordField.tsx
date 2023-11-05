import React, { ReactElement, FC, useState } from "react";
import {
    Input,
    FormLabel,
    FormErrorMessage,
    FormControl,
    InputGroup,
    InputRightElement,
    IconButton,
    Button
} from "@chakra-ui/react";
import { Field } from "formik";
import { FiEye, FiEyeOff } from "react-icons/fi";

import { FormFieldProps } from "../../types/othersTypes";

const PasswordField: FC<FormFieldProps> = ({ label, name, noLabel = false, isInvalid, errorMessage }): ReactElement => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <FormControl isInvalid={isInvalid} mt={4}>
            {!noLabel && <FormLabel fontSize='md' fontWeight='normal'>{label}</FormLabel>}

            <InputGroup>
                {/*<InputRightElement>*/}
                {/*    <Button colorScheme={'blue'} variant={'solid'} mt={2} mr={2} p={4}>Hide</Button>*/}
                {/*   /!* <IconButton*/}
                {/*        variant="text"*/}
                {/*        color={ isInvalid ? 'red.500' : 'blue.500' }*/}
                {/*        aria-label={ showPassword ? 'Mask password' : 'Reveal password' }*/}
                {/*        icon={ showPassword ? <FiEyeOff /> : <FiEye /> }*/}
                {/*        onClick={ () => setShowPassword(!showPassword) }*/}
                {/*    />*!/*/}
                {/*</InputRightElement>*/}
                <InputRightElement width='4rem'>
                    <Button h='1.75rem' mt={2} size='sm' color='blue.500' onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                    </Button>
                </InputRightElement>

                <Field as={Input} name={name} type={ showPassword ? 'text' : 'password' } placeholder={label} size='lg' />
            </InputGroup>

            <FormErrorMessage>{errorMessage}</FormErrorMessage>
        </FormControl>
    );
};

export default PasswordField;