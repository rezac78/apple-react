import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Login from '../Login/Login';
import Main from '../main/Main';
import Header from './../common/Header';
import Footer from './../common/Footer';
import Register from './../register/Register';


const MainLayout = props => {
    const { pathname } = props.location
    return (
        <Fragment>
            <Header />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/" exact component={Main} />
            </Switch>
            {pathname === "/" ? <Footer /> : null}
        </Fragment>
    )
}

export default withRouter(MainLayout);