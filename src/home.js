import React, {useState, useCallback} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  RefreshControl,
  
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SwipeListView} from 'react-native-swipe-list-view';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import {useNetInfo} from "@react-native-community/netinfo";
export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

const home = () => {
  debugger;
  const {colors} = useTheme();

  const theme = useTheme();
  const netInfo = useNetInfo();
  const allowedState = [
    {
      candidateId: '5dc16dc5572e4e2638b9cf30',
      name: 'Candidate1',
      domain: 'Front End Engineer',
      yearOfExperience: '5.06',
      recruiterName: 'Recruiter1',
      interviewType: 'technical',
    },
    {
      candidateId: '5dc4e7609caa3945be6a4a1a',
      name: 'Candidate2',
      domain: 'Front End Engineer',
      yearOfExperience: '6.10',
      recruiterName: 'Recruiter2',
      interviewType: 'technical',
    },
    {
      candidateId: '5dca91a09caa3983966a4a7c',
      name: 'Candidate3',
      domain: 'Front End Engineer',
      yearOfExperience: '9.06',
      recruiterName: 'Recruiter2',
      interviewType: 'technical',
    },
    {
      candidateId: '5dd22bf0666a070e690fa8cb',
      name: 'Candidate4',
      domain: 'Front End Engineer',
      yearOfExperience: '17',
      recruiterName: 'Recruiter1',
      interviewType: 'technical',
    },
    {
      candidateId: '5dc16d63572e4e2638b9cf2f',
      name: 'Candidate5',
      domain: 'Front End Engineer',
      yearOfExperience: '8',
      recruiterName: 'Recruiter3',
      interviewType: 'technical',
    },
    {
      candidateId: '5dc1773d572e4e2638b9cf32',
      name: 'Candidate6',
      domain: 'Cloud Engineer',
      yearOfExperience: '3',
      recruiterName: 'Recruiter3',
      interviewType: 'technical',
    },
    {
      candidateId: '5dc176aa572e4e2638b9cf31',
      name: 'Candidate7 ',
      domain: 'Cloud Engineer',
      yearOfExperience: '5.5',
      recruiterName: 'Recruiter4',
      interviewType: 'technical',
    },
    {
      candidateId: '5dd76991104abc46e844f72a',
      name: 'Candidate8',
      domain: 'Front End Engineer',
      yearOfExperience: '6.03',
      recruiterName: 'Recruiter5',
      interviewType: 'technical',
    },
    {
      candidateId: '5dd7669d01aa8bf2a2b602a7',
      name: 'Candidate9',
      domain: 'Front End Engineer',
      yearOfExperience: '7.03',
      recruiterName: 'Recruiter4',
      interviewType: 'technical',
    },
    {
      candidateId: '5dd7620b104abc156d44f725',
      name: 'Candidate10',
      domain: 'Front End Engineer',
      yearOfExperience: '4.06',
      recruiterName: 'Recruiter6',
      interviewType: 'technical',
    },
    {
      candidateId: '5dd75f4a104abc135244f722',
      name: 'Candidate11',
      domain: 'Front End Engineer',
      yearOfExperience: '4',
      recruiterName: 'Recruiter5',
      interviewType: 'technical',
    },
    {
      candidateId: '5dd7595f01aa8b41a7b602a3',
      name: 'Candidate12',
      domain: 'Front End Engineer',
      yearOfExperience: '9.05',
      recruiterName: 'Recruiter7',
      interviewType: 'technical',
    },
  ];

  const [refreshing, setRefreshing] = useState(false);
  const [stateOptions, setStateValues] = useState(allowedState);

  const renderHiddenItem = (data, rowMap) => (
    <View style={{flexDirection:'row',width:deviceWidth * 1}}>
      <View style={{backgroundColor:'#1199EE',height:75,width:deviceWidth*.20}}>
      <MaterialIcons
            name="edit"
            color={'#3F51B5'}
            size={20}
            style={{alignSelf:'center',marginTop:10}}
          />
      <Text style={{textAlign:'center',fontSize:15,fontFamily:'OpenSans-Regular',marginTop:3}}>Edit</Text>
      </View>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnLeft]}>
         <MaterialIcons
            name="delete"
            color={'#682222'}
            size={20}
            style={{alignSelf:'center',marginTop:10}}
          />
        <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
      
    </View>
  );

  const renderItemData = (data) => (
    <View
      style={{
        width: deviceWidth * 0.96,
        backgroundColor: '#fff',
        height:75,
        borderBottomWidth: 0.5,
        borderColor: '#000',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginBottom:3
      }}>
      <FontAwesome5
        name="user-circle"
        color={'#3F51B5'}
        size={48}
        style={{marginLeft:25, marginTop: 5}}
        backgroundColor="#fff"></FontAwesome5>

      <View
        style={{
          backgroundColor: '#fff',
          padding: 5,
          marginLeft: 10,
          marginTop:0,
        }}>
        <Text style={styles.userName}>{data.name}</Text>
        <Text style={[styles.userName, {fontFamily: 'OpenSans-Light'}]}>
          {data.domain}
        </Text>
      </View>
    </View>
  );

  const onRefresh =useCallback(() => {
    setRefreshing(true);


    wait(2000).then(() => setRefreshing(false));
  }, []);

