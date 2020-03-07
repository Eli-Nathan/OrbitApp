import React, {useEffect, useState} from 'react';
import {Text, StyleSheet} from 'react-native';

import {parseTemp} from '../../utils/strings';
import {calcDayNight} from '../../utils/dates';

import DayIcons from '../../assets/icons/day';
import NightIcons from '../../assets/icons/night';

const Location = props => {
    const [userLocation, setUserLocation] = useState(null);
    const [userLocationReady, setUserLocationReady] = useState(false);
    const [currentWeather, setCurrentWeather] = useState(false);
    const [currentWeatherReady, setCurrentWeatherReady] = useState(false);
    const [isDay, setIsDay] = useState(true);
    const [timeKnown, setTimeKnown] = useState(false);

    const fetchLocation = async (lat, lng) => {
        return await fetch(
            `https://www.metaweather.com/api/location/search/?lattlong=${lat},${lng}`,
        );
    };

    const getLocationWeather = async locId => {
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
            getLocationWeather(userLocation.woeid)
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

    const renderIcon = abbr => {
        if (currentWeatherReady) {
            const WeatherIcon =
                DayIcons[abbr.charAt(0).toUpperCase() + abbr.slice(1)];
            return <WeatherIcon />;
        } else {
            return null;
        }
    };

    const theDate = new Date();

    return (
        <>
            <Text style={styles.locationDisplay}>
                {props.ready && userLocationReady ? userLocation.title : null}
            </Text>
            <Text style={styles.locationDisplay}>
                {props.ready && currentWeatherReady
                    ? currentWeather.sun_set
                    : null}
            </Text>
            <Text style={styles.locationDisplay}>
                {props.ready && currentWeatherReady ? theDate.toString() : null}
            </Text>
            <Text style={styles.locationDisplay}>
                {props.ready && currentWeatherReady
                    ? `${
                          currentWeather.consolidated_weather[0]
                              .weather_state_name
                      } - ${parseTemp(
                          currentWeather.consolidated_weather[0].the_temp,
                      )}`
                    : null}
            </Text>
            <Text>
                {currentWeatherReady &&
                    currentWeather.consolidated_weather[0].weather_state_abbr &&
                    currentWeather.consolidated_weather[0].weather_state_abbr}
            </Text>
            {currentWeatherReady &&
            currentWeather.consolidated_weather[0].weather_state_abbr
                ? renderIcon(
                      currentWeather.consolidated_weather[0].weather_state_abbr,
                  )
                : null}
        </>
    );
};

const styles = StyleSheet.create({
    locationDisplay: {
        textAlign: 'center',
    },
});

export default Location;
