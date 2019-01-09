import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { LoaderSetting, ResultPage } from './contentComponents/index';


class Router extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path='/' component={LoaderSetting}></Route>
                    <Route path='/resultPage' component={ResultPage}></Route>
                </Switch>
            </React.Fragment>
        );
    }
}

export default Router;