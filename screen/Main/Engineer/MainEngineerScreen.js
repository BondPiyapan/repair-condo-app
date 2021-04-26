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
import firebase from 'firebase'; // 4.8.1
export default class ListRepairScreen extends React.Component {


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
      dateRepair: [
        { id: 1, nameUser: 'คุณ สมรัก รักดี', roomNo: '101', floor: '1', dateRepair: '23/03/64 13:00', type: 'โครงสร้าง', img: 'https://f.ptcdn.info/631/056/000/p5o0qd2ogbTGVDyQoI-o.jpg', reason: 'ผนักลอก' },
        { id: 2, nameUser: 'คุณ สมร รักการอ่าน', roomNo: '102', floor: '1', dateRepair: '24/03/64 15:00', type: 'ทั่วไป', img: 'http://f.ptcdn.info/374/029/000/1426429512-image-o.jpg', reason: 'ขอบกำแพงหลุด' },
        { id: 3, nameUser: 'คุณ สมศรี ดีใจ', roomNo: '103', floor: '1', dateRepair: '23/03/64 11:00', type: 'โครงสร้าง', img: 'https://static.posttoday.com/media/content/2017/06/18/B13DA534D34841EEB59688843F5C6053.jpg', reason: 'เพดานรั่ว' },
        { id: 4, nameUser: 'คุณ สามารถ มีชัย', roomNo: '201', floor: '2', dateRepair: '23/03/64 10:00', type: 'ทั่วไป', img: 'https://f.ptcdn.info/942/022/000/1409547282-image-o.jpg', reason: 'ผนักลอก, สีลอก' },
        { id: 5, nameUser: 'คุณ สมชาย มีใจ', roomNo: '202', floor: '2', dateRepair: '26/03/64 09:00', type: 'โครงสร้าง', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKMVQbwi8hDvARUpQFpVuaPlH1rGlw_hcbHQ&usqp=CAU', reason: 'ล้างแอร์' },
        { id: 6, nameUser: 'คุณ สมหมาย จงรัก', roomNo: '203', floor: '2', dateRepair: '27/03/64 16:00', type: 'ทั่วไป', img: 'https://cd.lnwfile.com/_/cd/_raw/cu/b3/wx.jpg', reason: 'คอมแอร์ขึ้นสนิม' },
        { id: 7, nameUser: 'คุณ ทองดี ฟันขาว', roomNo: '301', floor: '3', dateRepair: '28/03/64 14:00', type: 'ทั่วไป', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_fsIP4TyG9N4y17KSp-EW213p9B1sHoDbrGb-F_poZW7reeGC8LgbNyZoOBO7Y5QRcHY&usqp=CAU', reason: 'ล้างแอร์' },
        { id: 8, nameUser: 'คุณ ทองศรี มีสุข', roomNo: '301', floor: '3', dateRepair: '28/03/64 08:00', type: 'โครงสร้าง', img: 'https://f.ptcdn.info/912/060/000/picdwe1vnaq65RBju5x-o.png', reason: 'กำแพงด้านนอกแตก' },
      ],
      dataRepair: null

    }


  }

  UNSAFE_componentWillMount() {
    firebase
      .database()
      .ref('dataRepair')
      // .on('value', snapshot => {
      //   let array = [];
      //   snapshot.forEach(function (childSnapshot) {
      //     // const key = childSnapshot.key;
      //     const childData = childSnapshot.val();
      //     console.log(childData);
      //     array.push(childData);
      //   });
      //   this.setState({ dataRepair: array, loader: false });
      // });
      .on('value', snapshot => {
        let array = [];
        snapshot.forEach(function (childSnapshot) {
          const key = childSnapshot.key;
          const childData = childSnapshot.val();
          const data = {
            idOrder : key,
            childData
          }
          console.log(data);
          array.push(data);
        });
        this.setState({ dataRepair: array, loader: false });
      });
  }

  renderItem(item) {
    console.log('item', item)
    return (
      <View style={{ paddingHorizontal: 15, marginVertical: 10 }}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailEngineer', { data: item })}
          style={{
            flexDirection: 'row', width: width * .9, borderRadius: 10, backgroundColor: '#fff',
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.25,
            shadowRadius: 1.84,
            elevation: 3,
            alignItems: 'center'
          }}>
          <View style={{ flex: 0.2, padding: 10 }}>
            <Images
              width={width * .15}
              source={{ uri: item.childData.img }}
            />
          </View>
          <View style={{ justifyContent: 'flex-start', padding: 5, marginLeft: 40 }}>
            <Text
              style={{
                color: '#000',
                fontSize: hp('1.8%'),
                fontFamily: 'sukhumvit-set-bold',
              }}>คุณ {item.childData.datauser.name}</Text>
            <Text
              style={{
                color: '#000',
                fontSize: hp('1.8%'),
                fontFamily: 'sukhumvit-set-bold',
              }}>ห้อง : {item.childData.datauser.roomNo}</Text>
            <Text
              style={{
                color: '#000',
                fontSize: hp('1.8%'),
                fontFamily: 'sukhumvit-set-bold',
              }}>ชั้น : {item.childData.datauser.floor}</Text>
            <Text
              style={{
                color: '#000',
                fontSize: hp('1.8%'),
                fontFamily: 'sukhumvit-set-bold',
              }}>ประเภท : {item.childData.type}</Text>
            <Text
              style={{
                color: '#000',
                fontSize: hp('1.8%'),
                fontFamily: 'sukhumvit-set-bold',
              }}>วันที่เข้าซ่อม : {item.childData.dateRepair}</Text>
            {/* {item.verify == true ?
              <Text
                numberOfLines={1}
                style={{
                  width: width * .3,
                  color: '#66CC66',
                  fontSize: hp('1.8%'),
                  fontFamily: 'sukhumvit-set',
                }}>{check}</Text> :
              <Text
                numberOfLines={1}
                style={{
                  width: width * .3,
                  color: '#FF3333',
                  fontSize: hp('1.8%'),
                  fontFamily: 'sukhumvit-set',
                }}>{check}</Text>
            } */}

          </View>

        </TouchableOpacity>
      </View>
    )
  }



  render() {

    return (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.state.dataRepair}
          renderItem={({ item }) => this.renderItem(item)}
        //  keyExtractor={(item) => item.id.toString()}
        />
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