import * as React from 'react'
import {
  Router,
  Route,
} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import HomePage from './HomePage'
import SomeProtectedPageComponent from './RegisterScreen'
import SignInPage from './SignInScreen'
import { generateRequireSignInWrapper } from 'redux-token-auth'

const requireSignIn = generateRequireSignInWrapper({
  redirectPathIfNotSignedIn: '/signin',
})

const history = createBrowserHistory({})

const Routes = () => (
  <Router history={history}>
    <div>
      <Route exact={true} path="/" component={HomePage} />
      <Route path="/protected" component={requireSignIn(SomeProtectedPageComponent)} />
      <Route path="/signin" component={SignInPage} />
    </div>
  </Router>
)
export default Routes;