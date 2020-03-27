import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './components/App.jsx'
import configureStore from './store/index'
import { verifyCredentials } from './redux-token-auth-config'

const store = configureStore()
verifyCredentials(store)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);