import React, {ReactElement} from 'react';
import {Outlet} from 'react-router-dom';

const Home = (): ReactElement => {
    return (
        <Outlet />
    )
}

export default Home;