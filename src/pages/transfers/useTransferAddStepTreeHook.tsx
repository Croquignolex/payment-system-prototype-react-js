import useJsonFileHook from "../../hooks/useJsonFileHook";
import {ChooseAmountAndCurrencyFormType} from "../../types/pages/transfersTypes";

const useTransferAddStepFourPageHook = (moveStep: (a: boolean) => void, updateAmountAndCurrency: (a: number, b: string) => void): any => {
    const { currenciesData } = useJsonFileHook();

    const handleChooseAmountAndCurrency = ({ currency, amount }: ChooseAmountAndCurrencyFormType): void => {
        moveStep(true);
        const numericAmount: number = +amount;
        updateAmountAndCurrency(numericAmount, currency);
    }

    return { currenciesData, handleChooseAmountAndCurrency };
};

export default useTransferAddStepFourPageHook;