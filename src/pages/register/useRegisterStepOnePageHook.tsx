import {CheckEmailFormType} from "../../types/pages/authTypes";

const useRegisterStepOnePageHook = (moveStep: () => void, updateEmail: (b: string) => void): any => {
    const nextAndSAve = (email: string) => {
        moveStep();
        updateEmail(email);
    }

    const handleCheckEmail = ({ emailAddress }: CheckEmailFormType): void => {
        nextAndSAve(emailAddress);
    };

    return { handleCheckEmail };
};

export default useRegisterStepOnePageHook;