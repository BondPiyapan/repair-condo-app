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
    ImageBackground
} from 'react-native';
import Slider from '@react-native-community/slider';

const { height, width } = Dimensions.get('window')
import Images from 'react-native-scalable-image';
import PhoneInput from "react-native-phone-number-input";
import Constants from 'expo-constants'
import * as Icon from '@expo/vector-icons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class DetailSpeaker extends React.Component {
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
            slide: 50
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <View>
                    <View style={{ marginTop: Constants.statusBarHeight + hp('3%'), paddingHorizontal: hp('2%') }}>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity style={{
                                height: hp('7%'),
                                width: hp('7%'),
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 5,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 1.84,
                                backgroundColor: '#fff',
                                elevation: 3,
                                borderRadius: hp('7%') / 2
                            }}>
                                <Icon.MaterialIcons
                                    name='speaker'
                                    size={26}
                                    style={{ alignItems: 'center', justifyContent: 'center' }}
                                    color={'#000'}
                                />
                            </TouchableOpacity>
                            <Text style={{
                                fontSize: hp('3%'),
                                color: '#000',
                                marginTop: 10,
                                fontFamily: 'sukhumvit-set-bold',
                            }}>Speaker</Text>

                        </View>
                        <View style={{ alignItems: 'center', marginTop: hp('4%') }}>
                            <ImageBackground style={{ height: hp('52%'), width: width * .75 }}
                                borderRadius={20}
                                blurRadius={5}
                                imageStyle={{ opacity: 0.1 }}
                                source={require('../../../../../assets/images/800.jpeg')}>
                                <View>
                                    <View style={{ flexDirection: 'row', padding: 10 }}>
                                        <View style={{ flex: 0.6, flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ backgroundColor: '#000', width: hp('5.5%'), height: hp('5.5%'), borderRadius: hp('5.5%') / 2, alignItems: 'center', justifyContent: 'center' }}>
                                                <Images
                                                    width={width * .1}
                                                    source={require('../../../../../assets/images/spotify.png')}
                                                />
                                            </View>
                                            <View style={{ marginLeft: hp('1%') }}>
                                                <Text style={{
                                                    fontSize: hp('2%'),
                                                    color: '#000',
                                                    fontFamily: 'sukhumvit-set-bold',
                                                }}>Spotify</Text>
                                                <Text style={{
                                                    fontSize: hp('1.4%'),
                                                    color: '#999',
                                                    fontFamily: 'sukhumvit-set',
                                                    marginTop: -7
                                                }}>Deadline:2021.07.25</Text>
                                            </View>
                                        </View>
                                        <View style={{ flex: 0.4, alignItems: 'flex-end' }}>
                                            <TouchableOpacity
                                                style={{
                                                    height: hp('3%'),
                                                    width: hp('9%'),
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderRadius: 5,
                                                    borderRadius: hp('5%') / 2,
                                                    borderWidth: 1,
                                                    borderColor: '#ccc'
                                                }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Text style={{
                                                        fontSize: hp('1.6%'),
                                                        color: '#000',
                                                        fontFamily: 'sukhumvit-set',
                                                    }}>OPEN APP</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Image
                                            style={{ width: hp('21%'), height: hp('21%'), borderRadius: 20 }}
                                            source={require('../../../../../assets/images/800.jpeg')}
                                        />
                                        <Text style={{
                                            fontSize: hp('2.5%'),
                                            color: '#000',
                                            fontFamily: 'sukhumvit-set-bold',
                                            marginTop: 10
                                        }}>Ligh On</Text>
                                        <Text style={{
                                            fontSize: hp('1.8%'),
                                            color: '#999',
                                            fontFamily: 'sukhumvit-set',
                                        }}>Maggie Rogers</Text>
                                        <Slider
                                            step={1}
                                            value={this.state.slide}
                                            style={{ width: width * .7, height: 40 }}
                                            minimumValue={0}
                                            maximumValue={100}
                                            minimumTrackTintColor="#3d5afe"
                                            maximumTrackTintColor="#ccc"
                                        />
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: -14, paddingHorizontal: 10 }}>
                                        <View style={{ flex: 0.5, alignItems: 'flex-start' }}>
                                            <Text style={{
                                                fontSize: hp('1.2%'),
                                                color: '#999',
                                                fontFamily: 'sukhumvit-set',
                                            }}>2:35</Text>
                                        </View>
                                        <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                                            <Text style={{
                                                fontSize: hp('1.2%'),
                                                color: '#999',
                                                fontFamily: 'sukhumvit-set',
                                            }}>3:54</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingHorizontal: 10, marginTop: hp('2%') }}>
                                        <View style={{ flex: 0.45, alignItems: 'center' }}>
                                            <View
                                                style={{
                                                    height: hp('5%'),
                                                    width: width * .3,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderRadius: 5,
                                                    borderRadius: hp('5%') / 2,
                                                    borderWidth: 1,
                                                    borderColor: '#ccc'
                                                }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <TouchableOpacity style={{ flex: 0.33, alignItems: 'center' }}>
                                                        <Icon.Entypo
                                                            name='controller-jump-to-start'
                                                            size={23}
                                                            style={{ alignItems: 'center', justifyContent: 'center' }}
                                                            color={'#ccc'}
                                                        />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={{ flex: 0.33, alignItems: 'center' }}>
                                                        <Icon.Entypo
                                                            name='controller-play'
                                                            size={23}
                                                            style={{ alignItems: 'center', justifyContent: 'center' }}
                                                            color={'#000'}
                                                        />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={{ flex: 0.33, alignItems: 'center' }}>
                                                        <Icon.Entypo
                                                            name='controller-next'
                                                            size={23}
                                                            style={{ alignItems: 'center', justifyContent: 'center' }}
                                                            color={'#ccc'}
                                                        />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ flex: 0.35, alignItems: 'center' }}>
                                            <TouchableOpacity
                                                style={{
                                                    height: hp('5%'),
                                                    width: width * .2,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderRadius: 5,
                                                    borderRadius: hp('5%') / 2,
                                                    borderWidth: 1,
                                                    borderColor: '#ccc'
                                                }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Icon.AntDesign
                                                        name='sound'
                                                        size={15}
                                                        style={{ alignItems: 'center', justifyContent: 'center', marginRight:hp('1%')  }}
                                                        color={'#000'}
                                                    />
                                                    <Text style={{
                                                        fontSize: hp('1.6%'),
                                                        color: '#000',
                                                        fontFamily: 'sukhumvit-set',
                                                    }}>72 %</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ flex: 0.15, alignItems: 'center' }}>
                                            <TouchableOpacity style={{
                                                height: hp('5%'),
                                                width: hp('5%'),
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: 5,
                                                backgroundColor: '#fff',
                                                borderRadius: hp('5%') / 2
                                            }}>
                                                <Icon.Entypo
                                                    name='star'
                                                    size={20}
                                                    style={{ alignItems: 'center', justifyContent: 'center' }}
                                                    color={'#3d5afe'}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={{ position: 'absolute', bottom: -150, right: 0, left: 0, flex: 1 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: hp('1%') }}>
                                <View style={{ flex: 0.33, alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}
                                        style={{
                                            height: hp('7%'),
                                            width: hp('7%'),
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 5,
                                            shadowColor: "#000",
                                            shadowOffset: {
                                                width: 0,
                                                height: 2,
                                            },
                                            shadowOpacity: 0.25,
                                            shadowRadius: 1.84,
                                            backgroundColor: '#fff',
                                            elevation: 3,
                                            borderRadius: hp('7%') / 2
                                        }}>
                                        <Icon.Feather
                                            name='arrow-left'
                                            size={26}
                                            style={{ alignItems: 'center', justifyContent: 'center' }}
                                            color={'#000'}
                                        />
                                    </TouchableOpacity>
                                    <Text style={{
                                        fontSize: hp('2%'),
                                        color: '#999',
                                        marginTop: 5,
                                        fontFamily: 'sukhumvit-set-bold',
                                    }}>BACK</Text>
                                </View>
                                <View style={{ flex: 0.33, alignItems: 'center' }}>
                                    <TouchableOpacity style={{
                                        height: hp('7%'),
                                        width: hp('7%'),
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 5,
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 2,
                                        },
                                        shadowOpacity: 0.25,
                                        shadowRadius: 1.84,
                                        backgroundColor: '#000',
                                        elevation: 3,
                                        borderRadius: hp('7%') / 2
                                    }}>
                                        <Icon.AntDesign
                                            name='poweroff'
                                            size={26}
                                            style={{ alignItems: 'center', justifyContent: 'center' }}
                                            color={'#fff'}
                                        />
                                    </TouchableOpacity>
                                    <Text style={{
                                        fontSize: hp('2%'),
                                        color: '#999',
                                        marginTop: 5,
                                        fontFamily: 'sukhumvit-set-bold',
                                    }}>OPENING</Text>
                                </View>
                                <View style={{ flex: 0.33, alignItems: 'center' }}>
                                    <TouchableOpacity style={{
                                        height: hp('7%'),
                                        width: hp('7%'),
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 5,
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 2,
                                        },
                                        shadowOpacity: 0.25,
                                        shadowRadius: 1.84,
                                        backgroundColor: '#fff',
                                        elevation: 3,
                                        borderRadius: hp('7%') / 2
                                    }}>
                                        <Icon.Feather
                                            name='cast'
                                            size={26}
                                            style={{ alignItems: 'center', justifyContent: 'center' }}
                                            color={'#000'}
                                        />
                                    </TouchableOpacity>
                                    <Text style={{
                                        fontSize: hp('2%'),
                                        color: '#999',
                                        marginTop: 5,
                                        fontFamily: 'sukhumvit-set-bold',
                                    }}>CAST TO</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
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
        backgroundColor: '#fafafa',
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