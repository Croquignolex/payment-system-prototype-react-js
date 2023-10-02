import React, { ReactElement, FC } from "react";
import { Input, FormLabel, FormErrorMessage, FormControl } from "@chakra-ui/react";
import { Field } from "formik";

import { FormFieldProps } from "../../types/othersTypes";

const TextField: FC<FormFieldProps> = ({ label, name, isInvalid, errorMessage }): ReactElement => {
    return (
        <FormControl isInvalid={isInvalid} mt={4}>
            <FormLabel>{label}</FormLabel>

            <Field as={Input} name={name} type="text" />

            <FormErrorMessage>{errorMessage}</FormErrorMessage>
        </FormControl>
    );
};

export default TextField;