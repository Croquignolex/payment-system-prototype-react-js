import {ChooseNamesFormType} from "../../types/pages/authTypes";

const useRegisterStepTwoPageHook = (moveStep: (a: boolean) => void, updateNames: (a: string, b: string) => void): any => {
    const nextAndSAve = (firstName: string, lastName: string) => {
        moveStep(true);
        updateNames(firstName, lastName);
    }

    const handleChooseNames = ({ firstName, lastName }: ChooseNamesFormType): void => {
        nextAndSAve(firstName, lastName);
    };

    return { handleChooseNames };
};

export default useRegisterStepTwoPageHook;