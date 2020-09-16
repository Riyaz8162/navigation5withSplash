import React from 'react';
import { View, Text, StatusBar, StyleSheet,Image } from 'react-native';
import {useNetInfo} from "@react-native-community/netinfo";

const Explore = (navigation) => {
  const netInfo = useNetInfo();
    return (
      <View style={styles.container}>
      <StatusBar  backgroundColor="#3F51B5" />
     <Image style={{width:73,height:73}} source={require('./img/noData.png')}/>
     <View style={{position:'absolute',bottom:2,backgroundColor:'grey',width:'100%'}}>
   {netInfo.isConnected == true ? 
   null :
   <Text style={{fontSize:15,color:'#000',textAlign:'center'}}>Offline</Text>}</View>
   </View>
    );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
