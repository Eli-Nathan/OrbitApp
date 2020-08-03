import React, { useEffect, useState, FunctionComponent } from 'react';
import { View, Text, Platform, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import {
    PERMISSIONS,
    RESULTS,
    checkMultiple,
    request,
    openSettings,
} from 'react-native-permissions';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from 'react-navigation';

import Screen from '..';
import Location from '../../components/location/Location';
import * as ACTIONS from '../../reducers/location/actions';
import { API } from '../../constants/api';
import { RootState } from 'reducers';
import { calcIsDay } from '../../utils/dates';
import useLiveClock from '../../hooks/useLiveClock';
import { LocationState } from 'reducers/location/types';
import apiFetch from '../../hooks/apiFetch/apiFetch';

interface HomeScreenProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    dispatchSetNightTheme: any;
    dispatchSetLatLng: any;
    dispatchSetLocationData: any;
    dispatchSetCurrentWeather: any;
    dispatchSetFetching: any;
    dispatchSetError: any;
    weather: any;
    location: LocationState;
    nightTheme: boolean;
}

const HomeScreen: FunctionComponent<HomeScreenProps> = ({
    navigation,
    dispatchSetNightTheme,
    dispatchSetLatLng,
    dispatchSetLocationData,
    dispatchSetCurrentWeather,
    dispatchSetFetching,
    dispatchSetError,
    weather,
    location,
    nightTheme,
}) => {
    const geoLocate = () =>
        Geolocation.getCurrentPosition(
            pos => {
                if (pos.coords.latitude && pos.coords.longitude) {
                    dispatchSetFetching();
                    const lat = pos.coords.latitude;
                    const lon = pos.coords.longitude;
                    dispatchSetLatLng(lat, lon);
                    apiFetch(API.WEATHER, {
                        lat,
                        lon,
                        units: 'metric',
                    })
                    .then(data => {
                        dispatchSetLocationData(
                            data.id,
                            data.name,
                        );
                        dispatchSetCurrentWeather(data);
                        dispatchSetNightTheme(!calcIsDay(data.sys.sunrise, data.sys.sunset, new Date()))
                    })
                        .catch(error => dispatchSetError(error));
                }
            },
            error => dispatchSetError(error),
        );

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
                        request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(() =>
                            geoLocate(),
                        );
                        break;
                    case RESULTS.GRANTED:
                        geoLocate();
                        break;
                    case RESULTS.BLOCKED:
                        console.log(
                            'The permission is denied and not requestable anymore',
                        );
                        break;
                }
            })
            .catch(error => dispatchSetError(error));
    };

    useEffect(() => {
        getPosition();
    }, []);

    const liveTime = new Date(useLiveClock());

    return (
        <Screen navigation={navigation} hasSearch nightTheme={nightTheme}>
            <View>
                {location.lat ? (
                    <Location
                        weather={weather}
                        location={location}
                        nightTheme={nightTheme}
                    />
                ) : (
                    <TouchableHighlight
                        onPress={() =>
                            openSettings().catch(() =>
                                console.warn('cannot open settings'),
                            )
                        }>
                        <Text
                            style={{
                                color: nightTheme ? '#000' : '#fff',
                                textAlign: 'center',
                            }}>
                            Allow WeatherApp to use location services
                        </Text>
                    </TouchableHighlight>
                )}
            </View>
        </Screen>
    );
};

const mapStateToProps = (state: RootState) => {
    return {
        sunRise: state.location?.weather?.sun_rise || new Date(new Date().setHours(5,0,0,0)).toISOString(),
        sunSet: state.location?.weather?.sun_set || new Date(new Date().setHours(20,0,0,0)).toISOString(),
        weather: state.location?.weather,
        location: state.location,
        fetching: state.location?.fetching,
        nightTheme: state.theme?.nightTheme,
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    dispatchSetNightTheme: (nightTheme: boolean) => {
        dispatch(ACTIONS.setNightTheme(nightTheme));
    },
    dispatchSetLatLng: (lat: number, lon: number) => {
        dispatch(ACTIONS.setLatLng(lat, lon));
    },
    dispatchSetLocationData: (woeid: number, name: string) => {
        dispatch(ACTIONS.setLocationData(woeid, name));
    },
    dispatchSetCurrentWeather: (weather: any) => {
        dispatch(ACTIONS.setCurrentWeather(weather));
    },
    dispatchSetFetching: () => dispatch(ACTIONS.setFetching()),
    dispatchSetError: (error: string) => dispatch(ACTIONS.setError(error)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeScreen);
