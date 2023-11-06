import React, { ReactElement, FC } from "react";
import { Input, FormLabel, FormControl } from "@chakra-ui/react";
import { Field } from "formik";

import {FormDisabledFieldProps} from "../../types/othersTypes";

const TextDisabledField: FC<FormDisabledFieldProps> = ({ label, name, noLabel = false }): ReactElement => {
    return (
        <FormControl mt={4}>
            {!noLabel && <FormLabel fontSize='md' fontWeight='normal'>{label}</FormLabel>}

            <Field as={Input} name={name} type="text" size='lg' borderColor="black" disabled />
        </FormControl>
    );
};

export default TextDisabledField;