/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Provider as PaperProvider,
} from 'react-native-paper';

import SplashScreen from './src/Splash'
import SignInScreen from './src/Login'
import SignUpScreen from './src/Register'
import Drawer from './navigation/AppNavigation'
import Logout from './src/Logout'
const RootStack = createStackNavigator();
const App = () => {
  return (
    <PaperProvider>
     
        <NavigationContainer>
           <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>  
        <RootStack.Screen name="Drawer" component={Drawer}/>  
        <RootStack.Screen name="logout" component={Logout}/>
    </RootStack.Navigator>
        
        </NavigationContainer>
 
    </PaperProvider>
  );
};

export default App;
