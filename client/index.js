import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
//requireAuth() in Dashboard
import App from './components/App';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';
import requireAuth from './components/requireAuth';
import Game from './components/Game';

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin'
  }
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const Root = () => {
  return (
  <ApolloProvider client={client}>
   <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="login" component={LoginForm} />
          <Route path="signup" component={SignupForm} />
        </Route>
        <Route path="dashboard" component={Dashboard} />
        <Route path="Game" component={Game} />
      </Router>
  </Provider>
  </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
