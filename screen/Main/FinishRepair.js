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
  Modal,
  ImageBackground,
  FlatList
} from 'react-native';
import Slider from "react-native-smooth-slider";
import MapView, { Callout, Marker, Polygon } from 'react-native-maps';
const { height, width } = Dimensions.get('window')
import Images from 'react-native-scalable-image';
import PhoneInput from "react-native-phone-number-input";
import Constants from 'expo-constants'
import * as Icon from '@expo/vector-icons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Asset } from 'expo-asset';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
export default class FinishRepair extends React.Component {
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
      value: 0.2,
      showeditHeader: false,
      showmainHeader: true,
      showSelectRoom: false,
      value: 0,
      imageReturn: null
      // dataLand: 
      // [
      //   {
      //     id: 1, name: 'เขต1', verify: true, latitude: 13.795903006603227, longitude: 100.5216561622555, 
      //     data: [
      //       { id: 1, name: 'จุดที่ 1 อนุญาตก่อสร้าง 8 มกราคม 2564 ตามเลขที่ ด.08/64  หมดอายุ 7 มกราคม 2564 ประเภทอาคาร  บ้านพักอาศัย วิศวกรผู้ควบคุมงาน นายก.(แบบแปลนมีข้อมูลตามลิงค์ pdf.)', pdf: Asset.fromModule(require('../../assets/pdf/test1.pdf')).uri },
      //       { id: 2, name: 'จุดที่ 2 อยู่ระหว่างตรวจสอบการขออนุญาต (ยื่นขออนุญาต วันที่-เดือน-ปี)', pdf: null },
      //       { id: 3, name: 'จุดที่ 3 ก่อสร้างตามมาตรา 39 ทวิ (แบบแปลนมีข้อมูลตามลิงค์ pdf.)', pdf: Asset.fromModule(require('../../assets/pdf/test1.pdf')).uri },
      //       { id: 4, name: 'จุดที่ 4 ขออนุญาตแล้วรอตรวจสอบระยะร่นแนวอาคาร (ยื่นขออนุญาต วันที่-เดือน-ปี)', pdf: null },
      //       { id: 5, name: 'จุดที่ 5 ไม่มีข้อมูลการขออนุญาต', pdf: null },
      //     ]
      //   },
      //   { id: 1, name: 'เขต2', verify: false, latitude: 13.794010499469968, longitude: 100.53277106883156 },
      //   { id: 1, name: 'เขต3', verify: true, latitude: 13.78020174230504, longitude: 100.52100658979326 },
      //   { id: 1, name: 'เขต4', verify: false, latitude: 13.778869890066627, longitude: 100.50462292880125 },
      //   { id: 1, name: 'เขต5', verify: true, latitude: 13.76499013610696, longitude: 100.51855264938035 },
      // ]
    }


  }



  render() {
    var radio_props = [
      { label: 'โครงสร้าง', value: 0 },
      { label: 'ทั่วไป', value: 1 }
    ];
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={true}>
          <View style={{ alignItems: 'center', padding: 20, marginTop: 100 }}>
            <View style={{ width: 200, height: 200, backgroundColor: '#EA8741', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => this._pickImage()}
                style={{ alignItems: 'center' }}>
                <Icon.Entypo
                  name='check'
                  size={100}
                  color={'#fff'}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                color: '#000',
                fontSize: hp('3%'),
                fontFamily: 'sukhumvit-set-bold',
                marginVertical: 50
              }}>คุณได้ทำการแจ้งซ่อมเรียบร้อยแล้ว</Text>
            <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('MainScreen')}
                style={[styles.button, styles.buttonMobile]}>
                <Text style={styles.buttonText}>เสร็จสิ้น</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }


}

var customStyles7 = StyleSheet.create({
  track: {
    height: 1,
    backgroundColor: 'rgba(150, 150, 150, 0.6)',
  },
  thumb: {
    width: 10,
    height: 10,
    backgroundColor: 'rgba(150, 150, 150, 0.3)',
    borderColor: '#fff',
    borderWidth: 14,
    borderRadius: 15,
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1
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
    color: '#999',
    fontFamily: 'sukhumvit-set',
  },
});
{/* <ScrollView showsVerticalScrollIndicator={false}>
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
                <Icon.AntDesign
                  name='bells'
                  size={26}
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('AddDevice')}
              style={{ alignItems: 'center' }}>
                <Icon.AntDesign
                  name='plus'
                  size={26}
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: hp('6%'), padding: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 0.8 }}>
              <Text style={styles.buttonTextBlack2}>Favorites</Text>
            </View>
            <View style={{ flexDirection: 'row', flex: 0.2, justifyContent: 'flex-end' }}>
              <TouchableOpacity style={{ alignItems: 'center', marginRight: 20 }}>
                <Icon.Feather
                  name='menu'
                  size={26}
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            <View style={{
              width: width * .9, height: hp('28%'), backgroundColor: '#fff', borderRadius: 10, alignItems: 'center', justifyContent: 'center',
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
              <Images
                width={width * .6}
                source={require('../../assets/images/adddeivce.jpg')}
              />
              <Text style={{
                  fontSize: hp('2%'),
                  color: '#ccc',
                  fontFamily: 'sukhumvit-set',
                }}>No device yet</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('AddDevice')}
                style={{ alignItems: 'center', borderRadius: 40, borderWidth: 1, padding: 7, width: width * .4}}>
                <Text style={{
                  fontSize: hp('2%'),
                  color: '#000',
                  fontFamily: 'sukhumvit-set',
                }}>Add Device</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView> */}