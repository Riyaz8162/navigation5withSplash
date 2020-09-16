import React, {Fragment} from 'react';
import {StyleSheet, SafeAreaView, View, Text, Dimensions,TextInput,ToastAndroid, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import {Formik} from 'formik';
import * as yup from 'yup';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import ErrorMessage from '../components/ErrorMessage';
import AsyncStorage from '@react-native-community/async-storage';
export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
import styles from '../src/commonStyle'


export default class Login extends React.Component {

  handleSubmit = (values) => {
    debugger
    if (values.email != "Admin" ) { 
      ToastAndroid.show("Your username is wrong", ToastAndroid.SHORT);
      
    }
    else if(values.password != "Admin@1234"){
      ToastAndroid.show("Your password is wrong", ToastAndroid.SHORT);
    }
      else if(values.email == "Admin" && values.password == "Admin@1234"){
        AsyncStorage.setItem("UserID","1");
        this.props.navigation.navigate('Drawer')
      }
  };


  
  render() {
    return (
      <View style={{flex:1,backgroundColor:'#fff'}}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values => this.handleSubmit(values)}
        //onSubmit={(values) => Alert.alert(JSON.stringify(values))}
      
        validationSchema={yup.object().shape({
          email: yup.string().required(),
            password: yup
            .string().min(4).max(10, 'Password should must be 4 characters')
            .required(),
            
        }
        )}
        >
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
        }) => (
          <View style={styles.formContainer}>
            <Text style={[styles.staticText, {fontSize: 34,color:'#000'}]}>Login </Text>

              <Text style={[styles.staticText, {color: 'red', marginTop: 10}]}>
                {' '}
                * <Text style={styles.staticText}>Email or Username</Text>{' '}
              </Text>

              <TextInput
                value={values.email}
                style={styles.inputStyle}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                placeholder="E-mail"
              />
              {touched.email && errors.email && (
                <Text style={{fontSize: 12, color: '#FF0D10', marginLeft: 5}}>
                  {errors.email}
                </Text>
              )}

              <Text style={[styles.staticText, {color: 'red', marginTop: 10}]}>
                {' '}
                * <Text style={styles.staticText}>Password</Text>{' '}
              </Text>
              <TextInput
                value={values.password}
                style={styles.inputStyle}
                onChangeText={handleChange('password')}
                placeholder="Password"
                onBlur={() => setFieldTouched('password')}
                secureTextEntry={true}
              />
              {touched.password && errors.password && (
                <Text style={{fontSize: 12, color: '#FF0D10', marginLeft: 5}}>
                  {errors.password}
                </Text>
              )}
              <View style={styles.buttonContainer}>
                <FormButton
                  buttonType="outline"
                  onPress={handleSubmit}
                  title="LOGIN"
                  buttonColor="#039BE5"
                  buttonColor="#fff"
                />
              </View>
        
        </View>)}
        </Formik>
 
      </View>
    );
  }
}

