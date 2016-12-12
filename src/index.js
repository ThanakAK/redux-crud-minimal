import ReactDOM from 'react-dom';
import React from 'react'
import App from './components/App';
import {createStore, applyMiddleware} from 'redux';
import {browserHistory, Router, Route, IndexRoute} from 'react-router'
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux'
import {reducers} from './reducers/index';
import {Provider} from 'react-redux';

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import UserEdit from './pages/UserEdit'
import './stylesheet/main.scss';

let users=[];
for(let i=0;i<=10;i++){
  users.push({
    id: i,
    username: 'john '+i,
    job: 'Mission '+i
  });
}
const initial_state={
  users: {
    list: users,
  }
}

let middleware = applyMiddleware(routerMiddleware(browserHistory))
const store =createStore(reducers, initial_state, middleware);
const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
  <Provider store={store}>
    <Router history = {history}>
        <Route path = "/" component={App} >
            <IndexRoute component={Home}/>
          <Route path="user-edit(/:id)" component={UserEdit}/>
          <Route path="*" component={NotFound}/>
        </Route>
    </Router>
  </Provider>,
  document.getElementById("app"));
