import React, { Component } from 'react';
import { View,AsyncStorage,  Text, Alert, StatusBar,Image } from 'react-native';
import { Container, Content, } from 'native-base';
export default class Splash extends Component {

    static navigationOptions = {
      header: null
    }

    constructor() {
      super();
      this.state = {
        fcmToken: "",
        id1:null
      };
    } 

    componentWillMount(){
      setTimeout(()=>{  
        AsyncStorage.getItem('UserID').then(value =>
          value !== null ?
          this.props.navigation.navigate('Drawer') : 
          this.props.navigation.navigate('SignUpScreen')
        );
      }, 1000); 
     
    }

render() {
    return (
      <Container style={{justifyContent:'center',alignContent:'center'}}>
        <StatusBar backgroundColor="#ffffff" barStyle='dark-content' />
       <Image style={{width:75,height:75,justifyContent:'center',alignSelf:'center'}} source={require('../src/img/1.png')}/>
      </Container>
    );
  }
}