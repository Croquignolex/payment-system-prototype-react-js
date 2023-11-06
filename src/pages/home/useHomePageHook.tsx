import {useContext, useEffect} from "react";
import {useLocation} from "react-router-dom";
import {CreateToastFnReturn, useToast} from "@chakra-ui/react";

import { UserContext } from "../../components/UserContext";

const useHomePageHook = (): any => {
    const { state: locationState } = useLocation();
    const toast: CreateToastFnReturn = useToast();
    const { globalState } = useContext(UserContext);

    const toastID: string = 'welcome-toast';

    useEffect((): void => {
        if(locationState?.welcomeAlert) {
            if (!toast.isActive(toastID)) {
                toast({id: toastID, title: `Bienvenue ${globalState.firstName}`});
            }
        }
    }, []);
};

export default useHomePageHook;