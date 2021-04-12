import React from 'react';
import { Platform, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MainLogin from '../screen/Login/MainLogin';
import RegisterScreen from '../screen/Login/Register/RegisterScreen'


export default createStackNavigator(
  {
    MainLogin: {
      screen: MainLogin,
      navigationOptions: ({ navigation }) => ({
        title: 'Login'
      })
    },
    RegisterScreen: {
      screen: RegisterScreen,
      navigationOptions: ({ navigation }) => ({
        title: <Text style={{ fontFamily: 'sukhumvit-set-bold', fontSize: hp('2.4%') }}>สมัครสมาชิก</Text>,
        headerBackTitle: <Text></Text>,
        headerTintColor: '#000',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center'
        },
        headerRight: (<View></View>),
        headerStyle: {
          elevation: null,
          shadowColor: 'transparent',
          borderBottomWidth: 0,
        }
      })
    },
  }
);