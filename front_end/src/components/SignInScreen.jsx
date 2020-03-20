import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signInUser } from '../redux-token-auth-config' // <-- note this is YOUR file, not the redux-token-auth NPM module

class SignInScreen extends Component {
//  constructor (props) {  }

  

  submitForm (e) {
    e.preventDefault()
    const { signInUser } = this.props
    const {
      email,
      password,
    } = this.state
    signInUser({ email, password }) // <-<-<-<-<- here's the important part <-<-<-<-<-
      .then()
      .catch()
  }

  render () {
    const { submitForm } = this
    return (
      <div>
        <form onSubmit={submitForm}>...</form>
      </div>
    )
  }
}

export default connect(
  null,
  { signInUser },
)(SignInScreen)