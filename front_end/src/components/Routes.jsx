import * as React from 'react';
import {
  Router,
  Route,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HomePage from './HomePage';
import SignInPage from './SignInScreen';
import { generateRequireSignInWrapper } from '@keymastervn/redux-token-auth';
import RegisterScreen from './RegisterScreen';
import MyPage from './MyPage';

const requireSignIn = generateRequireSignInWrapper({
  redirectPathIfNotSignedIn: '/signin',
})

const history = createBrowserHistory({})


const Routes = () => (
  <Router history={history}>
    <div>
      <Route exact={true} path="/" component={HomePage} />
      <Route path="/mypage" component={requireSignIn(MyPage)} />
      <Route path="/signin" component={SignInPage} />
      <Route path="/new_register" component={RegisterScreen} />
    </div>
  </Router>
)
export default Routes;