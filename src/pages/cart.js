import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from '../styledComponents/theme';
import { Heading2 } from '../styledComponents/typography';

const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

class Cart extends Component {
  static contextTypes = {
    firebase: PropTypes.object,
    cart: PropTypes.object
  };

  createShoppingCart = (cart) => {
    return <div>
      { cart.map((item) => {
          return <p key={item.slug}>{item.name} ({item.quantity})</p>
      }) }
    </div>;
  }

  handleCheckout = () => {
    const { firebase } = this.context;
    const { history } = this.props;

    let cart = localStorage.getItem('cart') || '{ "items": [] }';
    cart = JSON.parse(cart);

    firebase.orders
      .add({
        items: cart.items
      })
      .then(() => {
        localStorage.setItem("cart", JSON.stringify({ "items": [] }));
        history.push({ pathname: "/refresh" });
        history.replace({ pathname: "/cart" });
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error(error);
        // TODO: notify the user of the error
      });
  }

  render() {
      const { cart } = this.context;
    return (
      <div>
        <Heading2>Your cart</Heading2>
        { cart && this.createShoppingCart(cart.getAllItems.items) }
        <ActionContainer>
          <Button
            onClick={this.handleCheckout}>
            Submit Order
          </Button>
        </ActionContainer>
      </div>
    );
  }
}

export default Cart;
