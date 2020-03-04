import React, {useEffect, useState} from 'react';
import {Text, StyleSheet} from 'react-native';

const Location = props => {
  const [userLocation, setUserLocation] = useState(null);
  const [userLocationReady, setUserLocationReady] = useState(false);
  const [currentWeather, setCurrentWeather] = useState(false);
  const [currentWeatherReady, setCurrentWeatherReady] = useState(false);

  const degrees = '\u2103';

  const fetchLocation = async (lat, lng) => {
    return await fetch(
      `https://www.metaweather.com/api/location/search/?lattlong=${lat},${lng}`,
    );
  };

  const getLocationWeather = async locId => {
    return await fetch(`https://www.metaweather.com/api/location/${locId}/`);
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
          setCurrentWeatherReady(true);
          console.log(data.consolodated_weather);
        });
    }
  }, [userLocation, userLocationReady]);

  return (
    <>
      <Text style={styles.locationDisplay}>
        {props.ready && userLocationReady ? userLocation.title : null}
      </Text>
      <Text style={styles.locationDisplay}>
        {props.ready && currentWeatherReady
          ? `${
              currentWeather.consolidated_weather[0].weather_state_name
            } - ${Math.ceil(
              currentWeather.consolidated_weather[0].the_temp,
            )}${degrees}`
          : null}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  locationDisplay: {
    textAlign: 'center',
  },
});

export default Location;
