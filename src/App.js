import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import Theme from './theme';
import Location from './components/location/Location';

const App = () => {
  const [position, setPosition] = useState({lat: 0, lng: 0, ready: false});

  const getPosition = () => {
    Geolocation.getCurrentPosition(pos => {
      if (pos.coords.latitude && pos.coords.longitude) {
        console.log(
          `Lat: ${pos.coords.latitude}, Lng: ${pos.coords.longitude}`,
        );
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
      <StatusBar style={styles.statusBar} barStyle="default" />
      <SafeAreaView>
        <View contentInsetAdjustmentBehavior="automatic">
          <View style={styles.headerView}>
            <Text style={styles.headerViewTextStyle}>Weather App</Text>
          </View>
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
  statusBar: {
    backgroundColor: Theme.Colours.SkyBlue,
    color: '#000000',
  },
  headerView: {
    backgroundColor: Theme.Colours.SkyBlue,
    color: Theme.Colours.White,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
  },

  headerViewTextStyle: {
    color: Theme.Colours.White,
    fontWeight: 'bold',
  },
});

export default App;
