import {useEffect, useMemo, useState} from "react";
import {useNavigate, NavigateFunction, useLocation} from "react-router-dom";

import { routes } from "../../constants/routeConstants";
import {ChooseCountryFormType} from "../../types/pages/authTypes";
import {FormSelectOptionType} from "../../types/othersTypes";

import countriesJSON from "../../assets/json/countries.json";

const useRegisterStepOnePageHook = (): any => {
    const navigate: NavigateFunction = useNavigate();
    const { state: locationState } = useLocation();

    const [chooseCountryInitialValues, setChooseCountryInitialValues] = useState<ChooseCountryFormType>({country: ''} );

    const backState: any = {trustedData: true, email: locationState?.email};

    const countriesData: FormSelectOptionType[] = useMemo((): FormSelectOptionType[] => (
        countriesJSON.map((country: { name: string, code: string }): FormSelectOptionType => ({
            label: country.name,
            key: country.code
        }))
    ), []);

    useEffect((): void => {
        if(!locationState?.trustedData) {
            navigate(routes.register.path);
        }

        if(locationState?.trustedData) {
            setChooseCountryInitialValues({country: locationState?.country});
        }
    });

    const handleChooseCountry = ({ country }: ChooseCountryFormType): void => {
        navigate(routes.registerStepTwo.path, {state: { trustedData: true, email: locationState?.email, country }});
    };

    return { handleChooseCountry, chooseCountryInitialValues, countriesData, backState };
};

export default useRegisterStepOnePageHook;