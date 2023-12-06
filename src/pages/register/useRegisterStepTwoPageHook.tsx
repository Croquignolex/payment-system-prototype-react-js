import {useMemo} from "react";

import {ChooseCountryFormType} from "../../types/pages/authTypes";
import {FormSelectOptionType} from "../../types/othersTypes";
import countriesJSON from "../../assets/json/countries.json";

const useRegisterStepTwoPageHook = (moveStep: (a: boolean) => void, updateCountry: (b: string) => void): any => {
    const countriesData: FormSelectOptionType[] = useMemo((): FormSelectOptionType[] => (
        countriesJSON.map((country: { name: string, code: string }): FormSelectOptionType => ({
            label: country.name,
            key: country.code
        }))
    ), []);

    const nextAndSAve = (country: string) => {
        moveStep(true);
        updateCountry(country);
    }

    const handleChooseCountry = ({ country }: ChooseCountryFormType): void => {
        nextAndSAve(country);
    };

    return { handleChooseCountry, countriesData };
};

export default useRegisterStepTwoPageHook;