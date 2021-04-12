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

const { height, width } = Dimensions.get('window')
import Images from 'react-native-scalable-image';
import PhoneInput from "react-native-phone-number-input";
import Constants from 'expo-constants'
import * as Icon from '@expo/vector-icons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

var data = [
    {
        "id": 1,
        "title": "Camera",
        "innerArray": [{
            "id": 1,
            "name": "IMI-1080P-home-security-camera",
            "star": "150",
            "image": require('../../../../assets/images/device/camera/IMI-1080P-home-security-camera/IMI-1080P-home-security-camera.png')
        }, {
            "id": 2,
            "name": "IMI-home-security-camera",
            "star": "150",
            "image": require('../../../../assets/images/device/camera/IMI-home-security-camera/IMI-home-security-camera.jpg')
        },
        {
            "id": 4,
            "name": "IMI-home-security-camera-1080P-advanced",
            "star": "150",
            "image": require('../../../../assets/images/device/camera/IMI-home-security-camera-1080P-advanced/IMI-home-security-camera-1080P-advanced.png')
        },
        {
            "id": 4,
            "name": "IMILAB-Home-Security-Carmera-Basic",
            "star": "150",
            "image": require('../../../../assets/images/device/camera/IMILAB-Home-Security-Carmera-Basic/IMILAB-Home-Security-Carmera-Basic.png')
        },
        {
            "id": 4,
            "name": "IMILAB-Home-Security-Carmera-N-Series",
            "star": "150",
            "image": require('../../../../assets/images/device/camera/IMILAB-Home-Security-Carmera-N-Series/IMILAB-Home-Security-Carmera-N-Series.jpg')
        },
        {
            "id": 4,
            "name": "Mi-Action-Camera-4K",
            "star": "150",
            "image": require('../../../../assets/images/device/camera/Mi-Action-Camera-4K/Mi-Action-Camera-4K.jpg')
        },
        {
            "id": 4,
            "name": "Mi-Action-Camera-4K",
            "star": "150",
            "image": require('../../../../assets/images/device/camera/mi-home-security-carmera/mi-home-security-carmera.jpg')
        },
        {
            "id": 4,
            "name": "Mi-Home-Security-Carmera360",
            "star": "150",
            "image": require('../../../../assets/images/device/camera/Mi-Home-Security-Carmera360/Mi-Home-Security-Carmera360-1.jpeg')
        },
        {
            "id": 4,
            "name": "Mi-Home-Security-Carmera360-1080P",
            "star": "150",
            "image": require('../../../../assets/images/device/camera/Mi-Home-Security-Carmera360-1080P/Mi-Home-Security-Carmera360-1080P.jpeg')
        },
        {
            "id": 4,
            "name": "xiao-fang-smart-camera",
            "star": "150",
            "image": require('../../../../assets/images/device/camera/xiao-fang-smart-camera/xiao-fang-smart-camera.jpg')
        },
        ]
    },
    {
        "id": 2,
        "title": "Power outlet/strip",
        "innerArray": [
            {
                "id": 1,
                "name": "aqara-smart-plug",
                "star": "150",
                "image": require('../../../../assets/images/device/plug/aqara-smart-plug/aqarasmartplug.jpg')
            },
            {
                "id": 1,
                "name": "mi-smart-plug",
                "star": "150",
                "image": require('../../../../assets/images/device/plug/mi-smart-plug/mi-smart-plug.jpg')
            },
            {
                "id": 1,
                "name": "mi-smart-plug-(wifi)",
                "star": "150",
                "image": require('../../../../assets/images/device/plug/mi-smart-plug-(wifi)/mi-smart-plug-(wifi).jpg')
            },
            {
                "id": 1,
                "name": "mi-smart-plug-wifi",
                "star": "150",
                "image": require('../../../../assets/images/device/plug/mi-smart-plug-wifi/mi-smart-plug-wifi.jpg')
            },
        ]
    },
    {
        "id": 2,
        "title": "Light",
        "innerArray": [
            {
                "id": 1,
                "name": "mi-bedside-lamp",
                "star": "150",
                "image": require('../../../../assets/images/device/light/mi-bedside-lamp/mi-bedside-lamp.jpg')
            },
            {
                "id": 1,
                "name": "mi-bedside-lamp-2",
                "star": "150",
                "image": require('../../../../assets/images/device/light/mi-bedside-lamp-2/mi-bedside-lamp-2.jpeg')
            },
            {
                "id": 1,
                "name": "Mi-LED-Ceiling-Light",
                "star": "150",
                "image": require('../../../../assets/images/device/light/Mi-LED-Ceiling-Light/Mi-LED-Ceiling-Light.jpg')
            },
            {
                "id": 1,
                "name": "Xiaomi_Smart_LED_Desk_Lamp",
                "star": "150",
                "image": require('../../../../assets/images/device/light/Xiaomi_Smart_LED_Desk_Lamp/Xiaomi_Smart_LED_Desk_Lamp.jpg')
            },
            {
                "id": 1,
                "name": "Xiaomi_Yeelight_Smart_Light_Strip_Plus",
                "star": "150",
                "image": require('../../../../assets/images/device/light/Xiaomi_Yeelight_Smart_Light_Strip_Plus/Xiaomi_Yeelight_Smart_Light_Strip_Plus.jpg')
            },
            {
                "id": 1,
                "name": "yeelight_color_bulb",
                "star": "150",
                "image": require('../../../../assets/images/device/light/yeelight_color_bulb/yeelight_color_bulb.jpeg')
            },
            {
                "id": 1,
                "name": "yeelight-Ceiling-Light",
                "star": "150",
                "image": require('../../../../assets/images/device/light/yeelight-Ceiling-Light/yeelight-Ceiling-Light.jpeg')
            },
        ]
    },
    {
        "id": 2,
        "title": "Door lock",
        "innerArray": [
            {
                "id": 1,
                "name": "loock_Classic",
                "star": "150",
                "image": require('../../../../assets/images/device/doorlock/loock_Classic/loock_Classic.jpg')
            },
            {
                "id": 1,
                "name": "loock_Classic-2X",
                "star": "150",
                "image": require('../../../../assets/images/device/doorlock/loock_Classic-2X/loock_Classic-2X.jpg')
            },
            {
                "id": 1,
                "name": "loock_smart_lock_s30_pro",
                "star": "150",
                "image": require('../../../../assets/images/device/doorlock/loock_smart_lock_s30_pro/loock_smart_lock_s30_pro.jpg')
            },
            {
                "id": 1,
                "name": "OJJ-X1",
                "star": "150",
                "image": require('../../../../assets/images/device/doorlock/OJJ-X1/OJJ-X1.jpg')
            },

        ]
    },
    {
        "id": 2,
        "title": "Remote Control",
        "innerArray": [
            {
                "id": 1,
                "name": "aqara-cude",
                "star": "150",
                "image": require('../../../../assets/images/device/remotecon/aqaracude.jpeg')
            },
            {
                "id": 1,
                "name": "aqara-สวิตช์ไร้สาย",
                "star": "150",
                "image": require('../../../../assets/images/device/remotecon/aqara2.jpg')
            },
            {
                "id": 1,
                "name": "aqara-สวิตช์ไร้สาย(รุ่นติดผนังแบบปุ่มคู่)",
                "star": "150",
                "image": require('../../../../assets/images/device/remotecon/aqara3.jpg')
            },
            {
                "id": 1,
                "name": "aqara-สวิตช์ไร้สาย(รุ่นติดผนังแบบปุ่มเดียว)",
                "star": "150",
                "image": require('../../../../assets/images/device/remotecon/aqara4.jpg')
            },
            {
                "id": 1,
                "name": "MIสวิตช์ไร้สาย",
                "star": "150",
                "image": require('../../../../assets/images/device/remotecon/MI5.jpeg')
            },
        ]
    },
    {
        "id": 2,
        "title": "Electric kettle",
        "innerArray": [
            {
                "id": 1,
                "name": "mi_smart_kettle",
                "star": "150",
                "image": require('../../../../assets/images/device/eleckettle/mi_smart_kettle/mi_smart_kettle.jpeg')
            },
            {
                "id": 1,
                "name": "mi_smart_kettle_Pro",
                "star": "150",
                "image": require('../../../../assets/images/device/eleckettle/mi_smart_kettle_Pro/mi_smart_kettle_Pro.jpeg')
            },
            {
                "id": 1,
                "name": "viomi_smart instant_heating water_dispenser",
                "star": "150",
                "image": require('../../../../assets/images/device/eleckettle/viomi-smart-instant-heating-water-dispenser/viomi-smart-instant-heating-water-dispenser.jpg')
            },
            {
                "id": 1,
                "name": "viomi_smart_kettle",
                "star": "150",
                "image": require('../../../../assets/images/device/eleckettle/viomi_smart_kettle/viomi_smart_kettl.jpg')
            },
        ]
    },
    {
        "id": 2,
        "title": "Rice cooker",
        "innerArray": [
            {
                "id": 1,
                "name": "Mi_IH_Rice_Cooker",
                "star": "150",
                "image": require('../../../../assets/images/device/potrice/Mi_IH_Rice_Cooker/Mi_IH_Rice_Cooker1.jpg')
            },
            {
                "id": 1,
                "name": "Mi_หม้อหุงข้าวระบบแม่เหล็กไฟฟ้า",
                "star": "150",
                "image": require('../../../../assets/images/device/potrice/Mi_IH_Rice_Cooker2/Mi_IH_Rice_Cooker22.jpg')
            },
        ]
    },
    {
        "id": 2,
        "title": "Induction stove",
        "innerArray": [
            {
                "id": 1,
                "name": "Mi_IH_Rice_Cooker",
                "star": "150",
                "image": require('../../../../assets/images/device/intuduction_cooker/mi_intuduction_cooker/mi_intuduction_cooker.jpeg')
            },
        ]
    },
    {
        "id": 2,
        "title": "Fan",
        "innerArray": [
            {
                "id": 1,
                "name": "mi-smart-standing-fan",
                "star": "150",
                "image": require('../../../../assets/images/device/fan/mi-smart-standing-fan/mi-smart-standing-fan.jpg')
            },
            {
                "id": 1,
                "name": "mi-smart-standing-fan-1x",
                "star": "150",
                "image": require('../../../../assets/images/device/fan/mi-smart-standing-fan-1x/mi-smart-standing-fan-1x1.jpeg')
            },
            {
                "id": 1,
                "name": "smartmi-standing-fan-2",
                "star": "150",
                "image": require('../../../../assets/images/device/fan/smartmi-standing-fan-2/smartmi-standing-fan-2-1.jpg')
            },
            {
                "id": 1,
                "name": "smartmi-standing-fan-2s",
                "star": "150",
                "image": require('../../../../assets/images/device/fan/smartmi-standing-fan-2s/smartmi-standing-fan-2s-1.jpg')
            },
            {
                "id": 1,
                "name": "smartmi-standing-fan-3",
                "star": "150",
                "image": require('../../../../assets/images/device/fan/smartmi-standing-fan-3/smartmi-standing-fan-3-1.jpg')
            },
        ]
    },
    {
        "id": 2,
        "title": "Dishwasher",
        "innerArray": [
            {
                "id": 1,
                "name": "viomi_smart_portable_dishwasher",
                "star": "150",
                "image": require('../../../../assets/images/device/dishwasher/viomi_smart_portable_dishwasher.jpg')
            },

        ]
    },
    {
        "id": 2,
        "title": "Temperature",
        "innerArray": [
            {
                "id": 1,
                "name": "viomi_smart_portable_dishwasher",
                "star": "150",
                "image": require('../../../../assets/images/device/termo/aqara-temperature-and-humidity-sensor.jpg')
            },
            {
                "id": 1,
                "name": "viomi_smart_portable_dishwasher",
                "star": "150",
                "image": require('../../../../assets/images/device/termo/mi-temperature-and-humidity-monitor.jpg')
            },
            {
                "id": 1,
                "name": "viomi_smart_portable_dishwasher",
                "star": "150",
                "image": require('../../../../assets/images/device/termo/mi-temperature-and-humidity-monitor-2.jpg')
            },
            {
                "id": 1,
                "name": "viomi_smart_portable_dishwasher",
                "star": "150",
                "image": require('../../../../assets/images/device/termo/mi-temperature-and-humidity-sensor.jpg')
            },

        ]
    },
    {
        "id": 2,
        "title": "Air humidifier",
        "innerArray": [
            {
                "id": 1,
                "name": "mi-smart-antibacterial-humidifier",
                "star": "150",
                "image": require('../../../../assets/images/device/humidifier/mi-smart-antibacterial-humidifier/mi-smart-antibacterial-humidifier.jpg')
            },
            {
                "id": 1,
                "name": "smartmi-evaporative-humidifier",
                "star": "150",
                "image": require('../../../../assets/images/device/humidifier/smartmi-evaporative-humidifier/smartmi-evaporative-humidifier.jpeg')
            },
            {
                "id": 1,
                "name": "smartmi-evaporative-humidifier-2",
                "star": "150",
                "image": require('../../../../assets/images/device/humidifier/smartmi-evaporative-humidifier-2/smartmi-evaporative-humidifier-2.jpeg')
            },
            {
                "id": 1,
                "name": "smartmi-humidifier",
                "star": "150",
                "image": require('../../../../assets/images/device/humidifier/smartmi-humidifier/smartmi-humidifier.jpg')
            },

        ]
    },
    {
        "id": 2,
        "title": "Air purifier",
        "innerArray": [
            {
                "id": 1,
                "name": "mi_air_purifier_max",
                "star": "150",
                "image": require('../../../../assets/images/device/airp/mi-air-purifier-max/mi-air-purifier-max.jpeg')
            },
            {
                "id": 1,
                "name": "mi-air-purifier-2",
                "star": "150",
                "image": require('../../../../assets/images/device/airp/mi-air-purifier-2/mi-air-purifier2.jpg')
            },
            {
                "id": 1,
                "name": "mi-air-purifier-2h",
                "star": "150",
                "image": require('../../../../assets/images/device/airp/mi-air-purifier-2h/mi-air-purifier-2h-1.jpg')
            },
            {
                "id": 1,
                "name": "mi-air-purifier-3C",
                "star": "150",
                "image": require('../../../../assets/images/device/airp/mi-air-purifier-3C/mi-air-purifier-3C-1.jpg')
            },
            {
                "id": 1,
                "name": "mi-air-purifier-3h",
                "star": "150",
                "image": require('../../../../assets/images/device/airp/mi-air-purifier-3h/mi-air-purifier-3h-1.jpg')
            },

        ]
    },
    {
        "id": 2,
        "title": "Heater",
        "innerArray": [
            {
                "id": 1,
                "name": "smartmi-smart-convector-heater-1s",
                "star": "150",
                "image": require('../../../../assets/images/device/heater/smartmi-smart-convector-heater-1s/smartmi-smart-convector-heater-1s.jpg')
            },
            {
                "id": 1,
                "name": "smartmi-smart-fan-heater",
                "star": "150",
                "image": require('../../../../assets/images/device/heater/smartmi-smart-fan-heater/smartmi-smart-fan-heater.jpg')
            },

        ]
    },
    {
        "id": 2,
        "title": "Body sensor",
        "innerArray": [
            {
                "id": 1,
                "name": "aqara-motion-sensor",
                "star": "150",
                "image": require('../../../../assets/images/device/body-sensor/aqara-motion-sensor.jpg')
            },
            {
                "id": 1,
                "name": "Mi-Motion-sensor",
                "star": "150",
                "image": require('../../../../assets/images/device/body-sensor/Mi-Motion-sensor.jpg')
            },

        ]
    },
    {
        "id": 2,
        "title": "Smoke detector",
        "innerArray": [
            {
                "id": 1,
                "name": "mi-smart-smoke-detector",
                "star": "150",
                "image": require('../../../../assets/images/device/mi-smart-smoke-detector/mi-smart-smoke-detector.jpeg')
            },

        ]
    },
    {
        "id": 2,
        "title": "Window door magnet",
        "innerArray": [
            {
                "id": 1,
                "name": "aqara-window-and-door-sensor",
                "star": "150",
                "image": require('../../../../assets/images/device/window_door-magnet/aqara-window-and-door-sensor.jpeg')
            },
            {
                "id": 1,
                "name": "mi-window-and-door-sensor",
                "star": "150",
                "image": require('../../../../assets/images/device/window_door-magnet/mi-window-and-door-sensor.jpg')
            },

        ]
    },
]

