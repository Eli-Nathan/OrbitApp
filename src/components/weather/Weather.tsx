import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import { DAYICONS } from '../../assets/icons/day';
import { NIGHTICONS } from '../../assets/icons/night';
import { parseTemp } from '../../utils/strings';
import { Row, Column, Text } from '../../primitives';

interface WeatherProps {
    currentWeather: any,
    isDay: boolean,
}

const renderIcon: any = (abbr: string, isDay: boolean) => {
    const obj = isDay ? DAYICONS : NIGHTICONS;
    const WeatherIcon =
        obj[abbr.charAt(0).toUpperCase() + abbr.slice(1)];
    return (
        <WeatherIcon
            width={225}
            height={225}
            viewBox={'0 0 190 190'}
            style={styles.iconStyle}
        />
    );
}

const Weather = ({currentWeather, isDay}: WeatherProps) => {
    const theDate = new Date();
    return (
        <Row>
            <Column style={styles.colStyle}>
                {renderIcon(
                    currentWeather.consolidated_weather[0]
                        .weather_state_abbr, isDay
                )}
                <Text style={{ ...styles.textCenter, ...styles.temp }}>
                    {parseTemp(
                        currentWeather?.consolidated_weather[0]
                            ?.the_temp,
                    )}
                </Text>
                <Text style={styles.textCenter}>
                    {currentWeather?.consolidated_weather[0]
                        ?.weather_state_name
                    }
                </Text>
            </Column>
        </Row>
    );
};

const styles: any = StyleSheet.create({
    colStyle: {
        margin: 12,
        flex: 1,
        display: 'flex',
        borderRadius: 8,
        textAlign: 'center',
        alignItems: 'center',
    },
    textCenter: {
        textAlign: 'center',
        color: '#fff',
    },
    temp: {
        fontSize: 68,
    },
});

export default Weather;
