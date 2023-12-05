import {useEffect, useState} from "react";

import {CheckEmailFormType} from "../../types/pages/authTypes";

const useRegisterStepOnePageHook = (moveStep: () => void, selectedEmail: string, updateEmail: (b: string) => void): any => {
    const [checkEmailInitialValues, setCheckEmailInitialValues] = useState<CheckEmailFormType>({email: ''} );

    useEffect((): void => {
        setCheckEmailInitialValues({email: selectedEmail});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const nextAndSAve = (email: string) => {
        moveStep();
        updateEmail(email);
    }

    const handleCheckEmail = ({ email }: CheckEmailFormType): void => {
        nextAndSAve(email);
    };

    return { handleCheckEmail, checkEmailInitialValues };
};

export default useRegisterStepOnePageHook;