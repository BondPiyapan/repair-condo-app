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
} from 'react-native';

const { height, width } = Dimensions.get('window')
import Images from 'react-native-scalable-image';
import PhoneInput from "react-native-phone-number-input";
import Constants from 'expo-constants'
import * as Icon from '@expo/vector-icons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class MainScene extends React.Component {
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
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', marginTop: hp('6%'), padding: 20 }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', flex: 0.8 }}>
              <Text style={styles.buttonTextBlack2}>ID's home</Text>
              <Icon.Entypo
                name='chevron-small-right'
                size={26}
                style={{ alignItems: 'center', justifyContent: 'center' }}
              />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', flex: 0.2 }}>
              <TouchableOpacity style={{ alignItems: 'center', marginRight: 20 }}>
                <Icon.Entypo
                  name='text-document'
                  size={26}
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems: 'center' }}>
                <Icon.AntDesign
                  name='plus'
                  size={26}
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ alignItems: 'center', marginTop: hp('2%'), padding: 20, }}>
            <Text style={styles.buttonTextBlack2}>Custom</Text>
            <View style={{
              width: width * .9, height: hp('7%'), backgroundColor: '#fff', borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginTop: hp('2%'), flexDirection: 'row',
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.25,
              shadowRadius: 1.84,
              elevation: 5,
            }}>
              <View style={{ flex: 0.5, alignItems: 'flex-start', marginLeft: 10 }}>
                <Text style={styles.buttonText1}>All</Text>
              </View>
              <View style={{ flex: 0.5, alignItems: 'flex-end', marginRight: 10 }}>
                <Icon.Entypo
                  name='chevron-small-down'
                  size={26}
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                  color={'#999'}
                />
              </View>
            </View>
          </View>
          <View style={{ alignItems: 'center', marginTop: 50 }}>
            <Icon.FontAwesome5
              name='exclamation-triangle'
              size={50}
              style={{ alignItems: 'center', justifyContent: 'center' }}
              color={'#ccc'}
            />
            <Text style={{
              fontSize: hp('1.8%'),
              color: '#999',
              fontFamily: 'sukhumvit-set',
              marginTop: 50
            }}>Tap "+" to add scenes</Text>
          </View>
        </ScrollView>
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
    backgroundColor: '#4CAF50',
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
    fontSize: hp('2.8%'),
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
    color: '#000',
    fontFamily: 'sukhumvit-set',
  },
});
