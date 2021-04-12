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
    FlatList
} from 'react-native';
import { RadioButton } from 'react-native-paper';
const { height, width } = Dimensions.get('window')
import Images from 'react-native-scalable-image';
import PhoneInput from "react-native-phone-number-input";
import Constants from 'expo-constants'
import * as Icon from '@expo/vector-icons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



export default class DetailDevice extends React.Component {
    static navigationOptions = {
        headerShown: false,
    };

    constructor(props) {
        super(props)
        this.state = {
            hasName: null,
            checked: false,
            loading: true,
            loader: true,
            device_token: '',
            isTablet: false,
            typeLogin: 'username',
            DATA: [
                {
                    title: "Main dishes",
                    data: ["Pizza", "Burger", "Risotto"]
                },
                {
                    title: "Sides",
                    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
                },
                {
                    title: "Drinks",
                    data: ["Water", "Coke", "Beer"]
                },
                {
                    title: "Desserts",
                    data: ["Cheese Cake", "Ice Cream"]
                }
            ]
        }

        img = this.props.navigation.getParam('img')
        devicename = this.props.navigation.getParam('devicename')
    }

    componentDidMount() {
        console.log('img', img)
    }


    render() {
        const { checked } = this.state;
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', marginTop: hp('4%'), padding: 20 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}
                        style={{ flexDirection: 'row', alignItems: 'center', flex: 0.2 }}>
                        <Icon.Entypo
                            name='chevron-small-left'
                            size={26}
                            style={{ alignItems: 'center', justifyContent: 'center' }}
                        />
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', flex: 0.6 }}>

                        <Text style={{
                            fontSize: hp('2.4%'),
                            color: '#000',
                            fontFamily: 'sukhumvit-set', textAlign: 'center', paddingHorizontal: 20, paddingVertical: 4
                        }}>Connect Device</Text>
                    </View>

                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{
                        fontSize: hp('2.4%'),
                        color: '#000',
                        fontFamily: 'sukhumvit-set-bold', textAlign: 'center', paddingHorizontal: 20, paddingVertical: 4
                    }}>{devicename}</Text>
                    <Text style={{
                        fontSize: hp('1.6%'),
                        color: '#000',
                        fontFamily: 'sukhumvit-set', textAlign: 'center', paddingHorizontal: 20, paddingVertical: 4
                    }}>Press and hold the reset button for about 3 seconds until the indicator light turns orage, which indicates it has been reset successfull</Text>
                    <View style={{ marginTop: hp('7%') }}>
                        <Images
                            width={width * .8}
                            source={img}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton.Android
                            status={checked === true ? 'checked' : 'unchecked'}
                            onPress={() => {
                                this.setState(prevState => ({
                                    checked: !prevState.checked
                                }));
                            }}
                        />
                        <Text style={{
                            fontSize: hp('2%'),
                            color: '#999',
                            fontFamily: 'sukhumvit-set', textAlign: 'center', paddingHorizontal: 20, paddingVertical: 4
                        }}>Operation confirmed</Text>
                    </View>
                    {this.state.checked == '' ?
                        <TouchableOpacity disabled={true} style={{ backgroundColor: '#ccc', padding: 8, width: width * .9, alignItems: 'center', borderRadius: 5, marginTop: 20 }}>
                            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%'), color: '#fff' }}>Next</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            style={{ backgroundColor: '#03DAC6', padding: 8, width: width * .9, alignItems: 'center', borderRadius: 5, marginTop: 20 }}>
                            <Text style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.2%'), color: '#fff' }}>Next</Text>
                        </TouchableOpacity>
                    }
                </View>


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
        color: '#999',
        fontFamily: 'sukhumvit-set',
    },
});
