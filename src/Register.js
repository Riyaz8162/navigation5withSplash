import React, {Component} from 'react';
import {
  TextInput,
  Text,
  Alert,
  View,
  StyleSheet,
  Dimensions,Picker
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as yup from 'yup';
import FormButton from '../components/FormButton';
import {Formik} from 'formik';
export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
import DatePicker from 'react-native-datepicker';

export default class App extends Component {
  constructor(props) {
    super(props);
    //set value in state for initial date
    this.state = {date: '  14-09-2020',language:''};
  }

  handleSubmit = (values) => {
    debugger;
    AsyncStorage.setItem('UserID', '1');
    AsyncStorage.setItem('UserName', values.name);
    AsyncStorage.setItem('Lastname', values.lname);
    AsyncStorage.setItem('Email', values.email);
    this.props.navigation.navigate('Drawer');
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Formik
          initialValues={{
            name: '',
            lname: '',
            email: '',
            password: '',
            date: '',
          }}
          onSubmit={(values) => this.handleSubmit(values)}
          validationSchema={yup.object().shape({
            name: yup.string().required('First name is required field'),
            lname: yup.string().required('Last name is required field'),
            email: yup.string().email().required(),
            password: yup
              .string()
              .min(4)
              .max(10, 'Password should not excced 8 characters')
              .required(),
          })}>
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
              <Text style={[styles.staticText, {fontSize: 34, color: '#000'}]}>
                Register{' '}
              </Text>

              <Text style={[styles.staticText, {color: 'red', marginTop: 15}]}>
                {' '}
                * <Text style={styles.staticText}>First name</Text>{' '}
              </Text>

              <TextInput
                value={values.name}
                style={styles.inputStyle}
                onChangeText={handleChange('name')}
                onBlur={() => setFieldTouched('name')}
                placeholder=" First name"
              />
              {touched.name && errors.name && (
                <Text style={{fontSize: 12, color: '#FF0D10', marginLeft: 5}}>
                  {errors.name}
                </Text>
              )}

              <Text style={[styles.staticText, {color: 'red', marginTop: 10}]}>
                {' '}
                * <Text style={styles.staticText}>Last name</Text>{' '}
              </Text>

              <TextInput
                value={values.lname}
                style={styles.inputStyle}
                onChangeText={handleChange('lname')}
                onBlur={() => setFieldTouched('lname')}
                placeholder=" Last name"
              />
              {touched.lname && errors.lname && (
                <Text style={{fontSize: 12, color: '#FF0D10', marginLeft: 5}}>
                  {errors.lname}
                </Text>
              )}

              <Text style={[styles.staticText, {color: 'red', marginTop: 10}]}>
                {' '}
                * <Text style={styles.staticText}>Email</Text>{' '}
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

              <Text style={[styles.staticText, {color: 'red', marginTop: 10}]}>
                {' '}
                * <Text style={styles.staticText}>Date of Birth</Text>{' '}
              </Text>

              <DatePicker
                style={{
                  width: deviceWidth * 0.78,
                  alignSelf: 'center',
                  backgroundColor: '#e6f4ff',
                  borderWidth: 0,
                  borderColor: '#fff',
                  bottom: 4,
                  height:45
                }}
                date={  this.state.date} //initial date from state
                mode="date" //The enum of date, datetime and time
                placeholder="select date"
                format="DD-MM-YYYY"
                customStyles={{
                  dateInput: {
                    borderWidth: 0,
                    alignItems: 'flex-start',
                    marginLeft: 3,
                    color: '#A8A7A6',
                  },
                  dateIcon: {
                    width: 0,
                    height: 0,
                  },
                  placeholderText: {
                    fontSize: 18,
                    color: '#A8A7A6',
                    marginLeft:4
                  },
                  dateText: {
                    textAlign: 'left',
                    fontSize: 16,
                    color: '#A8A7A6',
                  },
                }}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={(date) => {
                  this.setState({date: date});
                }}
              />
              
              <Text style={[styles.staticText, {color: 'red', marginTop: 10}]}>
                {' '}
                * <Text style={styles.staticText}>Gender</Text>{' '}
              </Text>

              <View style={[styles.inputStyle,{height:45,}]}>
              <Picker
                style={styles.pickerStyle}
                selectedValue={this.state.language}
                onValueChange={(itemValue, itemPosition) =>
                  this.setState({
                    language: itemValue,
                    choosenIndex: itemPosition,
                  })
                }>
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Trans" value="rn" />
              </Picker></View>

              <View style={styles.buttonContainer}>
                <FormButton
                  buttonType="outline"
                  onPress={handleSubmit}
                  title="SIGNUP"
                  buttonColor="#fff"
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    );
  }
}

console.disableYellowBox = true;
