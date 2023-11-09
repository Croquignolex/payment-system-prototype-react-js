import {useMemo} from "react";

import countriesJSON from "../assets/json/countries.json";
import currenciesJSON from "../assets/json/currencies.json";
import contactTypesJSON from "../assets/json/contact-types.json";
import accountTypesJSON from "../assets/json/account-types.json";
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

    const accountTypesData: FormSelectOptionType[] = useMemo((): FormSelectOptionType[] => (
        accountTypesJSON.map((accountType: { name: string, code: string }): FormSelectOptionType => ({
            label: accountType.name,
            key: accountType.code
        }))
    ), []);

    const currenciesData: FormSelectOptionType[] = useMemo((): FormSelectOptionType[] => (
        currenciesJSON.map((currency: { name: string, code: string }): FormSelectOptionType => ({
            label: currency.name,
            key: currency.code
        }))
    ), []);

    return { countriesData, contactTypesData, accountTypesData, currenciesData };
};

export default useJsonFileHook;