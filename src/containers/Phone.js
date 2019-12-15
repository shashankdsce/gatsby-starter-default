import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../styledComponents/theme';

class PhoneContainer extends Component {
  static contextTypes = {
    firebase: PropTypes.object,
    cart: PropTypes.object
  };

  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  state = {
    title: '',
    options: {},
    loading: false
  };

  componentDidMount() {
    const { history, uid } = this.props;
    if (uid) {
    this.checkVote(uid);
    }

    this.setState({
        loading: true,
    });

    this.phone
    .get()
    .then(doc => {
        if (doc.exists) {

        const { name, brand } = doc.data();
        this.setState({
            name,
            brand
        });
        } else {
        history.push('/404');
        }
    })
    .catch(error => {
        // eslint-disable-next-line no-console
        console.error(error);
        // TODO: notify the user of the error
    });
  }

  get phone() {
    const { firebase } = this.context;
    const { match } = this.props;

    return firebase.phones.doc(match.params.phoneId);
  }

  addToOrder = (phone) => {
    const { history } = this.props;
    const { cart } = this.context;
    cart.addItem(phone);
    history.push('/cart');
  }

  render() {
      console.log(this.state);
    return (
      <div>
        <div>{ this.state && <span>{this.state.name}</span> }</div>
        <Button onClick={() => { this.addToOrder({ name: this.state.name, brand: this.state.brand }) }}>Add to cart</Button>
      </div>
    );
  }
}

export default PhoneContainer;
