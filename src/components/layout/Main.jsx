import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';
const Main = () => {
    return (
        <Fragment>
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </Fragment>
    );
};

export default Main;