import React, { useEffect, useState, FunctionComponent, Dispatch } from 'react';
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
import { RootState } from 'reducers';
import * as ACTIONS from '../../../reducers/location/actions';

interface HomeScreenProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    dispatchAddLocation: any;
}

const HomeScreen: FunctionComponent<HomeScreenProps> = ({
    navigation,
    dispatchAddLocation,
}) => {
    const [position, setPosition] = useState({ lat: 0, lng: 0, ready: false });

    const geoLocate = () =>
        Geolocation.getCurrentPosition(
            pos => {
                if (pos.coords.latitude && pos.coords.longitude) {
                    dispatchAddLocation(
                        pos.coords.latitude,
                        pos.coords.longitude,
                    );
                    setPosition({
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude,
                        ready: true,
                    });
                }
            },
            error => console.log('error', error),
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
            .catch(error => {
                console.log('Could not verify location');
            });
    };

    useEffect(() => {
        getPosition();
    }, []);

    return (
        <Screen navigation={navigation} hasTopLinks>
            <View>
                {position.ready ? (
                    <Location
                        lat={position.lat}
                        lng={position.lng}
                        ready={position.ready}
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

const mapStateToProps = (state: RootState) => ({
    lat: state.location.lat,
    lng: state.location.lng,
});

const mapDispatchToProps = (dispatch: any) => ({
    dispatchAddLocation: (lat: number, lng: number) => {
        dispatch(ACTIONS.addLocation(lat, lng));
    },
    dispatchSetFetching: () => dispatch(ACTIONS.setFetching()),
    dispatchSetError: (error: string) => dispatch(ACTIONS.setError(error)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeScreen);
