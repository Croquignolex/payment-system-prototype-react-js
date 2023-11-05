import React, { ReactElement, FC } from "react";
import {Input, FormLabel, FormErrorMessage, FormControl, HStack} from "@chakra-ui/react";
import { Field } from "formik";

import {FormCustomDisabledPhoneFieldProps} from "../../types/othersTypes";

const CustomPhoneField: FC<FormCustomPhoneFieldProps> = ({ label = '', code, number, noLabel = false, isInvalid, errorMessage }): ReactElement => {
    return (
        <FormControl isInvalid={isInvalid} mt={4}>
            {!noLabel && <FormLabel fontSize='md' fontWeight='normal'>{label}</FormLabel>}

            <HStack spacing={2}>
                <Field as={Input} name={code} type="text" placeholder="Indice" size='lg' w="30%" />

                <Field as={Input} name={number} type="text" placeholder="Numéro" size='lg' w="70%" />
            </HStack>

            <FormErrorMessage>{errorMessage}</FormErrorMessage>
        </FormControl>
    );
};

interface FormCustomPhoneFieldProps extends FormCustomDisabledPhoneFieldProps {
    label?: string;
    noLabel?: boolean;
    isInvalid: boolean;
    errorMessage?: string;
}

export default CustomPhoneField;