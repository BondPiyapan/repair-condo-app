import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  AsyncStorage,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import * as firebase from "firebase";
import "firebase/firestore";
const { height, width } = Dimensions.get('window')
import Images from 'react-native-scalable-image';
import PhoneInput from "react-native-phone-number-input";
import Constants from 'expo-constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
let appjson = require('../../app.json');

export default class MainLogin extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor() {
    super()
    this.state = {
      hasName: null,
      loading: true,
      loader: true,
      device_token: '',
      isTablet: false,
      typeLogin: 'username',
      username: '',
      password: ''
    }
  }

  async storeUser(userId) {
    try {
        //we want to wait for the Promise returned by AsyncStorage.setItem()
        //to be resolved to the actual value before returning the value
        var jsonOfItem = await AsyncStorage.setItem('user', JSON.stringify(userId));
        return jsonOfItem;
    } catch (error) {
        console.log(error.message);
    }
}

async onLogin(){
  try {
    await firebase
       .auth()
       .signInWithEmailAndPassword(this.state.username, this.state.password).then(
         
       );
   } catch (err) {
     Alert.alert("แจ้งเตือน", err.message);
   }
}

  render() {

    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          // behavior={Platform.OS === 'ios' ? "position" : null}
          behavior={'position'}
          keyboardVerticalOffset={Platform.select({ ios: 0, android: 20 })}
        >
          <View style={{ alignItems: 'center', marginTop: 100, marginBottom: 20 }}>
            <Images
              width={width * .6}
              source={require('../../assets/images/tool-kit2.png')}
            />
            <Text
              style={{
                color: '#000',
                fontSize: hp('2.4%'),
                fontFamily: 'sukhumvit-set-bold',
                marginTop: hp('2.4%'),
                textAlign: 'center'
              }}>ระบบแจ้งซ่อมเพื่อนัด</Text>
            <Text
              style={{
                color: '#000',
                fontSize: hp('2.4%'),
                fontFamily: 'sukhumvit-set-bold',
              }}>วัน-เวลาช่างประจำอาคาร</Text>
            <Text
              style={{
                color: '#000',
                fontSize: hp('2.4%'),
                fontFamily: 'sukhumvit-set-bold',
              }}>Locktech</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            {this.state.typeLogin == 'username' ?
              <View>
                <View style={{ width: width * .8, backgroundColor: '#F5F5F5', padding: 10, borderRadius: 20 }}>
                  <TextInput
                    onChangeText={TextInputValue => this.setState({
                      username: TextInputValue
                    })}
                    placeholder={'บัญชีผู้ใช้'}
                    style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%') }}
                    underlineColorAndroid={'transparent'}
                    numberOfLines={1}
                    returnKeyType={"done"}
                    clearButtonMode="always" />
                </View>
                <View style={{ width: width * .8, backgroundColor: '#F5F5F5', padding: 10, borderRadius: 20, marginTop: 20 }}>
                  <TextInput
                    secureTextEntry={true}
                    onChangeText={TextInputValue => this.setState({
                      password: TextInputValue
                    })}
                    placeholder={'รหัสผ่าน'}
                    style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%') }}
                    underlineColorAndroid={'transparent'}
                    numberOfLines={1}
                    returnKeyType={"done"}
                    clearButtonMode="always" />

                </View>
              </View>
              :
              <View>
                <PhoneInput
                  defaultValue={''}
                  defaultCode="TH"
                  withDarkTheme
                  onChangeFormattedText={(code) => {
                    console.log(`Code is ${code}, you are good to go!`)
                  }}
                />
              </View>
            }

          </View>
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <TouchableOpacity onPress={() => {
              if (this.state.username == '' || this.state.password == '') {
                alert('กรุณากรอก Username และ Password')
              } else {
                // if (this.state.username == 'user1') {
                //   this.storeUser(this.state.username).then(
                //     this.props.navigation.navigate('Main')
                //   )
                // } 
                if (this.state.username == 'engineer1') {
                  this.props.navigation.navigate('MainEngineer')
                } else {
                  this.onLogin()
                }
              }
            }}
              style={[styles.button, styles.buttonMobile]}>
              <Text style={styles.buttonText}>เข้าสู่ระบบ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('RegisterScreen')
              }
            }
              style={[styles.button, styles.buttonMobile]}>
              <Text style={styles.buttonText}>สมัครสมาชิก</Text>
            </TouchableOpacity>

            {/* {this.state.typeLogin == 'username' ?
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('RegisterScreen')}
              style={{ alignSelf: 'flex-start', marginHorizontal: 45, marginVertical: 20 }}>
              <Text style={styles.buttonText1}>สมัครสมาชิก</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({
              typeLogin: 'mobile'
            })}
              style={{ alignSelf: 'flex-end', marginHorizontal: 45, marginVertical: 20 }}>
              <Text style={styles.buttonText1}>เข้าสู่ระบบผ่านเบอร์โทรศัพท์</Text>
            </TouchableOpacity>
            </View>
            :
            <TouchableOpacity onPress={() => this.setState({
              typeLogin: 'username'
            })}
              style={{ alignSelf: 'flex-end', marginHorizontal: 45, marginVertical: 20 }}>
              <Text style={styles.buttonText1}>เข้าสู่ระบบผ่าน Username / Password</Text>
            </TouchableOpacity>
          } */}
          </View>
          {/* <View style={{ justifyContent: 'center', flex: 0.33, alignItems: 'center' }}>
        <Text style={styles.buttonText1}>เข้าสู่ระบบผ่าน Username / Password</Text>
        </View> */}
        </KeyboardAvoidingView>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
    flex: 0.33,
    alignItems: 'center',
  },
  button: {
    height: hp('6%'),
    width: width * .8,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonMobile: {
    backgroundColor: '#EA8741',
  },
  message: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  buttonTextBlack: {
    fontSize: hp('2.6%'),
    color: '#000',
    fontFamily: 'sukhumvit-set-bold',
  },
  buttonTextBlack2: {
    fontSize: hp('2%'),
    color: '#000',
    fontFamily: 'sukhumvit-set',
  },
  buttonText: {
    fontSize: hp('2.5%'),
    color: '#fff',
    fontFamily: 'sukhumvit-set',
  },
  buttonText1: {
    fontSize: hp('1.8%'),
    color: '#999',
    fontFamily: 'sukhumvit-set',
  },
});
