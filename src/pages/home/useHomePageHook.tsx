import {useContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import { UserContext } from "../../components/UserContext";
import {AlertStatusType} from "../../types/enumsTypes";
import {ErrorAlertType} from "../../types/othersTypes";

const useHomePageHook = (): any => {
    const { state: welcomeAlert } = useLocation();
    const [welcomeAlertData, setWelcomeAlertData] = useState<ErrorAlertType | null>(null);
    const { globalState } = useContext(UserContext);

    useEffect((): void => {
        if(welcomeAlert) {
            const message: string = `Bienvenue ${globalState.firstName}`;
            setWelcomeAlertData({ show: true, status: AlertStatusType.info, message });
        }
    }, []);

    return { welcomeAlertData };
};

export default useHomePageHook;