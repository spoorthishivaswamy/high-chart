import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <div className="navbar">
  <ul>
  <li>
    <Link className="navbar" to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
    <Link className="navbar" to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li>
    <SignOutButton />
    </li>
  </ul>
  </div>
);

const NavigationNonAuth = () => (
  <div className="navbar">
  <ul>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
  </ul>
  </div>
);

export default Navigation;