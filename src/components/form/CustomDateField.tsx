import React, { ReactElement, FC } from "react";
import {Input, FormLabel, FormErrorMessage, FormControl, HStack, Select} from "@chakra-ui/react";
import { Field } from "formik";

const CustomDateField: FC<FormCustomDateFieldProps> = ({ label = '', day, month, year, noLabel = false, isInvalid, errorMessage }): ReactElement => {
    return (
        <FormControl isInvalid={isInvalid} mt={4}>
            {!noLabel && <FormLabel fontSize='md' fontWeight='normal'>{label}</FormLabel>}

            <HStack spacing={2}>
                <Field as={Input} name={day} type="text" placeholder="DD" size='lg' w="20%" />

                <Field as={Select} placeholder='Mois' name={month} size='lg' w="50%">
                    {months.map((month: string, index: number) => (
                        <option value={index}>{month}</option>
                    ))}
                </Field>

                <Field as={Input} name={year} type="text" placeholder="YYYY" size='lg' w="30%" />
            </HStack>

            <FormErrorMessage>{errorMessage}</FormErrorMessage>
        </FormControl>
    );
};

const months: string[] = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];

interface FormCustomDateFieldProps {
    label?: string;
    day: string,
    month: string,
    year: string,
    noLabel?: boolean;
    isInvalid: boolean;
    errorMessage?: string;
}

export default CustomDateField;