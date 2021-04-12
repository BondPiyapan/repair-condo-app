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
    ActivityIndicator,
    SafeAreaView
} from 'react-native';
import { WebBrowser } from 'expo';
const { height, width } = Dimensions.get('window')
import Images from 'react-native-scalable-image';
import PhoneInput from "react-native-phone-number-input";
import Constants from 'expo-constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import OTPInputView from '@twotalltotems/react-native-otp-input'

export default class VerifyOTP extends React.Component {

    constructor() {
        super()
        this.state = {
            hasName: null,
            loading: true,
            loader: true,
            device_token: '',
            isTablet: false
        }
    }



    render() {

        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.wrapper}>
                    <View style={{ marginVertical: hp('2%'), alignItems: 'center' }}>
                        <Text style={styles.buttonTextBlack}>กรอกรหัสการยืนยัน</Text>
                        <Text style={[styles.buttonTextBlack2, { marginTop: 5 }]}>รหัสยืนยันถูกส่งไปยัง 66812345678</Text>
                    </View>
                    <OTPInputView
                        style={{ width: '40%', height: 70 }}
                        pinCount={6}
                        selectionColor={'#999'}
                        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                        // onCodeChanged = {code => { this.setState({code})}}
                        autoFocusOnLoad={true}
                        codeInputFieldStyle={styles.underlineStyleBase}
                        codeInputHighlightStyle={styles.underlineStyleHighLighted}
                        keyboardType={'phone-pad'}
                        onCodeFilled={(code) => {
                            this.props.navigation.navigate('Main')
                        }}
                    />
                    <View style={{ marginVertical: hp('2%'), alignItems: 'center' }}>
                        <Text style={[styles.buttonTextBlack2, { marginTop: 5 }]}>ส่งรหัสอีกครั้ง</Text>
                    </View>
                </SafeAreaView>
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
        flex: 1,
        alignItems: 'center',
    },
    button: {
        height: hp('7%'),
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
        fontSize: hp('2%'),
        color: '#000',
        fontFamily: 'sukhumvit-set',
    },
    buttonText: {
        fontSize: hp('2.5%'),
        color: '#fff',
        fontFamily: 'sukhumvit-set',
    },
    borderStyleBase: {
        width: 30,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: "#3D59F4",
    },

    underlineStyleBase: {
        width: 15,
        height: 30,
        borderWidth: 0,
        borderBottomWidth: 2,
        borderColor: '#ccc',
        color: '#999',
    },

    underlineStyleHighLighted: {
        borderColor: "#3D59F4",
        color: '#999'
    },
});
