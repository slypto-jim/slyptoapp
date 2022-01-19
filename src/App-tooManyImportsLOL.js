import { Amplify } from 'aws-amplify';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
