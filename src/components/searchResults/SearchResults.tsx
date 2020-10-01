import React, { FunctionComponent, useEffect, useState } from "react"
import { connect } from "react-redux"
import { StyleSheet, ViewStyle, TextStyle, View } from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import AsyncStorage, {
    useAsyncStorage,
} from "@react-native-community/async-storage"

import { setNightTheme } from "../../reducers/theme/actions"
import * as ACTIONS from "../../reducers/location/actions"
import apiFetch from "../../hooks/apiFetch"
import { API } from "../../constants/api"
import { calcIsDay } from "../../utils/dates"
import { Text, Row } from "../../primitives"

interface SearchResultsProps {
    query: string
    results: any
    placeholder: string | undefined
    fetching: boolean
    navigation: any
    setLatLon: any
    setLocationData: any
    setCurrentWeather: any
    setRecentSearches: any
    setNightTheme: any
    setError: any
    recent: any
}

const SearchResults: FunctionComponent<SearchResultsProps> = ({
    query,
    results,
    placeholder,
    fetching,
    navigation,
    setLatLon,
    setLocationData,
    setCurrentWeather,
    setRecentSearches,
    setNightTheme,
    setError,
    recent,
}) => {
    const [persistedRecentSearches, setPersistedRecentSearches] = useState<any>(
        false
    )
    const { getItem } = useAsyncStorage("@recent_searches")

    const setStorageValue = async (key: string, value: string) => {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (e) {
            // save error
        }
    }
    const readRecentFromStorage = async () => {
        const item: any = await getItem()
        setPersistedRecentSearches(JSON.parse(item))
    }
    useEffect(() => {
        recent?.length > 0 &&
            setStorageValue("@recent_searches", JSON.stringify(recent))
        readRecentFromStorage()
    }, [recent])

    const loadNewLocation = (result: any) => {
        const lat = result.latt_long.split(",")[0]
        const lon = result.latt_long.split(",")[1]
        setLatLon(lat, lon)
        apiFetch(API.WEATHER, {
            lat,
            lon,
            units: "metric",
        })
            .then((data) => {
                setCurrentWeather(data)
                setLocationData(
                    result.title,
                    data.timezone,
                    data.timezone_offset
                )
                setRecentSearches(lat, lon, result.title)
                setNightTheme(
                    !calcIsDay(
                        data.current.sunrise,
                        data.current.sunset,
                        new Date()
                    )
                )
                navigation.navigate("SearchedWeather", { hasWeather: true })
            })
            .catch((error) => setError(error))
    }
    const getHighlightedText = (
        text: string,
        highlight: string,
        color: string = "#fff"
    ) => {
        const parts = text.split(new RegExp(`(${highlight})`, "gi"))
        return (
            <Text style={{ color }}>
                {parts.map((part, i) =>
                    part.toLowerCase() === highlight.toLowerCase() ? (
                        <Text
                            key={`HIGHLIGHT_SEARCH_${part
                                .replace(" ", "")
                                .toUpperCase()}_${i}`}
                            style={styles.highlightText}
                            bold
                        >
                            {part}
                        </Text>
                    ) : (
                        part
                    )
                )}
            </Text>
        )
    }

    const renderResults = (res: any) =>
        res.slice(0, 10).map((result: any) => (
            <Row style={styles.result} key={`${result.latt_long}`}>
                <TouchableWithoutFeedback
                    style={{ width: "100%" }}
                    onPress={() => loadNewLocation(result)}
                    hitSlop={{ top: 20, bottom: 20, left: 100, right: 100 }}
                >
                    <Text style={{ width: "100%" }}>
                        {getHighlightedText(result.title, query)}
                    </Text>
                </TouchableWithoutFeedback>
            </Row>
        ))

    const renderRecent = (recent: any) =>
        recent.map((rec: any) => {
            rec.latt_long = `${rec.lat},${rec.lon}`
            return (
                <View style={styles.recent} key={`${rec.lat}-${rec.lon}`}>
                    <TouchableWithoutFeedback
                        onPress={() => loadNewLocation(rec)}
                        hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
                    >
                        <Text style={{ color: "#000" }}>
                            {getHighlightedText(rec.title, query, "#000")}
                        </Text>
                    </TouchableWithoutFeedback>
                </View>
            )
        })
    return (
        <View style={styles.results}>
            {fetching ? (
                <Text style={styles.result}>Searching...</Text>
            ) : results?.length && query?.length ? (
                renderResults(results)
            ) : persistedRecentSearches?.length ? (
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 12,
                        flexWrap: "wrap",
                    }}
                >
                    {renderRecent(recent)}
                </View>
            ) : (
                <Text style={styles.result}>{placeholder}</Text>
            )}
        </View>
    )
}

interface Styles {
    recent: ViewStyle
    results: ViewStyle
    result: ViewStyle
    highlightText: TextStyle
}

const styles: any = StyleSheet.create<Styles>({
    recent: {
        backgroundColor: "#fafafa",
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 21,
        paddingRight: 21,
        borderRadius: 100,
        marginRight: 12,
        marginBottom: 12,
    },
    results: {
        width: "100%",
        flexGrow: 1,
        paddingBottom: 20,
        paddingLeft: 14,
        paddingRight: 14,
        color: "#fff",
    },
    result: {
        color: "#fff",
        width: "100%",
        paddingTop: 20,
        paddingBottom: 20,
    },
    highlightText: {
        textDecorationLine: "underline",
    },
})

const mapDispatchToProps = (dispatch: any) => ({
    setNightTheme: (nightTheme: boolean) => {
        dispatch(setNightTheme(nightTheme))
    },
    setLatLon: (lat: number, lon: number) => {
        dispatch(ACTIONS.setLatLon(ACTIONS.SET_SEARCHED_LAT_LON, lat, lon))
    },
    setLocationData: (
        name: string,
        timezone: string,
        timezoneOffset: number
    ) => {
        dispatch(
            ACTIONS.setLocationData(
                ACTIONS.SET_SEARCHED_LOCATION_DATA,
                name,
                timezone,
                timezoneOffset
            )
        )
    },
    setRecentSearches: (lat: number, lon: number, title: string) => {
        dispatch(
            ACTIONS.setRecentSearches(
                ACTIONS.SET_RECENT_SEARCHES,
                title,
                lat,
                lon
            )
        )
    },
    setCurrentWeather: (weather: any) => {
        dispatch(
            ACTIONS.setCurrentWeather(
                ACTIONS.SET_SEARCHED_CURRENT_WEATHER,
                weather
            )
        )
    },
    setFetching: () => dispatch(ACTIONS.setFetching()),
    setError: (error: string) => dispatch(ACTIONS.setError(error)),
})

const mapStateToProps = (state: any) => ({
    recent: state.location.recentSearches,
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
