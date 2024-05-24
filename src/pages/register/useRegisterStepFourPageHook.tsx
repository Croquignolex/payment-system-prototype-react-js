import {VerifyPhoneFormType} from "../../types/pages/authTypes";

const useRegisterStepTreePageHook = (moveStep: (a: boolean) => void, updatePhone: (a: string, b: string) => void): any => {
    const nextAndSAve = (phoneCode: string, phoneNumber: string) => {
        moveStep(true);
        updatePhone(phoneCode, phoneNumber);
    }

    const handleVerifyPhone = ({ phoneCode, phoneNumber }: VerifyPhoneFormType): void => {
        nextAndSAve(phoneCode, phoneNumber);
    };


    return { handleVerifyPhone };
};

export default useRegisterStepTreePageHook;