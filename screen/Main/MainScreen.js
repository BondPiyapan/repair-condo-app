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
export default class MainScreen extends React.Component {


  constructor(props) {
    super(props)
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
      dataLand: [
        {
          id: 1,
          name: 'อนุญาตก่อสร้าง 8 มกราคม 2564 ตามเลขที่ ด.08/64  หมดอายุ 7 มกราคม 2565 ประเภทอาคาร  บ้านพักอาศัย วิศวกรผู้ควบคุมงาน นายก.(แบบแปลนมีข้อมูลตามลิงค์ pdf.)',
          pdf: Asset.fromModule(require('../../assets/pdf/point1.pdf')).uri,
          latitude: 13.798298398984015, longitude: 100.5198856146045,
        },
        {
          id: 2,
          name: 'อยู่ระหว่างตรวจสอบการขออนุญาต (ยื่นขออนุญาต 25 ก.พ.64)',
          pdf: null,
          latitude: 13.797871083680556, longitude: 100.52248017450053,
        },
        {
          id: 3,
          name: 'ก่อสร้างตามมาตรา 39 ทวิ (แบบแปลนมีข้อมูลตามลิงค์ pdf.)',
          pdf: Asset.fromModule(require('../../assets/pdf/point3.pdf')).uri,
          latitude: 13.795749230582178, longitude: 100.52768446715743,
        },
        {
          id: 4,
          name: 'ขออนุญาตแล้วรอตรวจสอบระยะร่นแนวอาคาร (ยื่นขออนุญาต 30 ม.ค.64 )',
          pdf: null,
          latitude: 13.793715769843429, longitude: 100.53115905344129,
        },
        {
          id: 5,
          name: 'ไม่มีข้อมูลการขออนุญาต',
          pdf: null,
          latitude: 13.793391593275182, longitude: 100.5188235141739,
        },
        {
          id: 6,
          name: 'ได้รับการยกเว้นผ่อนผัน ตามกฎกระทรวง พ.ศ.2550',
          pdf: null,
          latitude: 13.796532725240903, longitude: 100.52206077447157,
        },
        {
          id: 7,
          name: 'อนุญาตก่อสร้าง 8 มกราคม 2564 ตามเลขที่ ด.09/64  หมดอายุ 20 มกราคม 2565 ประเภทอาคาร  อาคารพาณิชย์ วิศวกรผู้ควบคุมงาน นายข. สถาปนิกคุมงาน นางจ.(แบบแปลนมีข้อมูลตามลิงค์ pdf.)',
          pdf: Asset.fromModule(require('../../assets/pdf/point7.pdf')).uri,
          latitude: 13.783114228871181, longitude: 100.52150100795117,
        },
        {
          id: 8,
          name: 'อยู่ระหว่างตรวจสอบการขออนุญาต (ยื่นขออนุญาต 2 ก.พ.64)',
          pdf: null,
          latitude: 13.775810053954375, longitude: 100.52493595421727,
        },
        {
          id: 9,
          name: 'ได้รับการยกเว้นผ่อนผัน ตามกฎกระทรวง พ.ศ.2550',
          pdf: null,
          latitude: 13.779673745088495, longitude: 100.50686462914,
        },
        {
          id: 10,
          name: 'ขออนุญาตที่สำนักการโยธา',
          pdf: null,
          latitude: 13.775275800337786, longitude: 100.50552732164421,
        }
      ],
      polygons: [
        // จุดที่ 1
        [
          { latitude: 13.79825707805408, longitude: 100.51871067312717 },
          { latitude: 13.79971897057813, longitude: 100.51908399717368 },
          { latitude: 13.79893539732444, longitude: 100.52121555705214 },
          { latitude: 13.79732146203115, longitude: 100.52126372789684 },
        ],
      ],
      dataUser: null
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

    // user = this.props.navigation.getParam('user')
  }

  async retrieveUser(key) {
    try {
      const retrievedItem = await AsyncStorage.getItem(key);
      const item = JSON.parse(retrievedItem);
      return item;
    } catch (error) {
      console.log(error.message);
    }
    return
  }

  UNSAFE_componentWillMount() {
    this.retrieveUser("user").then((goals) => {
      console.log('user', goals)
      if (goals != null) {
        this.setState({
          dataUser: {
            uid: goals.uid,
            name: goals.firstName + '  ' + goals.lastName,
            roomNo: goals.roomno,
            floor: goals.floor,
            tel: goals.tel
          },
          loader: false
        })
      }
    })
  }


  render() {
    if(this.state.loader){
      return null
    }
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={true}>
          <View style={{ alignItems: 'center', marginBottom: hp('10%'), marginTop: hp('5%') }}>
            <View style={{
              width: hp('10%'), height: hp('10%'),
              borderRadius: hp('10%') / 2,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 15,
            }}>

              <ImageBackground style={{
                height: hp('21%'),
                width: hp('21%'),
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: hp('21%') / 2,
                marginTop: hp('10%')
              }}
                imageStyle={{ borderRadius: hp('21%') / 2 }}
                source={{ uri: 'https://www.lopburicancer.in.th/img/user.png' }}
              >
              </ImageBackground>
            </View>
          </View>
          <View style={{ alignItems: 'center', marginTop: 50 }}>
            <Text
              style={{
                color: '#000',
                fontSize: hp('4%'),
                fontFamily: 'sukhumvit-set-bold',
              }}>{this.state.dataUser.name}</Text>
          </View>
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#EA8741', alignItems: 'center', justifyContent: 'center' }}>
              <Icon.FontAwesome5
                name='building'
                size={26}
                style={{ alignItems: 'center', justifyContent: 'center' }}
                color={'#fff'}
              />
            </View>
            <Text
              style={{
                color: '#000',
                fontSize: hp('3%'),
                fontFamily: 'sukhumvit-set-bold',
                marginTop: 7
              }}>ห้อง {this.state.dataUser.roomNo} ชั้น {this.state.dataUser.floor}</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('RepairScreen', { datauser: this.state.dataUser })}
              style={[styles.button, styles.buttonMobile]}>
              <Text style={styles.buttonText}>แจ้งซ่อม</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ListRepairScreen', { datauser: this.state.dataUser })}
              style={[styles.button, {backgroundColor: 'green'}]}>
              <Text style={styles.buttonText}>รายการแจ้งซ่อมของคุณ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Login'),AsyncStorage.setItem('user', JSON.stringify(null));}}
              style={[styles.button, styles.buttonMobile2]}>
              <Text style={styles.buttonText}>ออกจากระบบ</Text>
            </TouchableOpacity>
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
  buttonMobile2: {
    backgroundColor: 'red',
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