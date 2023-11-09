import {useMemo} from "react";

import countriesJSON from "../assets/json/countries.json";
import currenciesJSON from "../assets/json/currencies.json";
import contactTypesJSON from "../assets/json/contact-types.json";
import {FormSelectOptionType} from "../types/othersTypes";

const useJsonFileHook = (): any => {
    const countriesData: FormSelectOptionType[] = useMemo((): FormSelectOptionType[] => (
        countriesJSON.map((country: { name: string, code: string }): FormSelectOptionType => ({
            label: country.name,
            key: country.code
        }))
    ), []);

    const contactTypesData: FormSelectOptionType[] = useMemo((): FormSelectOptionType[] => (
        contactTypesJSON.map((contactType: { name: string, code: string }): FormSelectOptionType => ({
            label: contactType.name,
            key: contactType.code
        }))
    ), []);

    const currenciesData: FormSelectOptionType[] = useMemo((): FormSelectOptionType[] => (
        currenciesJSON.map((currency: { name: string, code: string }): FormSelectOptionType => ({
            label: currency.name,
            key: currency.code
        }))
    ), []);

    return { countriesData, contactTypesData, currenciesData };
};

export default useJsonFileHook;