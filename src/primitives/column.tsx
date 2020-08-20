import React, { FunctionComponent } from "react"
import { StyleSheet, View } from "react-native"

import { PrimitiveStyleProps } from "./types"

const Column: FunctionComponent<PrimitiveStyleProps> = (props: any) => {
    const styles = StyleSheet.create({
        columnStyle: {
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            ...props.style,
        },
    })

    return <View style={styles.columnStyle}>{props.children}</View>
}

export default Column
