import React, { FunctionComponent } from "react"
import { connect } from "react-redux"
import { ScrollView, StyleSheet, ViewStyle, TextStyle } from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"

import { setNightTheme } from "../../reducers/theme/actions"
import * as ACTIONS from "../../reducers/location/actions"
import apiFetch from "../../hooks/apiFetch"
import { API } from "../../constants/api"
import { calcIsDay } from "../../utils/dates"
import { RootState } from "../../reducers"
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
    setNightTheme: any
    setError: any
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
    setNightTheme,
    setError,
}) => {
    const loadNewLocation = (result: any) => {
        const lat = result.latt_long.split(",")[0]
        const lon = result.latt_long.split(",")[1]
        setLatLon(lat, lon)
        setLocationData(result.woeid, result.title)
        apiFetch(API.WEATHER, {
            lat,
            lon,
            units: "metric",
        })
            .then((data) => {
                setCurrentWeather(data)
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
    const getHighlightedText = (text: string, highlight: string) => {
        const parts = text.split(new RegExp(`(${highlight})`, "gi"))
        return (
            <Text style={{ color: "#fff" }}>
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
    const renderResults = () =>
        results.slice(0, 5).map((result: any) => (
            <Row style={styles.result} key={`${result.woeid}`}>
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
    return (
        <ScrollView style={styles.results} keyboardShouldPersistTaps="handled">
            {fetching ? (
                <Text style={styles.result}>Searching...</Text>
            ) : results.length > 0 ? (
                renderResults()
            ) : (
                <Text style={styles.result}>{placeholder}</Text>
            )}
        </ScrollView>
    )
}

interface Styles {
    results: ViewStyle
    result: ViewStyle
    highlightText: TextStyle
}

const styles: any = StyleSheet.create<Styles>({
    results: {
        width: "100%",
        height: 900,
        paddingBottom: 20,
        paddingLeft: 14,
        paddingRight: 14,
        color: "#fff",
    },
    result: {
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
    setLocationData: (woeid: number, name: string) => {
        dispatch(
            ACTIONS.setLocationData(
                ACTIONS.SET_SEARCHED_LOCATION_DATA,
                woeid,
                name
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

export default connect(null, mapDispatchToProps)(SearchResults)
