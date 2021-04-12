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
import CircleSlider from "react-native-circle-slider";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class DetailAir extends React.Component {
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
                                <Icon.FontAwesome
                                    name='snowflake-o'
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
                            }}>Air Conditioner</Text>
                            <Text style={{
                                fontSize: hp('2.5%'),
                                color: '#999',
                                marginTop: 10,
                                fontFamily: 'sukhumvit-set',
                            }}>COOL</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <View style={{ flex: 0.33, alignItems: 'flex-end' }}>
                                    <TouchableOpacity
                                        style={{
                                            height: hp('4%'),
                                            width: hp('4%'),
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
                                            borderRadius: hp('4%') / 2,
                                        }}>
                                        <Icon.AntDesign
                                            name='plus'
                                            size={20}
                                            style={{ alignItems: 'center', justifyContent: 'center' }}
                                            color={'#000'}
                                        />
                                    </TouchableOpacity>

                                </View>
                                <View style={{ flex: 0.33, alignItems: 'center' }}>
                                    <Text style={{
                                        fontSize: hp('4%'),
                                        color: '#000',
                                        fontFamily: 'sukhumvit-set-bold',
                                    }}>{this.state.slide}</Text>
                                </View>
                                <View style={{ flex: 0.33, alignItems: 'flex-start' }}>
                                    <TouchableOpacity
                                        style={{
                                            height: hp('4%'),
                                            width: hp('4%'),
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
                                            borderRadius: hp('4%') / 2,
                                        }}>
                                        <Icon.AntDesign
                                            name='minus'
                                            size={20}
                                            style={{ alignItems: 'center', justifyContent: 'center' }}
                                            color={'#000'}
                                        />
                                    </TouchableOpacity>

                                </View>
                            </View>
                            <Text style={{
                                fontSize: hp('2.5%'),
                                color: '#999',
                                marginTop: -10,
                                fontFamily: 'sukhumvit-set',
                            }}>°C</Text>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 0.33 }}>
                                    <Text style={{
                                        fontSize: hp('2.5%'),
                                        color: '#999',
                                        fontFamily: 'sukhumvit-set',
                                    }}>16°C</Text>
                                </View>
                                <View style={{ flex: 0.33, alignItems: 'center' }}>
                                    <Slider
                                        vertical={true}
                                        onValueChange={(value) => this.setState({
                                            slide: value
                                        })}
                                        step={0.5}
                                        value={this.state.slide}
                                        style={{ width: 220, height: 40 }}
                                        minimumValue={16}
                                        maximumValue={30}
                                        minimumTrackTintColor="#3d5afe"
                                        maximumTrackTintColor="#ccc"
                                    />
                                </View>
                                <View style={{ flex: 0.33, alignItems: 'flex-end' }}>
                                    <Text style={{
                                        fontSize: hp('2.5%'),
                                        color: '#999',
                                        fontFamily: 'sukhumvit-set',
                                    }}>30°C</Text>

                                </View>
                            </View>
                            <TouchableOpacity style={{
                                height: hp('5%'),
                                width: hp('14%'),
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 5,
                                backgroundColor: '#D3DAFD',
                                borderRadius: hp('5%') / 2
                            }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={{
                                        fontSize: hp('2%'),
                                        color: '#3d5afe',
                                        fontFamily: 'sukhumvit-set-bold',
                                    }}>Auto Adjust</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{
                                height: hp('7%'),
                                width: width * .7,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 5,
                                backgroundColor: '#D3D3D3',
                                borderRadius: hp('7%') / 2,
                                marginTop: hp('5%'),
                                flexDirection: 'row'
                            }}>
                                <TouchableOpacity style={{ flex: 0.25, alignItems: 'center' }}>
                                    <Icon.MaterialIcons
                                        name='wb-sunny'
                                        size={20}
                                        style={{ alignItems: 'center', justifyContent: 'center' }}
                                        color={'#000'}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    flex: 0.25,
                                    height: hp('7%'),
                                    width: hp('7%'),
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#fff',
                                    borderRadius: hp('7%') / 2,
                                }}>
                                    <Icon.FontAwesome
                                        name='snowflake-o'
                                        size={20}
                                        style={{ alignItems: 'center', justifyContent: 'center' }}
                                        color={'#000'}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flex: 0.25, alignItems: 'center' }}>
                                    <Icon.Feather
                                        name='wind'
                                        size={20}
                                        style={{ alignItems: 'center', justifyContent: 'center' }}
                                        color={'#000'}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flex: 0.25, alignItems: 'center' }}>
                                    <Icon.MaterialCommunityIcons
                                        name='water'
                                        size={20}
                                        style={{ alignItems: 'center', justifyContent: 'center' }}
                                        color={'#000'}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ position: 'absolute', bottom: -250, right: 0, left: 0, flex: 1 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 0.33, alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SelectColorLamp')}
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
                                            borderRadius: hp('7%') / 2,
                                            marginTop: -hp('2.8%'),
                                        }}>
                                        <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: '#99CCFF', borderWidth: 1, borderColor: '#fafafa' }}
                                        />
                                    </TouchableOpacity>
                                    <Text style={{
                                        fontSize: hp('2%'),
                                        color: '#000',
                                        marginTop: 5,
                                        fontFamily: 'sukhumvit-set-bold',
                                    }}>Color</Text>
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
                                        <Icon.Entypo
                                            name='time-slot'
                                            size={26}
                                            style={{ alignItems: 'center', justifyContent: 'center' }}
                                            color={'#000'}
                                        />
                                    </TouchableOpacity>
                                    <Text style={{
                                        fontSize: hp('2%'),
                                        color: '#000',
                                        marginTop: 5,
                                        fontFamily: 'sukhumvit-set-bold',
                                    }}>Time</Text>
                                    <Text style={{
                                        fontSize: hp('2%'),
                                        color: '#ccc',
                                        marginTop: -7,
                                        fontFamily: 'sukhumvit-set',
                                    }}>6pm - 9pm</Text>
                                </View>
                                <View style={{ flex: 0.33, alignItems: 'center' }}>
                                    <TouchableOpacity 
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
                                        <Icon.FontAwesome
                                            name='bed'
                                            size={26}
                                            style={{ alignItems: 'center', justifyContent: 'center' }}
                                            color={'#FDA442'}
                                        />
                                    </TouchableOpacity>
                                    <Text style={{
                                        fontSize: hp('2%'),
                                        color: '#000',
                                        marginTop: 5,
                                        fontFamily: 'sukhumvit-set-bold',
                                    }}>Scenes</Text>
                                    <Text style={{
                                        fontSize: hp('2%'),
                                        color: '#ccc',
                                        marginTop: -7,
                                        fontFamily: 'sukhumvit-set',
                                    }}>Sleeping</Text>
                                </View>
                            </View>
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
                                        <Icon.Ionicons
                                            name='md-settings'
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
                                    }}>SETTING</Text>
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