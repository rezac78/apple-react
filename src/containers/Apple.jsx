import React from 'react';
import Main from './../main/Main';
import MainLayout from '../component/Layout/MainLayout';
import { Route, Switch } from 'react-router-dom';
import Login from './../Login/Login';
const Apple = () => {
    return (
        <MainLayout>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" exact component={Main} />
                </Switch>
        </MainLayout>

    )
}

export default Apple;