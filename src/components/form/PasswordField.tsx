import React, { ReactElement, FC, useState } from "react";
import {
    Input,
    FormLabel,
    FormErrorMessage,
    FormControl,
    InputGroup,
    InputRightElement,
    Icon,
    IconButton
} from "@chakra-ui/react";
import { Field } from "formik";
import {FiAlertCircle, FiEye, FiEyeOff} from "react-icons/fi";

import { FormFieldProps } from "../../types/othersTypes";

const PasswordField: FC<FormFieldProps> = ({ label, name, noLabel = false, isInvalid, errorMessage }): ReactElement => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <FormControl isInvalid={isInvalid} mb={6}>
            {!noLabel && <FormLabel fontSize='md' fontWeight='normal'>{label}</FormLabel>}

            <InputGroup>
                <InputRightElement>
                    <IconButton
                        h='1.75rem'
                        mt={2}
                        variant="text"
                        aria-label={ showPassword ? 'Mask password' : 'Reveal password' }
                        icon={ showPassword ? <FiEyeOff /> : <FiEye /> }
                        onClick={ () => setShowPassword(!showPassword) }
                    />
                </InputRightElement>

                <Field as={Input} name={name} type={ showPassword ? 'text' : 'password' } size='lg' borderColor="black" />
            </InputGroup>

            <FormErrorMessage><Icon mr="2" as={FiAlertCircle} /> {errorMessage}</FormErrorMessage>
        </FormControl>
    );
};

export default PasswordField;