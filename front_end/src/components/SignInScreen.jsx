import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInUser } from '../redux-token-auth-config'; 
import { Col,  Form, Button } from 'react-bootstrap';
import { registerUpdateParams } from '../actions/register/index'

class SignInScreen extends Component {

  onChangeHndler = (event, key) => {
    this.props.registerUpdateParams(key, event.target.value)
  };

  submitForm = (e) => {
    e.preventDefault()
    const { signInUser } = this.props
    const {
      email,
      password,
    } = this.props.registerReducer
    

    
  signInUser({ email, password })
    .then()
    .catch()
    
  }

  render() {
    const {
      email,
      password,
    } = this.props
    const { submitForm, onChangeHndler } = this
    return (
      <Form onSubmit = { submitForm }>
        <Col>
          <Form.Group controlId="email">
            <Form.Label>メールアドレス</Form.Label>
            <Form.Control
              type="text"
              value={email}
              onChange={event => onChangeHndler(event, "email")}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>パスワード</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={event => onChangeHndler(event, "password")}
            />
          </Form.Group>
        </Col>

        <Button variant="primary" type="submit">
          ログイン
        </Button>
      </Form>
    )
  }
}



const mapStateToProps =  (store) => {
  return {
    registerReducer: store.registerReducer,
  }
}

export default connect(
  mapStateToProps,
  { signInUser, registerUpdateParams  },
)(SignInScreen)