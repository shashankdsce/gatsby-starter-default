import React from 'react';
import PropTypes from 'prop-types';

class FirebaseProvider extends React.Component {
  static propTypes = {
    children: PropTypes.element,
    firebase: PropTypes.object.isRequired,
    cart: PropTypes.object.isRequired
  };

  static childContextTypes = {
    firebase: PropTypes.object,
    cart: PropTypes.object
  };

  getChildContext() {
    const { firebase, cart } = this.props;

    return {
      firebase,
      cart
    };
  }

  render() {
    const { children } = this.props;

    return children;
  }
}

export default FirebaseProvider;
