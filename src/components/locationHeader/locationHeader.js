import React from "react"
import { StyleSheet, View } from "react-native"

import { Text } from "../../primitives"

import Theme from "../../theme"

const LocationHeader = (props) => {
    return (
        <View styles={styles.headerView}>
            <Text style={styles.headerViewTextStyle}>{props.location}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerView: {
        justifyContent: "center",
        alignItems: "center",
    },
    headerViewTextStyle: {
        fontSize: 28,
        color: Theme.Colours.White,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 6,
    },
})

export default LocationHeader
