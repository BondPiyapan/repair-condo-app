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

const { height, width } = Dimensions.get('window')
import Images from 'react-native-scalable-image';
import PhoneInput from "react-native-phone-number-input";
import Constants from 'expo-constants'
import * as Icon from '@expo/vector-icons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Asset } from 'expo-asset';
import PDFReader from 'rn-pdf-reader-js'
export default class MainScreenList extends React.Component {


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
      dataList: null
    }

    data = this.props.navigation.getParam('data')


  }

  UNSAFE_componentWillMount() {
    console.log('data', data)
    this.setState({
      dataList: data, loader: false
    })
  }

  renderItem(item) {
    return (
      <View style={{ paddingHorizontal: 15, marginVertical: 10 }}>
        <TouchableOpacity onPress={() => {
          if (item.pdf == null) {
            alert('ไม่มีไฟล์ PDF')
          } else {
            this.props.navigation.navigate('MainDetail', { data: item })
          }
        }}
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
              source={{ uri: 'https://freepikpsd.com/wp-content/uploads/2019/10/map-icon-png-1-Transparent-Images-Free.png' }}
            />
          </View>
          <View style={{ flex: 0.8, justifyContent: 'flex-start', padding: 5 }}>
            <Text
              style={{
                color: '#000',
                fontSize: hp('1.8%'),
                fontFamily: 'sukhumvit-set-bold',
              }}>{item.name}</Text>
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
    if (this.state.loader) {
      return null
    }
    return (
      <View style={styles.container}>
        <View style={{ padding: 10, alignItems: 'center' }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#000',
              fontSize: hp('3%'),
              fontFamily: 'sukhumvit-set-bold',
            }}>{this.state.dataList.name}</Text>
        </View>
        {this.state.dataList.pdf != null ?
          <PDFReader
            source={{
              uri: this.state.dataList.pdf,
            }}
          />
          :
          null
        }
        {/* <FlatList
          showsVerticalScrollIndicator={false}
          data={this.state.dataList}
          renderItem={({ item }) => this.renderItem(item)}
        //  keyExtractor={(item) => item.id.toString()}
        /> */}
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