import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    StatusBar,
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Wallet from '../components/layout/wallet'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator();

function Swap() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#0d0d0d" }}>
            <Text>Swap Page!</Text>
        </View>
    );
}
function Setting() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#0d0d0d" }}>
            <Text>Setting Page!</Text>
        </View>
    );
}

function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: "#0d0d0d", height: '9%', justifyContent: "center", alignItems: "center", borderTopStartRadius: 20, borderTopEndRadius: 20, borderTopWidth: 1, borderColor: '#181e25' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;
                const icon_name =
                    route.name == 'Wallet' ? 'folder-outline' : route.name == 'Swap' ? 'md-sync' : 'settings-outline'
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
                        style={{ flex: 1, alignItems: "center" }}
                    >
                        <Ionicons
                            name= {icon_name}
                            size={25}
                            color={isFocused == true ? '#673ab7' : 'grey'}
                            style={{ marginLeft: '-2%' }}
                        />
                        <Text style={{ color: isFocused ? '#673ab7' : 'grey', fontSize: 16, fontWeight: '700' }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
function MyTabs() {
    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: '#0d0d0d' }}>
            <Tab.Navigator
                screenOptions={{
                    tabBarBadgeStyle: { backgroundColor: 'black' },
                    headerShown: false,
                }}
                tabBar={props => <MyTabBar {...props} />}
            >
                <Tab.Screen name="Wallet" component={Wallet} />
                <Tab.Screen name="Swap" component={Swap} />
                <Tab.Screen name="Setting" component={Setting} />
            </Tab.Navigator>
        </View>
    );
}
const HomeScreen = (props) => {
    return (
        <NavigationContainer independent={true} >
            <MyTabs />
        </NavigationContainer>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#859a9b',
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
