import React, { useState, FunctionComponent } from "react"
import { TextInput, StyleSheet } from "react-native"
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from "react-navigation"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"

import { Row, Text } from "../primitives"
import Screen from "."
import apiFetch from "../hooks/apiFetch"
import { API } from "../constants/api"
import SearchResults from "../components/searchResults/SearchResults"

interface SearchScreenProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

const SearchScreen: FunctionComponent<SearchScreenProps> = ({ navigation }) => {
    const [searchValue, setSearchValue] = useState("Search...")
    const [fetching, setFetching] = useState(false)
    const [typingTimeout, setTypingTimeout] = useState<any>(() => 0)
    const [searchResults, setSearchResults] = useState([])

    const generatePlaceholder = () => {
        let placeholder
        if (searchValue.length === 0) {
            placeholder = "Search for your city"
        } else if (searchResults.length === 0) {
            placeholder = "No cities found"
        }
        return placeholder
    }

    const search = (query: string) => {
        setSearchValue(query)
        setFetching(true)
        if (typingTimeout) {
            clearTimeout(typingTimeout)
        }

        setTypingTimeout(() => {
            return setTimeout(() => {
                setSearchValue(query)
                apiFetch(`${API.LOCATION}`, { query })
                    .then((data) => {
                        setFetching(false)
                        setSearchResults(data)
                    })
                    .catch(() => {
                        setFetching(false)
                        setSearchResults([])
                    })
            }, 500)
        })
    }
    return (
        <Screen navigation={navigation} nightTheme={false} light>
            <Row style={styles.rowStyles}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <Text style={styles.navItem}>Back</Text>
                </TouchableWithoutFeedback>
            </Row>
            <Row style={{ paddingLeft: 12, paddingRight: 12 }}>
                <TextInput
                    style={{
                        height: 40,
                        backgroundColor: "#fff",
                        color: "#000",
                        borderWidth: 1,
                        paddingLeft: 6,
                        width: "100%",
                        borderRadius: 8,
                    }}
                    autoFocus
                    onFocus={() => setSearchValue("")}
                    onChangeText={(text) => search(text)}
                    value={searchValue}
                />
            </Row>
            <SearchResults
                navigation={navigation}
                query={searchValue}
                results={searchResults}
                placeholder={generatePlaceholder()}
                fetching={fetching}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    rowStyles: {
        alignItems: "center",
        display: "flex",
        padding: 12,
    },
    navItem: {
        color: "#fff",
    },
})

export default SearchScreen
