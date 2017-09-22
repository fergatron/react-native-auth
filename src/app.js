import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Button, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCzT-Bgd-R1zGyQWsN686rFTPjOYOjswUU',
      authDomain: 'auth-4e00f.firebaseapp.com',
      databaseURL: 'https://auth-4e00f.firebaseio.com',
      projectId: 'auth-4e00f',
      storageBucket: 'auth-4e00f.appspot.com',
      messagingSenderId: '598835761391'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        { this.renderContent() }
      </View>
    );
  }
}

export default App;
