import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom';
import {adminRoutes, privateRoutes, publicRoutes} from './routes';
import ClientWrapper from './ClientWrapper';

const Index = () => {

    return (

        <Switch>
            {[...privateRoutes, ...publicRoutes].map((route) => {
                if (route.admin) {
                    return <Route
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    >
                        {route.component}
                    </Route>
                }

                return <Route
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                >
                    <ClientWrapper>{route.component}</ClientWrapper>
                </Route>

            })}
            <Redirect to='/login'/>
        </Switch>
    )
}

export default Index;