export default class AddDevice extends React.Component {
    static navigationOptions = {
        headerShown: false,
    };

    constructor(props) {
        super(props)
        this.state = {
            hasName: null,
            loading: true,
            loader: true,
            device_token: '',
            isTablet: false,
            typeLogin: 'username',
            dataArr: data,
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
    }

    renderItem(item) {
        return (
            <View>
                <Text>{item}</Text>
            </View>
        )
    }

    renderDevice(item) {
        return (
            <View style={{ marginHorizontal: 10, marginVertical: 20, justifyContent:'flex-start' }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailDevice', {img: item.image, devicename: item.name})}>
                    <Images
                        width={width * .2}
                        source={item.image}
                    />
                    <Text numberOfLines={3}
                        style={{
                            fontSize: hp('1.8%'),
                            color: '#999',
                            fontFamily: 'sukhumvit-set', textAlign: 'center', paddingHorizontal: 20, paddingVertical: 4, width: width * .2
                        }}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {

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
                        <View style={{
                            width: width * .6, height: hp('4.5%'), backgroundColor: '#F5F5F5', borderRadius: 10, flexDirection: 'row', alignItems: 'center'
                        }}>
                            <Icon.FontAwesome
                                name='search'
                                size={15}
                                style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 5 }}
                                color={'#999'}
                            />
                            <TextInput
                                placeholder={'Enter device name'}
                                style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.4%'), marginLeft: 10 }}
                                underlineColorAndroid={'transparent'}
                                numberOfLines={1}
                                returnKeyType={"done"} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 0.2, justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Icon.MaterialCommunityIcons
                                name='qrcode-scan'
                                size={26}
                                style={{ alignItems: 'center', justifyContent: 'center' }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <SectionList
                    sections={this.state.DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => this.renderItem(item)}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={{ color: 'red' }}>{title}</Text>
                    )}
                /> */}

                <FlatList data={this.state.dataArr}
                    extraData={this.state}
                    style={{}}
                    renderItem={({ item }) =>
                        <View
                            style={{ marginTop: 0, width: '100%', }} >
                            <View style={{ paddingTop: 10, paddingBottom: 0, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        fontSize: hp('1.8%'),
                                        color: '#999',
                                        fontFamily: 'sukhumvit-set', textAlign: 'center', paddingHorizontal: 20, paddingVertical: 4
                                    }}>{item.title}</Text>
                                </View>


                                <FlatList
                                    data={item.innerArray}
                                    style={{ alignItems: 'flex-start' }}
                                    extraData={this.state}
                                    numColumns={4}
                                    renderItem={({ item, index }) =>
                                        this.renderDevice(item)
                                    } />

                            </View>
                        </View>
                    } />


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
