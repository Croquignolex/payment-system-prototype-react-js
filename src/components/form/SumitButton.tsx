import React, { ReactElement, FC } from "react";
import {Button, Stack} from "@chakra-ui/react";

const SubmitButton: FC<FormSubmitButtonProps> = ({ label = 'Confirmer', colorScheme = 'blue', variant = 'solid', isLoading = false }): ReactElement => {
    return (
        <Stack mt={10}>
            <Button colorScheme={colorScheme} variant={variant} isLoading={isLoading} type='submit' size='lg' rounded='full'>
                {label}
            </Button>
        </Stack>
    );
};

interface FormSubmitButtonProps {
    label?: string;
    colorScheme?: string,
    variant?: string,
    isLoading?: boolean;
}

export default SubmitButton;