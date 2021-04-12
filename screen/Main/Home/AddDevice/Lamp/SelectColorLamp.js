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
import ColorPicker from 'react-native-wheel-color-picker'

export default class SelectColorLamp extends React.Component {
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
            slide: 50,
            selectColor: '#3d5afe'
            
        }
    }

    mainHeader() {
        if (this.state.showmainHeader == true) {
            return (
                <View style={{
                    backgroundColor: '#fff', shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 0.8,
                    elevation: 3,
                    borderBottomRightRadius: hp('2%'),
                    borderBottomLeftRadius: hp('2%')
                }}>
                    <View style={{ flexDirection: 'row', marginTop: Constants.statusBarHeight + hp('1%'), paddingHorizontal: hp('2%') }}>
                        <View style={{ flex: 0.2 }}>
                            <TouchableOpacity style={{
                                height: hp('5%'),
                                width: hp('5%'),
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
                                borderRadius: hp('5%') / 2
                            }}>
                                <Icon.Entypo
                                    name='chevron-small-down'
                                    size={26}
                                    style={{ alignItems: 'center', justifyContent: 'center' }}
                                    color={'#000'}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 0.6, alignItems: 'center' }}>
                            <TouchableOpacity style={{
                                height: hp('5%'),
                                width: hp('15%'),
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
                                borderRadius: hp('5%') / 2
                            }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon.Entypo
                                        name='light-down'
                                        size={26}
                                        style={{ alignItems: 'center', justifyContent: 'center' }}
                                        color={'#ff6c00'}
                                    />
                                    <Text style={{
                                        fontSize: hp('2%'),
                                        color: '#000',
                                        fontFamily: 'sukhumvit-set',
                                    }}>Feb.25th</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 0.2, alignItems: 'flex-end' }}>
                            <TouchableOpacity style={{
                                height: hp('6%'),
                                width: hp('6%'),
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
                                backgroundColor: '#1d1d1d',
                                elevation: 3,
                                borderRadius: hp('6%') / 2
                            }}>
                                <View style={{ width: 15, height: 15, borderRadius: 7.5, backgroundColor: '#99CCFF', borderWidth: 1, borderColor: '#fafafa' }}
                                />
                                <View style={{ position: 'absolute', top: -3, right: 0, width: 14, height: 14, borderRadius: 7, backgroundColor: '#3d5afe', borderWidth: 1, borderColor: '#fafafa' }}>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={{ paddingHorizontal: hp('2%'), marginTop: hp('1%') }}>
                        <Text style={{
                            fontSize: hp('3.5%'),
                            color: '#000',
                            fontFamily: 'sukhumvit-set',
                        }}>Good Morning,</Text>
                        <Text style={{
                            fontSize: hp('3.5%'),
                            color: '#000',
                            fontFamily: 'sukhumvit-set',
                            marginTop: -10
                        }}>User!</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingHorizontal: hp('2%'), paddingVertical: hp('1%') }}>
                        <View style={{ flex: 0.5 }}>
                            <Text style={{
                                fontSize: hp('2.5%'),
                                color: '#000',
                                fontFamily: 'sukhumvit-set',
                                marginTop: -10
                            }}>Scenes</Text>
                        </View>
                        <TouchableOpacity style={{ flex: 0.5, alignItems: 'flex-end' }}>
                            <Icon.MaterialCommunityIcons
                                name='dots-vertical'
                                size={20}
                                style={{ alignItems: 'center', justifyContent: 'center' }}
                                color={'#ccc'}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <View style={{ alignItems: 'center', flex: 0.2 }}>
                            <TouchableOpacity style={{
                                height: hp('12%'),
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
                                borderRadius: hp('8%') / 2
                            }}>
                                <View style={{
                                    height: hp('6%'),
                                    width: hp('6%'),
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 5,
                                    backgroundColor: '#FCD4D2',
                                    borderRadius: hp('7%') / 2
                                }}>
                                    <Icon.Ionicons
                                        name='ios-musical-note'
                                        size={23}
                                        style={{ alignItems: 'center', justifyContent: 'center' }}
                                        color={'#D94229'}
                                    />
                                </View>
                                <Text style={{
                                    fontSize: hp('1.6%'),
                                    color: '#000',
                                    fontFamily: 'sukhumvit-set',
                                }}>Music</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{ alignItems: 'center', flex: 0.2 }}>
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
                                borderRadius: hp('8%') / 2
                            }}>
                                <View style={{
                                    height: hp('6%'),
                                    width: hp('6%'),
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 5,
                                    backgroundColor: '#D3DAFD',
                                    borderRadius: hp('7%') / 2
                                }}>
                                    <Icon.FontAwesome5
                                        name='walking'
                                        size={23}
                                        style={{ alignItems: 'center', justifyContent: 'center' }}
                                        color={'#3D59F4'}
                                    />
                                </View>
                            </TouchableOpacity>
                            <Text style={{
                                fontSize: hp('1.6%'),
                                color: '#000',
                                fontFamily: 'sukhumvit-set',
                            }}>Music</Text>
                        </View>
                        <View style={{ alignItems: 'center', flex: 0.2 }}>
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
                                <View style={{
                                    height: hp('6%'),
                                    width: hp('6%'),
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 5,
                                    backgroundColor: '#ECE3FC',
                                    borderRadius: hp('7%') / 2
                                }}>
                                    <Icon.Ionicons
                                        name='ios-moon'
                                        size={23}
                                        style={{ alignItems: 'center', justifyContent: 'center' }}
                                        color={'#5124BA'}
                                    />
                                </View>
                            </TouchableOpacity>
                            <Text style={{
                                fontSize: hp('1.6%'),
                                color: '#000',
                                fontFamily: 'sukhumvit-set',
                            }}>Music</Text>
                        </View>
                        <View style={{ alignItems: 'center', flex: 0.2 }}>
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
                                <View style={{
                                    height: hp('6%'),
                                    width: hp('6%'),
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 5,
                                    backgroundColor: '#C8F0D9',
                                    borderRadius: hp('7%') / 2
                                }}>
                                    <Icon.MaterialIcons
                                        name='movie'
                                        size={23}
                                        style={{ alignItems: 'center', justifyContent: 'center' }}
                                        color={'#00C951'}
                                    />
                                </View>
                            </TouchableOpacity>
                            <Text style={{
                                fontSize: hp('1.6%'),
                                color: '#000',
                                fontFamily: 'sukhumvit-set',
                            }}>Music</Text>
                        </View>
                        <View style={{ alignItems: 'center', flex: 0.2 }}>
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
                                <View style={{
                                    height: hp('6%'),
                                    width: hp('6%'),
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 5,
                                    backgroundColor: '#FFF1DC',
                                    borderRadius: hp('6%') / 2
                                }}>
                                    <Icon.FontAwesome
                                        name='bed'
                                        size={23}
                                        style={{ alignItems: 'center', justifyContent: 'center' }}
                                        color={'#FDA442'}
                                    />
                                </View>
                            </TouchableOpacity>
                            <Text style={{
                                fontSize: hp('1.6%'),
                                color: '#000',
                                fontFamily: 'sukhumvit-set',
                            }}>Music</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: hp('2%'), alignItems: 'center' }}>
                        <View style={{ height: 2, backgroundColor: '#ccc', marginTop: 10, marginBottom: 10, width: width * .1 }} />
                    </View>
                </View>
            )
        } else {
            null
        }


    }

    editHeader() {
        if (this.state.showeditHeader == true) {
            return (
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
                                    name='device-hub'
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
                            }}>Edit</Text>
                            <TouchableOpacity
                                style={{
                                    height: hp('7%'),
                                    width: hp('7%'),
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 5,
                                    borderRadius: hp('7%') / 2,
                                    borderWidth: 1,
                                    borderColor: '#ccc',
                                    marginTop: 10
                                }}>
                                <Icon.AntDesign
                                    name='plus'
                                    size={26}
                                    style={{ alignItems: 'center', justifyContent: 'center' }}
                                    color={'#000'}
                                />
                            </TouchableOpacity>
                            <Text style={{
                                fontSize: hp('2%'),
                                color: '#ccc',
                                marginTop: 10,
                                fontFamily: 'sukhumvit-set',
                            }}>ADD DEVICE</Text>
                        </View>


                    </View>
                </View>
            )
        } else {
            null
        }

    }

    selectRoom() {
        return (
            <Modal
                transparent={true}
                visible={this.state.showSelectRoom}
            >
                <View style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.20)',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Modal
                        animationType={'slide'}
                        transparent={true}
                    >
                        <View style={{
                            width: width * .45, backgroundColor: '#fff',
                            position: 'absolute',
                            bottom: 10,
                            left: 10,
                            borderRadius: 20
                        }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, }}>
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
                                        name='home'
                                        size={26}
                                        style={{ alignItems: 'center', justifyContent: 'center' }}
                                        color={'#000'}
                                    />
                                </TouchableOpacity>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{
                                        fontSize: hp('2.5%'),
                                        color: '#000',
                                        fontFamily: 'sukhumvit-set-bold',
                                    }}>Room</Text>
                                    <Text style={{
                                        fontSize: hp('2%'),
                                        color: '#ccc',
                                        fontFamily: 'sukhumvit-set',
                                        marginTop: -7
                                    }}>4 Room</Text>
                                </View>
                            </View>
                            <View style={{ backgroundColor: '#F5F5F5', padding: 20, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, alignItems: 'center' }}>
                                <Text style={{
                                    fontSize: hp('2%'),
                                    color: '#999',
                                    fontFamily: 'sukhumvit-set',
                                    marginVertical: 10
                                }}>Kitchen</Text>
                                <TouchableOpacity onPress={() => this.setState({
                                    showSelectRoom: false
                                })}
                                    style={{
                                        height: hp('5%'),
                                        width: width * .4,
                                        justifyContent: 'center',
                                        borderRadius: 5,
                                        backgroundColor: '#fff',
                                        borderRadius: hp('5%') / 2,
                                        alignItems: 'center'
                                    }}>
                                    <Text style={{
                                        fontSize: hp('2%'),
                                        color: '#999',
                                        fontFamily: 'sukhumvit-set',

                                    }}>Living Room</Text>
                                </TouchableOpacity>
                                <Text style={{
                                    fontSize: hp('2%'),
                                    color: '#999',
                                    fontFamily: 'sukhumvit-set',
                                    marginVertical: 10
                                }}>Bathroom</Text>
                                <TouchableOpacity style={{
                                    height: hp('5%'),
                                    width: width * .4,
                                    justifyContent: 'center',
                                    borderRadius: 5,
                                    backgroundColor: '#D3DAFD',
                                    borderRadius: hp('5%') / 2,
                                    alignItems: 'center'
                                }}>
                                    <Text style={{
                                        fontSize: hp('2%'),
                                        color: '#3d5afe',
                                        fontFamily: 'sukhumvit-set-bold',

                                    }}>+ ADD ROOM</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </Modal>
                </View>

            </Modal>
        )
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
                                <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: this.state.selectColor, borderWidth: 1, borderColor: '#fafafa' }}
                                />
                            </TouchableOpacity>
                            <Text style={{
                                fontSize: hp('3%'),
                                color: '#000',
                                marginTop: 10,
                                fontFamily: 'sukhumvit-set-bold',
                            }}>Color</Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                                <ColorPicker
                                    ref={r => { this.picker = r }}
                                    color={this.state.selectColor}
                                    thumbSize={30}
                                    sliderSize={0}
                                    onColorChange={(color) => this.setState({
                                        selectColor: color
                                    })}
                                />
                            </View>
                        <View style={{ position: 'absolute', bottom: -550, right: 0, left: 0, flex: 1 }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: hp('1%') }}>
                                <View style={{ flex: 0.5, alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.goBack(null)} style={{
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

                                <View style={{ flex: 0.5, alignItems: 'center' }}>
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
                                            name='check'
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
                                    }}>CERTAIN</Text>
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