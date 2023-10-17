import React, { ReactElement, useContext } from "react";

import { UserContext } from "../../components/UserContext";

const Profile = (): ReactElement => {
    const {globalState} = useContext(UserContext);

    return (
        <div>Profile</div>
    )
}

export default Profile;