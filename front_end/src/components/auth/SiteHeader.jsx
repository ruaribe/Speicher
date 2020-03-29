import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signOutUser } from '../../redux-token-auth-config' // <-- note this is YOUR file, not the redux-token-auth NPM module

class SiteHeader extends Component {
  constructor(props) {
    super(props);
  }

  signOut = (e) => {
    e.preventDefault()
    const { signOutUser } = this.props
    signOutUser()
      .then()
      .catch()
  }

  render () {
    const { signOut } = this
    return (
      <div>
        <a href="#" onClick={signOut}>ログアウト</a>
      </div>
    );
  }
}

export default connect(
  null,
  { signOutUser },
)(SiteHeader)