import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    Platform,
    TouchableHighlight,
    TextInput,
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
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import rootReducer from './reducers';
import { Row } from './primitives';
import Screen from './screens';
import HomeScreen from './screens/home/home';
import SearchScreen from './screens/search';
import Location from './components/location/Location';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
);
const Stack = createStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        initialParams={{ hasWeather: false }}
                    />
                    <Stack.Screen name="Search" component={SearchScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
