/* eslint-disable react/prop-types, import/no-extraneous-dependencies */
import React from 'react';
import { Router } from 'react-router-dom';
import FirebaseProvider from './src/containers/FirebaseProvider';

import firebase from './src/services/firebase';
import cart from './src/services/cart';

exports.replaceRouterComponent = ({ history }) => {
  const ConnectedRouterWrapper = ({ children }) => (
    <FirebaseProvider firebase={firebase} cart={cart} >
      <Router history={history}>{children}</Router>
    </FirebaseProvider>
  );

  return ConnectedRouterWrapper;
};
