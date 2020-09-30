import React from "react"
import { StyleSheet, View } from "react-native"

import { Text } from "../../primitives"

import Theme from "../../theme"

const LocationHeader = (props) => {
    return (
        <Text bold style={styles.headerViewTextStyle}>
            {props.location}
        </Text>
    )
}

const styles = StyleSheet.create({
    headerViewTextStyle: {
        fontSize: 28,
        color: Theme.Colours.White,
        textAlign: "center",
    },
})

export default LocationHeader
