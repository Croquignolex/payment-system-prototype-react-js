import React, { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";

const ErrorLayout: FC = (): ReactElement => {
    return (
        <><Outlet /></>
    );
};

export default ErrorLayout;