import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCzT-Bgd-R1zGyQWsN686rFTPjOYOjswUU',
      authDomain: 'auth-4e00f.firebaseapp.com',
      databaseURL: 'https://auth-4e00f.firebaseio.com',
      projectId: 'auth-4e00f',
      storageBucket: 'auth-4e00f.appspot.com',
      messagingSenderId: '598835761391'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
