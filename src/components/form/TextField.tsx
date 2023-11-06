import React, { ReactElement, FC } from "react";
import {Input, FormLabel, FormErrorMessage, FormControl, Icon} from "@chakra-ui/react";
import { Field } from "formik";

import { FormFieldProps } from "../../types/othersTypes";
import {FiAlertCircle} from "react-icons/fi";

const TextField: FC<FormFieldProps> = ({ label = '', name, noLabel = false, isInvalid, errorMessage }): ReactElement => {
    return (
        <FormControl isInvalid={isInvalid} mt={4}>
            {!noLabel && <FormLabel fontSize='md' fontWeight='normal'>{label}</FormLabel>}

            <Field as={Input} name={name} type="text" size='lg' borderColor="black" />

            <FormErrorMessage><Icon mr="2" as={FiAlertCircle} /> {errorMessage}</FormErrorMessage>
        </FormControl>
    );
};

export default TextField;