import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    Platform,
    TouchableHighlight,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {
    PERMISSIONS,
    RESULTS,
    checkMultiple,
    request,
    openSettings,
} from 'react-native-permissions';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Location from './components/location/Location';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            {/* <StatusBar style={styles.statusBar} barStyle="light-content" /> */}
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Search" component={SearchScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const SearchScreen = () => null;

const HomeScreen = ({ navigation }) => {
    console.log('App component');
    const [position, setPosition] = useState({ lat: 0, lng: 0, ready: false });

    const getPosition = () => {
        checkMultiple([
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
            PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        ])
            .then(statuses => {
                const permission =
                    Platform.OS === 'ios'
                        ? statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]
                        : statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION];
                switch (permission) {
                    case RESULTS.UNAVAILABLE:
                        console.log(
                            'This feature is not available (on this device / in this context)',
                        );
                        break;
                    case RESULTS.DENIED:
                        console.log(
                            'The permission has not been requested / is denied but requestable',
                        );
                        request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(() =>
                            Geolocation.getCurrentPosition(
                                pos => {
                                    if (
                                        pos.coords.latitude &&
                                        pos.coords.longitude
                                    ) {
                                        setPosition({
                                            latitude: pos.coords.latitude,
                                            longitude: pos.coords.longitude,
                                            ready: true,
                                        });
                                    }
                                },
                                error => console.log('error', error),
                            ),
                        );
                        break;
                    case RESULTS.GRANTED:
                        console.log('The permission is granted');
                        Geolocation.getCurrentPosition(pos => {
                            if (pos.coords.latitude && pos.coords.longitude) {
                                setPosition({
                                    latitude: pos.coords.latitude,
                                    longitude: pos.coords.longitude,
                                    ready: true,
                                });
                            }
                        });
                        break;
                    case RESULTS.BLOCKED:
                        console.log(
                            'The permission is denied and not requestable anymore',
                        );
                        break;
                }
            })
            .catch(error => {
                // …
            });
    };

    useEffect(() => {
        getPosition();
    }, []);

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View contentInsetAdjustmentBehavior="automatic">
                <TouchableHighlight onPress={() => navigation.navigate('Home')}>
                    <Text>Home</Text>
                </TouchableHighlight>
                <View style={styles.contentView}>
                    {position.ready ? (
                        <Location
                            navigation={navigation}
                            lat={position.latitude}
                            lng={position.longitude}
                            ready={position.ready}
                        />
                    ) : (
                        <TouchableHighlight
                            onPress={() =>
                                openSettings()
                                    .then(() =>
                                        console.log('Back from settings'),
                                    )
                                    .catch(() =>
                                        console.warn('cannot open settings'),
                                    )
                            }>
                            <Text>
                                Allow WeatherApp to use location services
                            </Text>
                        </TouchableHighlight>
                    )}
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: '#223B51',
        height: '100%',
    },
});

export default App;
