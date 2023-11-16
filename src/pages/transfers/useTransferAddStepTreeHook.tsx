import {useState} from "react";

import useJsonFileHook from "../../hooks/useJsonFileHook";

const useTransferAddStepFourPageHook = (moveStep: (a: boolean) => void, amount: number, currency: string, updateAmountAndCurrency: (a: number, b: string) => void): any => {
    const { currenciesData } = useJsonFileHook();

    const [amountInput, setAmountInput] = useState<number>(amount);
    const [currencySelect, setCurrencySelect] = useState<string>(currency);

    const handleAmountInput = (data: any): void => {
        setAmountInput(data.target.value);
    }

    const handleCurrencySelect = (data: any): void => {
        setCurrencySelect(data.target.value);
    }

    const nextAndSAve = (): void => {
        moveStep(true);
        updateAmountAndCurrency(amountInput, currencySelect);
    }

    return { currenciesData, nextAndSAve, amountInput, currencySelect, handleAmountInput, handleCurrencySelect };
};

export default useTransferAddStepFourPageHook;