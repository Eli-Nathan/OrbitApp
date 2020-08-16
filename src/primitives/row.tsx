import React, { FunctionComponent } from "react"
import { StyleSheet, View } from "react-native"

import { PrimitiveStyleProps } from "./types"

const Row: FunctionComponent<PrimitiveStyleProps> = (props) => {
    const styles = StyleSheet.create({
        rowStyle: {
            flexDirection: "row",
            ...props.style,
        },
    })
    return <View style={styles.rowStyle}>{props.children}</View>
}
export default Row
