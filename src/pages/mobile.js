import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from '../styledComponents/theme';
import { Heading2 } from '../styledComponents/typography';

const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

class MobilePage extends Component {
  static contextTypes = {
    firebase: PropTypes.object,
  };

  static propTypes = {
    history: PropTypes.object.isRequired,
    uid: PropTypes.string,
    signIn: PropTypes.func.isRequired,
  };

  state = {
    title: '',
    options: [],
    loading: false,
  };

  componentDidMount() {
    const { firebase } = this.context;
    firebase.phones.get().then((result) => {
      this.setState({
        ...this.state,
        phones: result.docs
      });
      console.log('results', result.docs);
    });
  }

  createPhone = (phone) => {
    const { history } = this.props;
    const data = phone.data();
    const phoneid = data.name.replace(/\s/g,'');
    return <div key={phoneid}>
      <a href={`/phone/${phoneid}`} onClick={ (e) => { history.push(`/phone/${phoneid}`); e.preventDefault(); }}>{ data.name }</a>
    </div>;
  }

  createPhoneList = (phones) => {
    return <div>
      { phones.map(this.createPhone.bind(this)) }
    </div>;
  }

  render() {
    const { loading } = this.state;
    const { history } = this.props;

    return (
      <div>
        <Heading2>All phones</Heading2>
        { this.state.phones && this.createPhoneList(this.state.phones) }
        <ActionContainer>
          <Button
            disabled={loading}
            onClick={ () => { history.push('/cart'); }}>
            Go to checkout
          </Button>
        </ActionContainer>
      </div>
    );
  }
}

export default MobilePage;
