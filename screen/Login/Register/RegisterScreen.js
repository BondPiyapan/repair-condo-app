import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    Button,
    Dimensions,
    AsyncStorage,
    Alert,
    ImageBackground,
    KeyboardAvoidingView,
    BackHandler
} from 'react-native';
const { height, width } = Dimensions.get('window')
import * as firebase from "firebase";
import "firebase/firestore";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class RegisterScreen extends React.Component {
    static navigationOptions = {

    };

    constructor(props) {
        super(props);
        this.state = {
            headName: '',
            date: "",
            formatDate: null,
            ErrorLastname: null,
            ErrorFullname: null,
            ErrorPassword: null,
            ErrorEmail: null,
            TextInputLastname: '',
            TextInputFullname: '',
            TextInputEmail: '',
            TextInputPassword: '',
        }

    }

    onEnterTextEmail = (TextInputValue) => {
        if (TextInputValue.trim() != 0) {
            this.setState({ TextInputEmail: TextInputValue, ErrorEmail: true });
        } else {
            this.setState({ TextInputEmail: TextInputValue, ErrorEmail: false });
        }
    }

    onEnterTextPassword = (TextInputValue) => {
        if (TextInputValue.trim() != 0) {
            this.setState({ TextInputPassword: TextInputValue, ErrorPassword: true });
        } else {
            this.setState({ TextInputPassword: TextInputValue, ErrorPassword: false });
        }
    }


    onEnterTextFirstname = (TextInputValue) => {
        if (TextInputValue.trim() != 0) {
            this.setState({ TextInputFullname: TextInputValue, ErrorFullname: true });
        } else {
            this.setState({ TextInputFullname: TextInputValue, ErrorFullname: false });
        }
    }

    onEnterTextLastname = (TextInputValue) => {
        if (TextInputValue.trim() != 0) {
            this.setState({ TextInputLastname: TextInputValue, ErrorLastname: true });
        } else {
            this.setState({ TextInputLastname: TextInputValue, ErrorLastname: false });
        }
    }


    checkDataRegister() {
        if (this.state.ErrorFullname == true && this.state.ErrorLastname == true && this.state.ErrorEmail == true && this.state.ErrorPassword == true) {
            this.onRegister()
        } else if (this.state.TextInputFullname == '') {
            this.setState({ ErrorFullname: false });
        } else if (this.state.TextInputFullname != '') {
            this.setState({ ErrorFullname: true });
        } if (this.state.TextInputLastname == '') {
            this.setState({ ErrorLastname: false });
        } else if (this.state.TextInputLastname != '') {
            this.setState({ ErrorLastname: true });
        } if (this.state.TextInputEmail == '') {
            this.setState({ ErrorEmail: false });
        } else if (this.state.TextInputEmail != '') {
            this.setState({ ErrorEmail: true });
        } if (this.state.TextInputPassword == '') {
            this.setState({ ErrorPassword: false });
        } else if (this.state.TextInputPassword != '') {
            this.setState({ ErrorPassword: true });
        }
    }

    async onRegister() {
        try {
            await firebase.auth().createUserWithEmailAndPassword(this.state.TextInputEmail, this.state.TextInputPassword).then(
                (res) => {
                    //TODO
                }
            );
            const currentUser = firebase.auth().currentUser;

            const db = firebase.firestore();
            db.collection("users")
                .doc(currentUser.uid)
                .set({
                    email: currentUser.email,
                    lastName: this.state.TextInputFullname,
                    firstName: this.state.TextInputLastname,
                }).then(
                    Alert.alert("แจ้งเตือน", "สมัครสมาชิกเรียบร้อย"),
                    this.props.navigation.goBack(null)
                )

        } catch (err) {
            Alert.alert("แจ้งเตือน", err.message);
        }
    }



    render() {

        return (
            <View style={styles.container}>
                <ScrollView>
                    <KeyboardAvoidingView behavior="padding" style={{
                        flex: 1,
                        justifyContent: 'space-between',
                    }}>
                        <View style={{ padding: 40 }}>

                            <View style={{ marginBottom: 20 }}>

                                {this.state.ErrorEmail == false ? (
                                    <Text style={styles.errorMessage}>
                                        ฮีเมล
                                    </Text>
                                ) : <Text style={styles.headText}>ฮีเมล</Text>}
                                <TextInput
                                    onChangeText={TextInputValue => this.onEnterTextEmail(TextInputValue)}
                                    placeholder={'กรอกอีเมล'}
                                    style={{ padding: -10, fontFamily: 'sukhumvit-set', }}
                                    underlineColorAndroid={'transparent'}
                                    numberOfLines={1}
                                />

                                <View style={{ height: 1, backgroundColor: '#CED7DE', marginTop: 10, marginBottom: 10 }} />
                            </View>

                            <View style={{ marginBottom: 20 }}>
                                {this.state.ErrorPassword == false ? (
                                    <Text style={styles.errorMessage}>
                                        รหัสผ่าน
                                    </Text>
                                ) : <Text style={styles.headText}>รหัสผ่าน</Text>}

                                <TextInput
                                    onChangeText={TextInputValue => this.onEnterTextPassword(TextInputValue)}
                                    secureTextEntry={true}
                                    placeholder={'กรอกรหัสผ่าน'}
                                    style={{ padding: -10, fontFamily: 'sukhumvit-set', }}
                                    underlineColorAndroid={'transparent'}
                                    numberOfLines={1}
                                />

                                <View style={{ height: 1, backgroundColor: '#CED7DE', marginTop: 10, marginBottom: 10 }} />
                            </View>

                            <View style={{ marginBottom: 20 }}>
                                {this.state.ErrorFullname == false ? (
                                    <Text style={styles.errorMessage}>
                                        ชื่อ
                                    </Text>
                                ) :
                                    <Text style={styles.headText}>ชื่อ</Text>
                                }

                                <TextInput
                                    onChangeText={TextInputValue => this.onEnterTextFirstname(TextInputValue)}
                                    placeholder={'กรอกชื่อของคุณ'}
                                    style={{ padding: -10, fontFamily: 'sukhumvit-set', }}
                                    underlineColorAndroid={'transparent'}
                                    numberOfLines={1}
                                />

                                <View style={{ height: 1, backgroundColor: '#CED7DE', marginTop: 10, marginBottom: 10 }} />
                            </View>

                            <View style={{ marginBottom: 20 }}>
                                {this.state.ErrorLastname == false ? (
                                    <Text style={styles.errorMessage}>
                                        นามสกุล
                                    </Text>
                                ) :
                                    <Text style={styles.headText}>นามสกุล</Text>
                                }

                                <TextInput
                                    onChangeText={TextInputValue => this.onEnterTextLastname(TextInputValue)}
                                    placeholder={'กรอกนามสกุลของคุณ'}
                                    style={{ padding: -10, fontFamily: 'sukhumvit-set', }}
                                    underlineColorAndroid={'transparent'}
                                    numberOfLines={1}
                                />

                                <View style={{ height: 1, backgroundColor: '#CED7DE', marginTop: 10, marginBottom: 10 }} />
                            </View>


                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => this.checkDataRegister()}
                                    style={[styles.button, styles.buttonFacebook]}>
                                    <Text style={styles.buttonText}>สมัครสมาชิก</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
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
    headText: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'sukhumvit-set',
    },
    headText2: {
        fontSize: 14,
        color: '#000',
        fontFamily: 'sukhumvit-set',
    },
    button: {
        height: hp('6%'),
        width: width * .6,
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
    buttonFacebook: {
        backgroundColor: '#3b5998',
    },
    buttonMobile: {
        backgroundColor: '#4CAF50',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'sukhumvit-set',
    },
    errorMessage: {
        fontSize: 16,
        color: "red",
        fontFamily: 'sukhumvit-set',
    },
});