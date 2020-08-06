import React, { FunctionComponent } from "react"
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from "react-navigation"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"

import { Row } from "../primitives"
import Theme from "../theme"

interface ScreenProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
    light?: boolean
    hasSearch?: boolean
    nightTheme: boolean
}

const Screen: FunctionComponent<ScreenProps> = ({
    hasSearch,
    children,
    navigation,
    light,
    nightTheme,
}) => {
    const styles = StyleSheet.create({
        safeAreaView: {
            backgroundColor:
                light || !nightTheme
                    ? Theme.Colours.LightBlue_dark
                    : Theme.Colours.LightBlue_dark,
            height: "100%",
        },
        rowStyles: {
            justifyContent: "space-between",
            padding: 12,
        },
        navItem: {
            color: "#fff",
        },
    })
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <LinearGradient
                colors={[
                    Theme.Colours.LightBlue_dark,
                    Theme.Colours.LightBlue_darker,
                ]}
            >
                <StatusBar barStyle="light-content" />
                <View>
                    {hasSearch && (
                        <Row style={styles.rowStyles}>
                            <TouchableWithoutFeedback
                                onPress={() => navigation.navigate("Search")}
                            >
                                <Text style={styles.navItem}>Search</Text>
                            </TouchableWithoutFeedback>
                        </Row>
                    )}
                    {children}
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default Screen
