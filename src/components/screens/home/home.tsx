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
import Location from '../../location/Location';
import * as ACTIONS from '../../../reducers/location/actions';
import { API } from '../../../constants/api';
import { RootState } from 'reducers';
import { calcIsDay } from '../../../utils/dates';
import useLiveClock from '../../../hooks/useLiveClock';

interface HomeScreenProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    dispatchSetLatLng: any;
    dispatchSetLocationData: any;
    dispatchSetCurrentWeather: any;
    dispatchSetFetching: any;
    dispatchSetError: any;
    sunRise: string;
    sunSet: string;
}

const HomeScreen: FunctionComponent<HomeScreenProps> = ({
    navigation,
    dispatchSetLatLng,
    dispatchSetLocationData,
    dispatchSetCurrentWeather,
    dispatchSetFetching,
    dispatchSetError,
    sunRise,
    sunSet,
}) => {
    const [position, setPosition] = useState({ lat: 0, lng: 0, ready: false });

    const fetchLocation = async (lat: number, lng: number) => {
        return await fetch(`${API.URL}/search/?lattlong=${lat},${lng}`);
    };

    const getLocationWeather = async (locId: any) => {
        return await fetch(`${API.URL}/${locId}/`);
    };

    const geoLocate = () =>
        Geolocation.getCurrentPosition(
            pos => {
                if (pos.coords.latitude && pos.coords.longitude) {
                    dispatchSetFetching();
                    const lat = pos.coords.latitude;
                    const lng = pos.coords.longitude;
                    dispatchSetLatLng(lat, lng);
                    fetchLocation(lat, lng)
                        .then(response => response.json())
                        .then(data => {
                            dispatchSetLocationData(
                                data[0].woeid,
                                data[0].title,
                                [...data.splice(1, data.length)],
                            );
                            getLocationWeather(data[0].woeid)
                                .then(response => response.json())
                                .then(data => {
                                    console.log('weather', data);
                                    dispatchSetCurrentWeather(data);
                                });
                        })
                        .catch(error => dispatchSetError(error));

                    setPosition({
                        lat,
                        lng,
                        ready: true,
                    });
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
        <Screen navigation={navigation} hasTopLinks>
            <View>
                {position.ready ? (
                    <Location
                        lat={position.lat}
                        lng={position.lng}
                        ready={position.ready}
                        isDay={calcIsDay(sunRise, sunSet, liveTime)}
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
                                color: '#fff',
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
    console.log('STATE', state);
    return {
        sunRise: state.location?.weather?.sun_rise || new Date(new Date().setHours(5,0,0,0)).toISOString(),
        sunSet: state.location?.weather?.sun_set || new Date(new Date().setHours(20,0,0,0)).toISOString(),
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    dispatchSetLatLng: (lat: number, lng: number) => {
        dispatch(ACTIONS.setLatLng(lat, lng));
    },
    dispatchSetLocationData: (woeid: number, name: string, nearby: any) => {
        dispatch(ACTIONS.setLocationData(woeid, name, nearby));
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
