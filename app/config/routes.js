import React from 'react'
import { Provider } from 'react-redux'
import configureStore, {history} from './store';
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
const store = configureStore();
import Main from '../components/Main'


const routes = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" component={Main} />
      </div>
    </ConnectedRouter>
  </Provider>
);

export default routes;
