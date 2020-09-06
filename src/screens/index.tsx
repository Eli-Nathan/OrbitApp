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
import { IconSearch, OrbitIcon } from "../assets/icons"

interface ScreenProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
    hasSearch?: boolean
    nightTheme: boolean
    isHome?: boolean
    reload?: () => void
}

const Screen: FunctionComponent<ScreenProps> = ({
    hasSearch,
    children,
    navigation,
    nightTheme,
    reload,
}) => {
    const styles = StyleSheet.create({
        safeAreaView: {
            backgroundColor: nightTheme
                ? Theme.Colours.DarkBlue
                : Theme.Colours.LightBlue,
            height: "100%",
            flexGrow: 1,
            flex: 1,
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
                    nightTheme
                        ? Theme.Colours.DarkBlue
                        : Theme.Colours.LightBlue,
                    nightTheme
                        ? Theme.Colours.DarkBlue_light
                        : Theme.Colours.LightBlue_light,
                ]}
                style={{ flexGrow: 1, height: "105%" }}
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
                                    width={30}
                                    height={30}
                                    viewBox={`0 0 160 160`}
                                />
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback
                                onPress={() =>
                                    reload
                                        ? reload()
                                        : navigation.navigate("Home")
                                }
                            >
                                <OrbitIcon
                                    width={30}
                                    height={30}
                                    viewBox={`0 0 78 78`}
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
