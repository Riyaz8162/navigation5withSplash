import React,{useState,useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';

export function DrawerContent(props) {
  const [username, setModel] = useState(false);
  const [name, storeData] = useState([]);
  const [lastName, storeLastName] = useState([]);
  const  [email, storeMail] = useState([]);
  useEffect( ()=> {

    const getData =async ()=>{
      const user=await AsyncStorage.getItem('UserID');
      const data =await AsyncStorage.getItem('UserName');
      const lastName =await AsyncStorage.getItem('Lastname');
      const email =await AsyncStorage.getItem('Email');
      storeMail(email);
      storeData(data);
      storeLastName(lastName);
    }
     getData();
   
  },[]);

const removeUser = async () => {
  AsyncStorage.clear() // <-- Don't forget to clear any variables stored on Async Storage
  .then(() => {
      props.navigation.navigate('Login')
  })
  .catch((err) => {
      console.log(err);
  })
  }
    const paperTheme = useTheme();

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                              <Title style={styles.title}>{name} {lastName}</Title>
                              <Caption style={styles.caption}>{email}</Caption>
                            </View>
                        </View>

                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                        labelStyle={{color: '#000',fontSize:16,fontFamily:'OpenSans-SemiBold',}}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                         labelStyle={{color: '#000',fontSize:16,fontFamily:'OpenSans-SemiBold',fontWeight:'800'}}
                            label="Account"
                           
                        />
                        <DrawerItem 
                         labelStyle={{color: '#000',fontSize:16,fontFamily:'OpenSans-SemiBold',fontWeight:'800'}}
                            label="Settings"
                            
                        />
                        
                   </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={'#000'}
                        size={size}
                        style={{marginLeft:'22%',}}
                        />
                    )}
                    labelStyle={{color: '#000',fontSize:16,fontFamily:'OpenSans-Bold',fontWeight:'800'}}
                    label="Log Out"
                    onPress={removeUser}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
    
      fontWeight:'800'
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      color:'grey'
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
      borderBottomWidth:0,
      borderColor:'#fff'
    },
    bottomDrawerSection: {
        marginBottom:0,
        borderTopColor: '#fff',
        backgroundColor:'#0099FF',justifyContent:'center',alignSelf:'center',width:'100%'
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
