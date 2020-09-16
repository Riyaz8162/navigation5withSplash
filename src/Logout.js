import React, { Component } from 'react';
import { View, Image, BackHandler } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class logout extends Component {
  static navigationOptions = {
    header: null
  };

  async componentDidMount() {
     await AsyncStorage.removeItem();
  }

  render() {
    const {navigation} = this.props;
    return navigation.replace('Login');
  }
}





