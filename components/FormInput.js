import React from 'react'
import { Input } from 'react-native-elements'
import { StyleSheet, View,Dimensions } from 'react-native'
export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

const FormInput = ({
  iconName,
  iconColor,
  returnKeyType,
  keyboardType,
  name,
  placeholder,
  ...rest
}) => (
  <View style={styles.inputContainer}>
    <Input
      {...rest}
      // leftIcon={<Ionicons name={iconName} size={28} color={iconColor} />}
      // leftIconContainerStyle={styles.iconStyle}
      placeholderTextColor='grey'
      name={name}
      placeholder={placeholder}
      style={styles.input}
    />
  </View>
)

const styles = StyleSheet.create({
  inputContainer: {
    width:deviceWidth*.86,
    alignSelf:'center'
  },
  iconStyle: {
    marginRight: 10
  },
  input:{
    borderRadius:2,
    backgroundColor:'#e6f4ff',
    fontFamily:'OpenSans-Bold',
  }
})

export default FormInput
