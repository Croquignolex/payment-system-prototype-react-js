import React, { ReactElement, useContext } from "react";

import { UserContext } from "../../components/UserContext";

const Home = (): ReactElement => {
    const {globalState} = useContext(UserContext);

    return (
        <div>Home</div>
    )
}

export default Home;