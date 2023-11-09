import React, { ReactElement, FC } from "react";
import {Input, FormLabel, FormErrorMessage, FormControl, HStack, Icon} from "@chakra-ui/react";
import { Field } from "formik";
import {FiAlertCircle} from "react-icons/fi";

import {FormCustomDisabledPhoneFieldProps} from "../../types/othersTypes";

const CustomPhoneField: FC<FormCustomPhoneFieldProps> = ({ label = '', code, number, noLabel = false, isInvalid, errorMessage }): ReactElement => {
    return (
        <FormControl isInvalid={isInvalid} mb={4}>
            {!noLabel && <FormLabel fontSize='md' fontWeight='normal'>{label}</FormLabel>}

            <HStack spacing={2}>
                <Field as={Input} name={code} type="text" placeholder="Indice" size='lg' rounded='lg' borderColor="black" w="30%" />

                <Field as={Input} name={number} type="text" placeholder="Numéro" size='lg' rounded='lg' borderColor="black" w="70%" />
            </HStack>

            <FormErrorMessage><Icon mr="2" as={FiAlertCircle} /> {errorMessage}</FormErrorMessage>
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