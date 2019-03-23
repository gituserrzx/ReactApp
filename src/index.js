import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import  './axios/index'
import reducers from './redux/index'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './components/authroute'
import BossInfo from './container/bossInfo/bossInfo'
import GenuisInfo from './container/geniusInfo/geniusInfo'
import DashBoard from './components/dashBoard/dashBoard'
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():''
))
function Boss () {
        return <h1>BOSS页面</h1>
}
//boss genius me msg 4个页面
ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <AuthRoute/>
                    <Route path={'/geniusinfo'} component={GenuisInfo}/>
                    <Route path={'/bossinfo'} component={BossInfo}/>
                    <Route path='/boss' component={Boss}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route component={DashBoard}></Route>
                    </Switch>
            </div>
        </BrowserRouter>
    </Provider>)
    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
