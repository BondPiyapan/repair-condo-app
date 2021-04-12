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
  ImageBackground
} from 'react-native';

const { height, width } = Dimensions.get('window')
import Images from 'react-native-scalable-image';
import PhoneInput from "react-native-phone-number-input";
import Constants from 'expo-constants'
import * as Icon from '@expo/vector-icons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class MainProfile extends React.Component {
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
          <View style={{ flexDirection: 'row', marginTop: hp('10%'), padding: 20, alignItems:'center' }}>
            <ImageBackground style={{
              height: hp('10%'),
              width: hp('10%'),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: hp('10%') / 2,
            }}
              imageStyle={{ borderRadius: hp('10%') / 2 }}
              source={{ uri: 'https://th.jobsdb.com/th-th/cms/employer/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png' }}
            >
            </ImageBackground>
            <View style={{marginLeft:hp('3%') }}>
              <Text style={{
                fontSize: hp('4%'),
                color: '#000',
                fontFamily: 'sukhumvit-set',
              }}>ID's home</Text>
              <Text style={{
                fontSize: hp('1.8%'),
                color: '#999',
                fontFamily: 'sukhumvit-set',
              }}>0 device</Text>
            </View>
          </View>
          <View style={{paddingHorizontal: 20}}>
          <View>
            <TouchableOpacity
              style={{ width: width, alignItems: 'center', flexDirection: 'row',  paddingVertical: 10 }}>
              <Images
                width={width * .05}
                source={require('../../../assets/images/icon_profile/Share.png')}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>Share</Text>
              </View>
              <View style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('4%'), flexDirection:'row', alignItems:'center' }}>
              <Icon.Entypo name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: '#F5F5F5' }} />
          <View>
            <TouchableOpacity
              style={{ width: width, alignItems: 'center', flexDirection: 'row',  paddingVertical: 10 }}>
              <Images
                width={width * .05}
                source={require('../../../assets/images/icon_profile/voice-01.png')}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>Voice service</Text>
              </View>
              <View style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('4%'), flexDirection:'row', alignItems:'center' }}>
              <Icon.Entypo name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: '#F5F5F5' }} />

          <View>
            <TouchableOpacity
              style={{ width: width, alignItems: 'center', flexDirection: 'row',  paddingVertical: 10 }}>
              <Images
                width={width * .05}
                source={require('../../../assets/images/icon_profile/BLE.png')}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>BLE Gateway</Text>
              </View>
              <View style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('4%'), flexDirection:'row', alignItems:'center' }}>
              <Icon.Entypo name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: '#F5F5F5' }} />
          <View>
            <TouchableOpacity
              style={{ width: width, alignItems: 'center', flexDirection: 'row',  paddingVertical: 10 }}>
              <Images
                width={width * .05}
                source={require('../../../assets/images/icon_profile/setting-01.png')}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>Settings</Text>
              </View>
              <View style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('4%'), flexDirection:'row', alignItems:'center' }}>
              <Icon.Entypo name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: '#F5F5F5' }} />

          <View>
            <TouchableOpacity
              style={{ width: width, alignItems: 'center', flexDirection: 'row',  paddingVertical: 10 }}>
              <Images
                width={width * .05}
                source={require('../../../assets/images/icon_profile/comment.png')}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>Help & Feedback</Text>
              </View>
              <View style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('4%'), flexDirection:'row', alignItems:'center' }}>
              <Icon.Entypo name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: '#F5F5F5' }} />
          <View>
            <TouchableOpacity
              style={{ width: width, alignItems: 'center', flexDirection: 'row',  paddingVertical: 10 }}>
              <Images
                width={width * .05}
                source={require('../../../assets/images/icon_profile/S.png')}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>User Agreement & Privacy Policy</Text>
              </View>
              <View style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('4%'), flexDirection:'row', alignItems:'center' }}>
              <Icon.Entypo name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ height: 1, backgroundColor: '#F5F5F5' }} />
          <View>
            <TouchableOpacity
              style={{ width: width, alignItems: 'center', flexDirection: 'row',  paddingVertical: 10 }}>
              <Images
                width={width * .05}
                source={require('../../../assets/images/icon_profile/star.png')}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2%'), marginLeft: hp('3%') }}>Rate</Text>
              </View>
              <View style={{ marginLeft: hp('3%'), position: 'absolute', right: hp('4%'), flexDirection:'row', alignItems:'center' }}>
              <Icon.Entypo name="chevron-small-right" size={hp('4.5%')} color="#ccc" />
              </View>
            </TouchableOpacity>
          </View>
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
