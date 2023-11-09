import React, { ReactElement, FC } from "react";
import {Input, InputGroup, InputLeftElement, IconButton} from "@chakra-ui/react";
import {FiSearch} from "react-icons/fi";

const SearchField: FC<SearchFieldProps> = ({ name }): ReactElement => {
    return (
        <InputGroup>
            <InputLeftElement>
                <IconButton
                    h='1.75rem'
                    mt={2}
                    variant="text"
                    aria-label={name}
                    icon={ <FiSearch /> }
                />
            </InputLeftElement>

            <Input type='text' name={name} size='lg' borderColor="black" rounded="full" />

        </InputGroup>
    );
};

export interface SearchFieldProps {
    name: string
}

export default SearchField;