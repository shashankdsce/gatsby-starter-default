import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Phone from '../../containers/Phone';

const PhonePage = ({ uid, signIn }) => {
  return (
    <Route
      render={({ location }) => {
        return (
          <div>
            <Route exact path="/phone/" render={() => <Redirect to="/" />} />
            <Route
              location={location}
              key={location.key}
              path="/phone/:phoneId/"
              render={props => <Phone {...props} uid={uid} signIn={signIn} />}
            />
          </div>
        );
      }}
    />
  );
};

export default PhonePage;
