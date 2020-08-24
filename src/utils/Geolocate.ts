import {
    PERMISSIONS,
    checkMultiple,
    RESULTS,
    requestMultiple,
} from "react-native-permissions"
import Geolocation from "@react-native-community/geolocation"
import AsyncStorage from "@react-native-community/async-storage"

import apiFetch from "../hooks/apiFetch/apiFetch"
import { API } from "../constants/api"
import { calcIsDay } from "./dates"
import { Platform } from "react-native"

interface GeoLocateProps {
    setNightTheme: any
    setLatLon: any
    setLocationData: any
    setCurrentWeather: any
    setFetching: any
    setError: any
    navigation?: any
}

const setStorageValue = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        // save error
    }
}

const geoLocate = ({
    setNightTheme,
    setLatLon,
    setLocationData,
    setCurrentWeather,
    setFetching,
    setError,
}: GeoLocateProps) =>
    Geolocation.getCurrentPosition(
        (pos) => {
            if (pos.coords.latitude && pos.coords.longitude) {
                setFetching()
                const lat = pos.coords.latitude
                const lon = pos.coords.longitude
                setLatLon(lat, lon)
                apiFetch(API.LOCATION, {
                    lattlong: `${lat},${lon}`,
                })
                    .then(async (data) => {
                        setLocationData(data[0].woeid, data[0].title)
                        await apiFetch(API.WEATHER, {
                            lat,
                            lon,
                            units: "metric",
                        }).then((weatherData) => {
                            setCurrentWeather(weatherData)
                            setStorageValue(
                                "@current_weather",
                                JSON.stringify({
                                    woeid: data[0].woeid,
                                    title: data[0].title,
                                    lat,
                                    lon,
                                    currentWeather: weatherData.current,
                                    dailyWeather: weatherData.daily,
                                    hourlyWeather: weatherData.hourly,
                                    lastUpdated: Date.now(),
                                })
                            )
                            setNightTheme(
                                !calcIsDay(
                                    weatherData.current.sunrise,
                                    weatherData.current.sunset,
                                    new Date()
                                )
                            )
                        })
                    })
                    .catch((error) => setError(error))
            }
        },
        (error) => {
            console.log("error2", error)
            setError(error)
        }
    )

export const getPosition = ({
    setNightTheme,
    setLatLon,
    setLocationData,
    setCurrentWeather,
    setFetching,
    setError,
    navigation,
}: GeoLocateProps) => {
    return checkMultiple([
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        PERMISSIONS.IOS.LOCATION_ALWAYS,
    ])
        .then((statuses) => {
            const permission =
                Platform.OS === "ios"
                    ? statuses[PERMISSIONS.IOS.LOCATION_ALWAYS]
                    : statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]
            switch (permission) {
                case RESULTS.UNAVAILABLE:
                    console.log(
                        "This feature is not available (on this device / in this context)"
                    )
                    break
                case RESULTS.DENIED:
                    requestMultiple([
                        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
                        PERMISSIONS.IOS.LOCATION_ALWAYS,
                    ])
                        .then(() =>
                            geoLocate({
                                setNightTheme,
                                setLatLon,
                                setLocationData,
                                setCurrentWeather,
                                setFetching,
                                setError,
                            })
                        )
                        .catch(() => navigation.navigate("Search"))
                    break
                case RESULTS.GRANTED:
                    geoLocate({
                        setNightTheme,
                        setLatLon,
                        setLocationData,
                        setCurrentWeather,
                        setFetching,
                        setError,
                    })
                    break
                case RESULTS.BLOCKED:
                    console.log(
                        "The permission is denied and not requestable anymore"
                    )
                    break
            }
        })
        .catch((error) => {
            console.log("error1", error)
            setError(error)
        })
}
