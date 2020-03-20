import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './components/App.jsx'
import configureStore from './store/index'
import { verifyCredentials } from './redux-token-auth-config' // <-- note this is YOUR file, not the redux-token-auth NPM module

const store = configureStore()
verifyCredentials(store) // <-<-<-<-<- here's the important part <-<-<-<-<-

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);