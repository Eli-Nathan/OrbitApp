import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import Location from './components/location/Location';

const App = () => {
    const [position, setPosition] = useState({ lat: 0, lng: 0, ready: false });

    const getPosition = () => {
        Geolocation.getCurrentPosition(pos => {
            if (pos.coords.latitude && pos.coords.longitude) {
                setPosition({
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude,
                    ready: true,
                });
            }
        });
    };

    useEffect(() => {
        getPosition();
    }, []);

    return (
        <>
            <StatusBar style={styles.statusBar} barStyle="light-content" />
            <SafeAreaView style={styles.safeAreaView}>
                <View contentInsetAdjustmentBehavior="automatic">
                    <View style={styles.contentView}>
                        {position.ready ? (
                            <Location
                                lat={position.latitude}
                                lng={position.longitude}
                                ready={position.ready}
                            />
                        ) : null}
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: '#223B51',
        height: '100%',
    },
});

export default App;
