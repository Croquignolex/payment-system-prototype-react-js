import React, {ReactElement, FC} from 'react';
import {Input, FormLabel, FormErrorMessage, FormControl} from "@chakra-ui/react";
import {Field} from "formik";

import {FieldType} from "../../types/FieldType";

const TextField: FC<FieldType> = ({label, name, isInvalid, errorMessage}): ReactElement => {
    return (
        <>
            <FormControl isInvalid={isInvalid}>
                <FormLabel>{label}</FormLabel>

                <Field as={Input} name={name} type="text" />

                <FormErrorMessage>{errorMessage}</FormErrorMessage>
            </FormControl>
        </>
    );
};

export default TextField;