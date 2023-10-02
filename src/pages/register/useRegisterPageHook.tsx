import { useMutation } from "@tanstack/react-query";
import { useNavigate, NavigateFunction } from "react-router-dom";

import { routes } from "../../constants/routeConstants";
import { registerRequest } from "../../helpers/apiRequestsHelpers";
import { RegisterFormType } from "../../types/authTypes";
import { RequestResponseType } from "../../types/othersTypes";

const useRegisterPageHook = (): any => {
    const navigate: NavigateFunction = useNavigate();

    const { isLoading, isError, isSuccess, data, error, mutate }: RequestResponseType = useMutation(registerRequest);

    const errorMessage: string = error?.response?.data?.message || error?.message;

    if(isSuccess) {
        const registerMessage: string = data?.data?.message;
        navigate(routes.login.path, { state: {registerMessage} });
    }

    const handleRegister = ({ name, email, password }: RegisterFormType): void => mutate({ name, email, password });

    return { handleRegister, isLoading, isError, errorMessage };
};

export default useRegisterPageHook;