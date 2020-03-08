import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native';

import { parseTemp } from '../../utils/strings';
import { calcDayNight } from '../../utils/dates';

import * as DayIcons from '../../assets/icons/day';
import NightIcons from '../../assets/icons/night';
import Theme from '../../theme';
import { Row, Column } from '../../primitives';
import LocationHeader from '../locationHeader/locationHeader';

const Location: React.FC = (props: any) => {
    const [userLocation, setUserLocation] = useState<any>(null);
    const [userLocationReady, setUserLocationReady] = useState<any>(false);
    const [currentWeather, setCurrentWeather] = useState<any>(false);
    const [currentWeatherReady, setCurrentWeatherReady] = useState<any>(false);
    const [isDay, setIsDay] = useState<any>(true);
    const [timeKnown, setTimeKnown] = useState<any>(false);

    const fetchLocation = async (lat: string, lng: string) => {
        return await fetch(
            `https://www.metaweather.com/api/location/search/?lattlong=${lat},${lng}`,
        );
    };

    const getLocationWeather = async (locId: any) => {
        return await fetch(
            `https://www.metaweather.com/api/location/${locId}/`,
        );
    };

    useEffect(() => {
        fetchLocation(props.lat, props.lng)
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

    const renderIcon: any = (abbr: string) => {
        if (currentWeatherReady) {
            const WeatherIcon: any =
                DayIcons[abbr.charAt(0).toUpperCase() + abbr.slice(1)];
            return <WeatherIcon />;
        } else {
            return null;
        }
    };

    const theDate = new Date();

    return (
        <>
            {!props.ready ? null : (
                <ScrollView style={styles.locationDisplay}>
                    {userLocationReady && (
                        <LocationHeader location={userLocation.title} />
                    )}
                    <Row>
                        <Text style={styles.locationDisplay}>
                            {currentWeatherReady &&
                                `${
                                    currentWeather?.consolidated_weather[0]
                                        ?.weather_state_name
                                } - ${parseTemp(
                                    currentWeather?.consolidated_weather[0]
                                        ?.the_temp,
                                )}`}
                        </Text>
                        {currentWeatherReady &&
                            renderIcon(
                                currentWeather.consolidated_weather[0]
                                    .weather_state_abbr,
                            )}
                    </Row>
                </ScrollView>
            )}
        </>
    );
};

const styles: any = StyleSheet.create({
    locationDisplay: {
        textAlign: 'center',
        color: '#fff',
    },
    scrollView: {
        flex: 1,
    },
});

export default Location;