`    // const netState = useCallback((){
      
    // })`

    
  return (
    <View style={styles.container}>
      <ScrollView>
      
      <StatusBar  backgroundColor="#3F51B5" ></StatusBar>
     
      {/* Header Below content */}
      <View style={styles.circleContent}>
        <FontAwesome
          name="user"
          color={'#fff'}
          size={28}
          style={{marginLeft: 5, marginRight: 5}}
        />
        <Text style={styles.domain}>Engineers</Text>
      </View>

      {/* Card View */}
      <View style={styles.cardViewMain}>
        <View style={styles.cardView}>
          <Text style={styles.text}>Front End</Text>
          <Text style={[styles.text, {fontSize: 50}]}>15</Text>
          <MaterialIcons
            name="account-tree"
            color={'#3F51B5'}
            size={28}
            style={{alignSelf: 'flex-end', marginRight: 10}}
          />
        </View>

        <View style={styles.cardView}>
          <Text style={[styles.text, {fontFamily: 'OpenSans-SemiBold'}]}>
            Back End
          </Text>
          <Text style={[styles.text, {fontSize: 50}]}>1</Text>
          <MaterialIcons
            name="account-tree"
            color={'#3F51B5'}
            size={28}
            style={{alignSelf: 'flex-end', marginRight: 10}}
          />
        </View>
      </View>

      {/* Card view below content */}
      <View
        style={{
          backgroundColor: '#3F51B5',
          height: 40,
          position: 'absolute',
          top: '18%',
          flexDirection: 'row',
          margin: 8,
          marginLeft: 15,
          alignSelf: 'flex-start',
          borderRadius: 20,
          padding: 4,
        }}>
        <MaterialIcons
          name="menu"
          color={'#fff'}
          size={28}
          style={{alignSelf: 'flex-end', padding: 3}}
        />
        <Text style={styles.domain}>Candidate List</Text>
      </View>

      {/* SwipeList Data */}
      <View style={{backgroundColor: '#fff', marginTop: '28%',marginBottom:12}}>
        <SwipeListView
          data={stateOptions}
          renderItem={({item}) => renderItemData(item)}
          renderHiddenItem={renderHiddenItem}
          refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          leftOpenValue={75}
          rightOpenValue={-150}
          previewRowKey={'0'}
          previewOpenValue={-40}
          previewOpenDelay={3000}
          // onRowDidOpen={onRowDidOpen}
        />
      </View>
      </ScrollView>
      <View style={{position:'absolute',bottom:2,backgroundColor:'grey',width:'100%'}}>
      {netInfo.isConnected == true ? 
      null :
      <Text style={{fontSize:15,color:'#000',textAlign:'center'}}>Offline</Text>}</View>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  circleContent: {
    backgroundColor: '#3F51B5',
    height: 40,
    position: 'absolute',
    top: 10,
    flexDirection: 'row',
    margin: 8,
    marginLeft: 15,
    alignSelf: 'flex-start',
    borderRadius: 20,
    padding: 4,
  },
  cardViewMain: {
    flexDirection: 'row',
    height: deviceHeight * 0.25,
    width: deviceWidth * 1,
    top: '18%',
    justifyContent: 'space-around',
  },
  cardView: {
    width: deviceWidth * 0.4,
    height: deviceHeight * 0.2,
    borderWidth: 0.3,
    borderColor: '#ff00',
    backgroundColor: '#fff',
    borderRadius: 5, //Its for IOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,

    // its for android
    elevation: 8,
    position: 'relative',
  },
  text: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'OpenSans-Bold',
    marginLeft: 15,
    marginTop: 10,
  },
  domain: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'OpenSans-SemiBold',
    margin: 5,
    color: '#fff',
  },
  userName: {fontSize: 18, fontFamily: 'OpenSans-SemiBold'},
  backTextWhite: {
    color: '#FFF',
    fontFamily:'OpenSans-Regular'
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: '#E34A4A',
    right:20,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
});
