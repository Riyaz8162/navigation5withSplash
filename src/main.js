import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet, StatusBar,} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import EvilIcons from 'react-native-vector-icons/FontAwesome'
import HomeScreen from './home';
import DetailsScreen from './Likes';
import ExploreScreen from './Settings';
import ProfileScreen from './Explore';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExplorStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#3F51B5"
      inactiveColor="grey"      
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Likes',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Icon name="heart" color={'grey'} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="info" color={'grey'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreeStack}
        options={{
          tabBarLabel: 'Account',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <EvilIcons name="gear" color={'grey'} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const styles = ({
    circle:{
    width:36,
    height:36,
    borderRadius:18,  
    backgroundColor:'red'
    },
    count:{color:'#FFF'}
    })

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#3F51B5',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Welcome',
        headerLeft: () => (
            <Icon.Button name="menu" size={25} backgroundColor="#3F51B5" onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerRight:() =>(
           <View style={{backgroundColor:'#3F51B5',flexDirection:'row',marginRight:19,alignContent:'center',justifyContent:'center'}}> 
        <View style={{flexDirection:'row',marginRight:10}}>
            <MaterialIcons name="notifications" color={'#fff'} size={23} > </MaterialIcons> 
            <Badge />
            </View>
        <FontAwesome5 name="user-circle" color={'#fff'} size={23} backgroundColor="#fff" ></FontAwesome5>
        </View>
       ),
        }}
        />
</HomeStack.Navigator>
);


const Badge = ()=>(
    <View style ={{ width:13,height:13,borderRadius:13/2,  
        backgroundColor:'red',marginLeft:-13,}}>
    <Text style={{color:'#fff',fontSize:6,textAlign:'center',marginTop:1}}>4</Text>
    </View>
    );


const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Like" component={DetailsScreen} options={{
        headerLeft: () => (
            <Icon.Button name="menu" size={25} backgroundColor="transparent" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</DetailsStack.Navigator>
);


const  ProfileStackScreen= ({navigation}) => (
    <ProfileStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#1f65ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
             headerLeft: () => (
                <Icon.Button name="menu" size={25} backgroundColor="transparent" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </ProfileStack.Navigator>
);

const  ExploreScreeStack= ({navigation}) => (
    <ExplorStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#1f65ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <ExplorStack.Screen name="Account" component={ExploreScreen} options={{
             headerLeft: () => (
                <Icon.Button name="menu" size={25} backgroundColor="transparent" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </ExplorStack.Navigator>
);
  