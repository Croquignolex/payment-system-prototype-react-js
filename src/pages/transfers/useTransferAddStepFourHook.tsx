import {NavigateFunction, useNavigate} from "react-router-dom";
import {CreateToastFnReturn, useToast} from "@chakra-ui/react";

const useTransferAddStepFourPageHook = (): any => {
    const navigate: NavigateFunction = useNavigate();
    const toast: CreateToastFnReturn = useToast();

    return {toast, navigate};
};

export default useTransferAddStepFourPageHook;