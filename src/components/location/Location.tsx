import React from 'react';
import { StyleSheet, ScrollView, ViewStyle, Text, Button } from 'react-native';

import Locale from '../locale/Locale';
import Weather from '../weather/Weather';

interface LocationProps {
    weather: any;
    location: any;
    nightTheme: boolean;
}

const Location = (props: LocationProps) => {
    return (
        <>
            {!props.weather ? null : (
                <ScrollView style={styles.locationDisplay}>
                    <Locale
                        nightTheme={props.nightTheme}
                        userLocation={props.location}
                    />
                    <Weather
                        currentWeather={props.weather}
                        nightTheme={props.nightTheme}
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
