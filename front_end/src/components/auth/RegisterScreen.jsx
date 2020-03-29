import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../redux-token-auth-config'; 
import { Col,  Form, Button } from 'react-bootstrap';
import { registerUpdateParams } from '../../actions/register/index'

class SignInScreen extends Component {

  onChangeHndler = (event, key) => {
    this.props.registerUpdateParams(key, event.target.value)
  };

  submitForm = (e) => {
    e.preventDefault()
    const { registerUser } = this.props
    const {
      name,
      email,
      password,
      passwordConfirmation
    } = this.props.registerReducer

    registerUser({ name, email, password, passwordConfirmation })
      .then()
      .catch()
  }

  render() {
    const {
      name,
      email,
      password,
      passwordConfirmation
    } = this.props
    const { submitForm, onChangeHndler } = this
    return (
      <Form onSubmit = { submitForm }>
        <Col>
          <Form.Group controlId="name">
            <Form.Label>ユーザー名</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={event => onChangeHndler(event, "name")}/>
          </Form.Group>
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
          <Form.Group controlId="passwordConfirmation">
            <Form.Label>パスワード確認</Form.Label>
            <Form.Control
              type="password"
              value={passwordConfirmation}
              onChange={event => onChangeHndler(event, "passwordConfirmation")}
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
  { registerUser, registerUpdateParams  },
)(SignInScreen)