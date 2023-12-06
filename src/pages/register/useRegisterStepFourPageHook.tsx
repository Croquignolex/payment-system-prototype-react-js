import {VerifyCodeFormType} from "../../types/pages/authTypes";

const useRegisterStepFourPageHook = (moveStep: (a: boolean) => void): any => {
    const handleCodePhone = ({ code }: VerifyCodeFormType): void => {
        moveStep(true);
    };

    return { handleCodePhone };
};

export default useRegisterStepFourPageHook;