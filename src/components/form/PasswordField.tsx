import React, { ReactElement, FC, useState } from "react";
import { Input, FormLabel, FormErrorMessage, FormControl, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { Field } from "formik";
import { FiEye, FiEyeOff } from "react-icons/fi";

import { FormFieldProps } from "../../types/othersTypes";

const PasswordField: FC<FormFieldProps> = ({ label, name, isInvalid, errorMessage }): ReactElement => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <FormControl isInvalid={isInvalid} mt={4}>
            <FormLabel>{label}</FormLabel>

            <InputGroup>
                <InputRightElement>
                    <IconButton
                        variant="text"
                        color={ isInvalid ? 'red.500' : 'blue.500' }
                        aria-label={ showPassword ? 'Mask password' : 'Reveal password' }
                        icon={ showPassword ? <FiEyeOff /> : <FiEye /> }
                        onClick={ () => setShowPassword(!showPassword) }
                    />
                </InputRightElement>
                <Field as={Input} name={name} type={ showPassword ? 'text' : 'password' } />
            </InputGroup>

            <FormErrorMessage>{errorMessage}</FormErrorMessage>
        </FormControl>
    );
};

export default PasswordField;