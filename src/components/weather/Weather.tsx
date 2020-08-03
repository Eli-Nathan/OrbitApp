import React, { FunctionComponent } from 'react';
import { StyleSheet, Image } from 'react-native';

import { API } from '../../constants/api';
import { parseTemp } from '../../utils/strings';
import { Column, Text } from '../../primitives';

interface WeatherProps {
    currentWeather: any,
    nightTheme: boolean;
}

const renderIcon = (code: string) => (
    <Image source={{uri: `${API.ICON}${code}@4x.png`}} style={{width: 225, height: 225}} />
);

const Weather: FunctionComponent<WeatherProps>= ({ currentWeather, nightTheme }) => {
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
            color: nightTheme ? '#fff' : '#000',
        },
        temp: {
            fontSize: 68,
        },
    });
    return (
        <>
            <Column style={styles.colStyle}>
                {renderIcon(currentWeather.weather[0].icon)}
                <Text style={{ ...styles.textCenter, ...styles.temp }}>
                    {parseTemp(currentWeather?.main?.temp)}
                </Text>
                <Text style={styles.textCenter}>
                    {currentWeather?.weather[0].main}
                </Text>
            </Column>
        </>
    );
};

export default Weather;
