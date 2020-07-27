import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, ViewStyle, Text, Button } from 'react-native';

import { calcIsDay } from '../../utils/dates';

import { API } from '../../constants/api';
import Locale from '../locale/Locale';
import Weather from '../weather/Weather';

interface LocationProps {
    weather: any;
    location: any;
    isDay: boolean;
}

const Location = (props: LocationProps) => {
    return (
        <>
            {!props.weather ? null : (
                <ScrollView style={styles.locationDisplay}>
                    <Locale userLocation={props.location} />
                    <Weather
                        currentWeather={props.weather}
                        isDay={props.isDay}
                    />
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
