import React, {ReactElement, FC, useState} from 'react';
import {Input, FormLabel, FormErrorMessage, FormControl, InputGroup, InputRightElement, IconButton} from "@chakra-ui/react";
import {Field} from "formik";
import {FaEye, FaEyeSlash} from "react-icons/fa";

import {FieldType} from "../../types/FieldType";

const PasswordField: FC<FieldType> = ({label, name, isInvalid, errorMessage}): ReactElement => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <>
            <FormControl isInvalid={isInvalid}>
                <FormLabel>{label}</FormLabel>

                <InputGroup>
                    <InputRightElement>
                        <IconButton
                            variant="text"
                            color={'blue.500'}
                            aria-label={showPassword ? 'Mask password' : 'Reveal password'}
                            icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                            onClick={() => setShowPassword(!showPassword)}
                        />
                    </InputRightElement>
                    <Field as={Input} name={name} type={showPassword ? 'text' : 'password'} />
                </InputGroup>

                <FormErrorMessage>{errorMessage}</FormErrorMessage>
            </FormControl>
        </>
    );
};

export default PasswordField;