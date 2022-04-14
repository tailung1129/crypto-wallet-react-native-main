import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { IconButton, Colors } from 'react-native-paper';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    Dimensions,
    StatusBar,
} from 'react-native';
// import { TabView, SceneMap } from 'react-native-tab-view';
import { avatar, clock, number, send, receive, buy, copy } from '../../assets/icons/index';
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import CopyIcon from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Tabview_Fistpage from "./tabview_first";

const data = [
    { label: 'Ethereum Main', value: 'Ethereum Main' },
    { label: 'Smart Chain', value: 'Smart Chain' },
];

const Tab = createBottomTabNavigator();

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0d0d0d', borderTopColor: '#181e25', borderTopWidth: 2, marginTop: '12%' }}>
            <Text>Setting Page!</Text>
        </View>
    );
}

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarBadgeStyle: { backgroundColor: 'black' },
                headerShown: false,
            }}
            tabBar={props => <MyTabBar {...props} />}
        >
            <Tab.Screen name="Token" component={Tabview_Fistpage} />
            <Tab.Screen name="Collecibles" component={SettingsScreen} />
        </Tab.Navigator>
    );
}
function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: "#0d0d0d", height: -1, justifyContent: "center", alignItems: "center", position: 'absolute', }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, alignItems: "center", borderBottomColor: isFocused ? '#673ab7' : 'transparent', borderBottomWidth: isFocused ? 3 : 0, padding: '3%', top: 2 }}

                    >
                        <Text style={{ color: isFocused ? '#673ab7' : '#fff', fontSize: 18 }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
const Wallet = (props) => {
    const [dropdown, setDropdown] = useState();
    const [selected, setSelected] = useState([]);

    // const [index, setIndex] = React.useState(0);
    // const [routes] = React.useState([
    //     { key: 'first', title: 'First' },
    //     { key: 'second', title: 'Second' },
    // ]);
    return (
        <View style={{ backgroundColor: "#0d0d0d" }}>
            <View style={{ height: '100%', width: "90%", alignSelf: 'center', backgroundColor: '#0d0d0d' }}>
                <View style={{
                    height: '11%', flexDirection: "row", borderBottomColor: '#242f3c',
                    borderBottomWidth: 0.5
                }}>
                    <View style={{ width: "25%", alignSelf: 'center', marginRight: '5%' }}>
                        <Image
                            source={avatar}
                            style={{ width: "41%", height: "48%", borderRadius: 400 / 2 }}
                        />
                    </View>
                    <View style={{ width: "40%", alignSelf: 'center' }}>
                        <Dropdown
                            style={styles.dropdown}
                            placeholder='Ethereum Main'
                            placeholderStyle={{ color: 'white' }}
                            containerStyle={styles.shadow}
                            activeColor='purple'
                            data={data}
                            labelField="label"
                            valueField="value"
                            label="Dropdown"
                            autoScroll={false}
                            value={dropdown}
                            selectedTextStyle={{ color: 'white' }}
                            iconColor='purple'
                            onChange={item => {
                                setDropdown(item.value);
                                console.log('selected', item);
                            }}
                            textError="Error"
                        />
                    </View>
                </View>
                <View style={{ height: '30.5%' }}>
                    <View style={{ height: "35%", justifyContent: "center", alignItems: "center" }}>



                        <Image
                            source={number}
                            style={{ width: "55%", height: "55%", borderRadius: 400 / 2, top: 15 }}
                        />

                    </View>
                    <View style={{ height: "15%", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "white", fontSize: 17 }}>$ 18,374.19 <Text style={{ color: "green" }}>+0.7%</Text></Text>
                    </View>
                    <View style={styles.passwordContainer}>
                        <TextInput editable={false} selectTextOnFocus={false} style={styles.input} value="0x7aCaaba8238....96eEf19"
                        />
                    
                            <Image source={copy} style={{ width: '10%', marginLeft: '-10%' }} />
                    </View>
                    <View style={{ height: "30%", flexDirection: "row", justifyContent: "center", alignSelf: 'center' }}>
                        <TouchableOpacity
                            style={styles.SubmitButtonStyle}
                            activeOpacity={.5}
                        >
                            <Image source={send} style={{ width: '135%' }} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.SubmitButtonStyle}
                            activeOpacity={.5}
                        >
                            <Image source={receive} style={{ width: '135%' }} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.SubmitButtonStyle}
                            activeOpacity={.5}
                        >
                            <Image source={buy} style={{ width: '135%' }} />

                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: '57%' }}>
                    <NavigationContainer independent={true}>
                        <MyTabs />
                    </NavigationContainer>
                </View>
                <View style={{ height: '12%', position: 'absolute', bottom: 0 }}>
                    <View style={{
                        backgroundColor: '#222732',
                        width: "100%",
                        height: "90%",
                        borderRadius: 15,
                        flex: 1,
                        margin: "2%",
                        justifyContent: 'center',
                        alignSelf: 'center',
                        flexDirection: 'row'
                    }}>
                        <View style={{ width: '15%', alignItems: 'center', marginLeft: '5%', justifyContent: "center" }}>
                            <Image
                                source={clock}
                                style={{ width: "83%", height: "60%", borderRadius: 400 / 2 }}
                            />
                        </View>
                        <View style={{ width: '75%', alignSelf: 'center', marginLeft: '2%' }}>
                            <Text style={{ fontSize: 18, marginBottom: '2%', color: 'white' }}>Swap Coin</Text>
                            <Text style={{ color: 'white' }}>Waiting For confirmation</Text>
                        </View>

                    </View>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },

    SubmitButtonStyle: {
        width: "27%",
        height: "53%",
        borderRadius: 30,
        alignItems: 'center',
        alignSelf: 'center',
        marginRight: '2%',

    },

    TextStyle: {
        color: '#fff',
        textAlign: 'center',
        paddingTop: 10,
    },
    passwordContainer: {
        height: "22%", justifyContent: "center", alignItems: "center",
        flexDirection: 'row',

    },
    dropdown: {
        // width: '60%',
        fontSize: 30,
        color: 'red',
    },
    icon: {
        marginRight: 5,
        width: 18,
        height: 18,
    },
    item: {
        paddingVertical: 17,
        paddingHorizontal: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
    },
    shadow: {
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        backgroundColor: '#0d0d0d',
    },
    input: {
        width: "56%",
        height: "65%",
        backgroundColor: '#141414',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        fontSize: 15,
        color: 'white'
    },
    tabStyle: {},
    scrollStyle: {
        backgroundColor: 'white',
        paddingLeft: 65,
        paddingRight: 65,
        // justifyContent: 'center',
    },
    tabBarTextStyle: {
        fontSize: 14,
        fontWeight: 'normal',
    },
    underlineStyle: {
        height: 3,
        backgroundColor: 'red',
        borderRadius: 3,
        width: 15,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});

const mapStateToProps = state => {
    return {
        events: state.eventCardsReducer
    };
};

const mapDispatchToProps = dispatch => ({
    isSelectedAll: () => dispatch(isSelectedAll()),

});
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
// export default Wallet;