import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, ViewStyle, Text, Button } from 'react-native';

import { calcDayNight } from '../../utils/dates';

import { API } from '../../constants/api';
import Locale from '../locale/Locale';
import Weather from '../weather/Weather';

interface LocationProps {
    lat: number;
    lng: number;
    ready: boolean;
}

const Location = (props: LocationProps) => {
    const [userLocation, setUserLocation] = useState<any>(null);
    const [userLocationReady, setUserLocationReady] = useState<boolean>(false);
    const [currentWeather, setCurrentWeather] = useState<boolean>(false);
    const [currentWeatherReady, setCurrentWeatherReady] = useState<boolean>(
        false,
    );
    const [isDay, setIsDay] = useState<boolean>(true);

    const fetchLocation = async (lat: string, lng: string) => {
        return await fetch(`${API.URL}/search/?lattlong=${lat},${lng}`);
    };

    const getLocationWeather = async (locId: any) => {
        return await fetch(`${API.URL}/${locId}/`);
    };

    useEffect(() => {
        fetchLocation(`${props.lat}`, `${props.lng}`)
            .then(response => response.json())
            .then(data => {
                setUserLocation(data[0]);
                setUserLocationReady(true);
            });
    }, [props.lat, props.lng, props.ready]);

    useEffect(() => {
        if (userLocationReady) {
            const { woeid } = userLocation;
            getLocationWeather(woeid)
                .then(response => response.json())
                .then(data => {
                    setCurrentWeather(data);
                    setIsDay(
                        calcDayNight(data.sun_rise, data.sun_set, new Date()),
                    );
                    setCurrentWeatherReady(true);
                });
        }
    }, [userLocation, userLocationReady]);

    return (
        <>
            {!props.ready ? null : (
                <ScrollView style={styles.locationDisplay}>
                    {userLocationReady && (
                        <Locale userLocation={userLocation} />
                    )}
                    {currentWeatherReady && (
                        <Weather
                            currentWeather={currentWeather}
                            isDay={isDay}
                        />
                    )}
                </ScrollView>
            )}
        </>
    );
};

interface Styles {
    locationDisplay: ViewStyle;
}

const styles: any = StyleSheet.create<Styles>({
    locationDisplay: {
        display: 'flex',
        color: '#fff',
        width: '100%',
    },
});

export default Location;
