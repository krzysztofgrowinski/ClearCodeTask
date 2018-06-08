import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';

import reducers from './reducers/index';

import HomePage from './components/pages/homepage';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={HomePage}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  };
}

const root = document.getElementById('root');


ReactDOM.render(
  <App/>,
  root
);