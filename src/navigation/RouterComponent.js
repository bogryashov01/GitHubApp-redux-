import React from "react";
import {
    Router,
    Switch,
    Route
} from "react-router-dom";
import TabsContainer from '../containers/TabsContainer';
import HeaderConteiner from '../containers/HeaderConteiner';
import history from './history';

const RouterComponent = () => {
    return (
        <Router history={history} >
            <HeaderConteiner history={history} />
            <Switch>
                <Route exact path="/">
                    <h1>Search users on git by name</h1>
                </Route>
                    <TabsContainer />
            </Switch>
        </Router>
    )
}

export default RouterComponent;
