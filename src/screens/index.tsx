import React, { FunctionComponent } from "react"
import { SafeAreaView, StyleSheet, View, StatusBar } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from "react-navigation"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"

import { Row, Text } from "../primitives"
import Theme from "../theme"
import { IconSearch } from "../assets/icons"

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
                    ? Theme.Colours.LightBlue
                    : Theme.Colours.DarkBlue,
            height: "100%",
            flexGrow: 1,
            display: "flex",
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
                    light || !nightTheme
                        ? Theme.Colours.LightBlue
                        : Theme.Colours.DarkBlue,
                    light || !nightTheme
                        ? Theme.Colours.LightBlue_light
                        : Theme.Colours.DarkBlue_light,
                ]}
                style={{ flexGrow: 1 }}
            >
                <StatusBar barStyle="light-content" />
                <View>
                    {hasSearch && (
                        <Row style={styles.rowStyles}>
                            <TouchableWithoutFeedback
                                onPress={() => navigation.navigate("Search")}
                                style={{
                                    backgroundColor: "#fff",
                                    borderRadius: 100,
                                }}
                            >
                                <IconSearch
                                    width={40}
                                    height={40}
                                    viewBox={`0 0 160 160`}
                                />
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
