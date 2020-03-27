import { generateAuthActions } from '@keymastervn/redux-token-auth'
import { authUrl } from './constants'

const config = {
  authUrl,
  storage: window.localStorage,
  userAttributes: {
    name: 'name',
    imageUrl: 'image',
  },
  userRegistrationAttributes: {
    name: 'name',
    passwordConfirmation: "password_confirmation"
  },
}

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config)

const authHeaderKeys = ["access-token", "token-type", "client", "expiry", "uid"]


export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
  authHeaderKeys
}