import React, { FunctionComponent } from "react"
import { connect } from "react-redux"
import {
    ScrollView,
    StyleSheet,
    Text,
    TextStyle,
    ViewStyle,
    View,
    TouchableWithoutFeedback,
} from "react-native"

import { setNightTheme } from "../../reducers/theme/actions"
import * as ACTIONS from "../../reducers/location/actions"
import apiFetch from "../../hooks/apiFetch"
import { API } from "../../constants/api"
import { calcIsDay } from "../../utils/dates"
import { RootState } from "../../reducers"

interface SearchResultsProps {
    query: string
    results: any
    lat: number
    lon: number
    placeholder: string | undefined
    fetching: boolean
    navigation: any
    dispatchSetLocationData: any
    dispatchSetCurrentWeather: any
    dispatchSetNightTheme: any
    dispatchSetError: any
}

const SearchResults: FunctionComponent<SearchResultsProps> = ({
    query,
    lat,
    lon,
    results,
    placeholder,
    fetching,
    navigation,
    dispatchSetLocationData,
    dispatchSetCurrentWeather,
    dispatchSetNightTheme,
    dispatchSetError,
}) => {
    const loadNewLocation = (location: string) => {
        apiFetch(API.WEATHER, {
            lat,
            lon,
            units: "metric",
        })
            .then((data) => {
                dispatchSetLocationData(data.id, data.name)
                dispatchSetCurrentWeather(data)
                dispatchSetNightTheme(
                    !calcIsDay(
                        data.current.sunrise,
                        data.current.sunset,
                        new Date()
                    )
                )
                navigation.navigate("Home", { hasWeather: true })
            })
            .catch((error) => dispatchSetError(error))
    }
    const getHighlightedText = (text: string, highlight: string) => {
        const parts = text.split(new RegExp(`(${highlight})`, "gi"))
        return (
            <Text>
                {parts.map((part, i) =>
                    part.toLowerCase() === highlight.toLowerCase() ? (
                        <Text
                            key={`HIGHLIGHT_SEARCH_${part
                                .replace(" ", "")
                                .toUpperCase()}_${i}`}
                            style={styles.highlightText}
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
            <View style={styles.result} key={`${result.woeid}`}>
                <TouchableWithoutFeedback
                    onPress={() => loadNewLocation(result.title)}
                    hitSlop={{ top: 20, bottom: 20, left: 14, right: 14 }}
                >
                    <Text>{getHighlightedText(result.title, query)}</Text>
                </TouchableWithoutFeedback>
            </View>
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
    highlightText: TextStyle
    results: ViewStyle
    result: ViewStyle
}

const styles: any = StyleSheet.create<Styles>({
    highlightText: {
        color: "green",
    },
    results: {
        paddingBottom: 20,
        paddingLeft: 14,
        paddingRight: 14,
    },
    result: {
        paddingTop: 20,
        paddingBottom: 20,
    },
})

const mapStateToProps = (state: RootState) => {
    const { lat, lon } = state.location
    return {
        lat,
        lon,
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    dispatchSetNightTheme: (nightTheme: boolean) => {
        dispatch(setNightTheme(nightTheme))
    },
    dispatchSetLatLon: (lat: number, lon: number) => {
        dispatch(ACTIONS.setLatLon(lat, lon))
    },
    dispatchSetLocationData: (woeid: number, name: string) => {
        dispatch(ACTIONS.setLocationData(woeid, name))
    },
    dispatchSetCurrentWeather: (weather: any) => {
        dispatch(ACTIONS.setCurrentWeather(weather))
    },
    dispatchSetFetching: () => dispatch(ACTIONS.setFetching()),
    dispatchSetError: (error: string) => dispatch(ACTIONS.setError(error)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
