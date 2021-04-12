import React from 'react';
import { Platform, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Icon from '@expo/vector-icons'
//Main
import MainScreen from '../screen/Main/MainScreen';
import MainScreenList from '../screen/Main/MainScreenList';
import MainDetail from '../screen/Main/MainDetail';
import AddDevice from '../screen/Main/Home/AddDevice/AddDevice'
import DetailDevice from '../screen/Main/Home/AddDevice/DetailDevice'
import DetailLamp from '../screen/Main/Home/AddDevice/DetailLamp'
import SelectColorLamp from '../screen/Main/Home/AddDevice/Lamp/SelectColorLamp'
import SelectSceneLamp from '../screen/Main/Home/AddDevice/Lamp/SelectSceneLamp'
import DetailSpeaker from '../screen/Main/Home/AddDevice/Speaker/DetailSpeaker'
import DetailSmartTV from '../screen/Main/Home/AddDevice/SmartTV/DetailSmartTV'
import DetailAir from '../screen/Main/Home/AddDevice/Air/DetailAir'
//MainEngineer
import MainEngineerScreen from '../screen/Main/Engineer/MainEngineerScreen';
import DetailEngineer from '../screen/Main/Engineer/DetailEngineer';
//Scene
import MainScene from '../screen/Main/Scene/MainScene'
//Profile
import MainProfile from '../screen/Main/Profile/MainProfile'


const Main = createStackNavigator(
  {
    MainEngineerScreen: {
      screen: MainEngineerScreen,
      navigationOptions: ({ navigation }) => ({
        headerTintColor: '#000',
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: 20 }}>หน้าหลัก (ฝ่ายช่าง)</Text>,
      })
    },
    DetailEngineer: {
      screen: DetailEngineer,
      navigationOptions: ({ navigation }) => ({
        headerTintColor: '#000',
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: 20 }}>รายละเอียดการซ่อม</Text>,
      })
    },
    MainScreenList: {
      screen: MainScreenList,
      navigationOptions: ({ navigation }) => ({
        headerTintColor: '#000',
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: 20 }}>รายการที่ดิน</Text>,
        headerBackTitle: <Text style={{ fontFamily: 'sukhumvit-set' }}></Text>,
        headerStyle: {
          elevation: null,
          shadowColor: 'transparent',
          borderBottomWidth: 0,
        }
      })
    },
    MainDetail: {
      screen: MainDetail,
      navigationOptions: ({ navigation }) => ({
        headerTintColor: '#000',
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: 20 }}>รายละเอียด</Text>,
        headerBackTitle: <Text style={{ fontFamily: 'sukhumvit-set' }}></Text>,
        headerStyle: {
          elevation: null,
          shadowColor: 'transparent',
          borderBottomWidth: 0,
        }
      })
    },
    AddDevice: {
      screen: AddDevice,
      navigationOptions: ({ navigation }) => ({
        title: 'Login'
      })
    },
    DetailDevice: {
      screen: DetailDevice,
      navigationOptions: ({ navigation }) => ({
        title: 'Login'
      })
    },
    DetailLamp: {
      screen: DetailLamp,
      navigationOptions: ({ navigation }) => ({
        title: 'Login'
      })
    },
    SelectColorLamp: {
      screen: SelectColorLamp,
      navigationOptions: ({ navigation }) => ({
        title: 'Login'
      })
    },
    SelectSceneLamp: {
      screen: SelectSceneLamp,
      navigationOptions: ({ navigation }) => ({
        title: 'Login'
      })
    },
    DetailSpeaker: {
      screen: DetailSpeaker,
      navigationOptions: ({ navigation }) => ({
        title: 'Login'
      })
    },
    DetailSmartTV: {
      screen: DetailSmartTV,
      navigationOptions: ({ navigation }) => ({
        title: 'Login'
      })
    },
    DetailAir: {
      screen: DetailAir,
      navigationOptions: ({ navigation }) => ({
        title: 'Login'
      })
    },
    
  }
);

Main.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  let routeName = navigation.state.routes[navigation.state.index].routeName

  if (routeName == 'AddDevice') {
    tabBarVisible = false
  } else if (routeName == 'DetailDevice') {
    tabBarVisible = false
  }
  return {
    tabBarVisible,
    tabBarIcon: ({ focused }) => (
      <View style={{ alignItems: 'center' }}>
        <Icon.Entypo
          name='home'
          size={26}
          style={{ marginTop: -7, alignItems: 'center', justifyContent: 'center' }}
          color={focused ? '#03DAC6' : '#ccc'}
        />
        <Text style={{
          color: focused ? '#03DAC6' : '#ccc',
          fontSize: hp('1.7%'),
          fontFamily: 'sukhumvit-set',
          width: 50,
          textAlign: 'center'
        }}>Home</Text>
      </View>
    ),
  }
};

const Scene = createStackNavigator(
  {
    MainScene: {
      screen: MainScene,
      navigationOptions: ({ navigation }) => ({
        title: 'Login'
      })
    },

  }
);

Scene.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  let routeName = navigation.state.routes[navigation.state.index].routeName

  if (routeName == 'MainScan') {
    tabBarVisible = false
  } 
  return {
    tabBarVisible,
    tabBarIcon: ({ focused }) => (
      <View style={{ alignItems: 'center' }}>
        <Icon.SimpleLineIcons
          name='screen-tablet'
          size={26}
          style={{ marginTop: -7, alignItems: 'center', justifyContent: 'center' }}
          color={focused ? '#03DAC6' : '#ccc'}
        />
        <Text style={{
          color: focused ? '#03DAC6' : '#ccc',
          fontSize: hp('1.7%'),
          fontFamily: 'sukhumvit-set',
          width: 50,
          textAlign: 'center'
        }}>Scene</Text>
      </View>
    ),
  }
};

const Profile = createStackNavigator(
  {
    MainProfile: {
      screen: MainProfile,
      navigationOptions: ({ navigation }) => ({
        title: 'Login'
      })
    },

  }
);

Profile.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  let routeName = navigation.state.routes[navigation.state.index].routeName

  if (routeName == 'MainScan') {
    tabBarVisible = false
  } 
  return {
    tabBarVisible,
    tabBarIcon: ({ focused }) => (
      <View style={{ alignItems: 'center' }}>
        <Icon.AntDesign
          name='user'
          size={26}
          style={{ marginTop: -7, alignItems: 'center', justifyContent: 'center' }}
          color={focused ? '#03DAC6' : '#ccc'}
        />
        <Text style={{
          color: focused ? '#03DAC6' : '#ccc',
          fontSize: hp('1.7%'),
          fontFamily: 'sukhumvit-set',
          width: 50,
          textAlign: 'center'
        }}>Profile</Text>
      </View>
    ),
  }
};

export default createStackNavigator(
  {
    Main,
  },
  {
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: 'Main',
    barStyle: { backgroundColor: '#fff', },
    swipeEnabled: false,
    labeled: false,
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      iconStyle: { width: 50, alignItems: 'center' },
      style: {
        backgroundColor: '#fff',
        marginTop: 30,
        elevation: 0
      },
      indicatorStyle: { backgroundColor: "#ffffff" }
    }

  },
);