import React, { FunctionComponent } from "react"
import { StyleSheet, Text } from "react-native"

import { PrimitiveStyleProps } from "./types"

const TextPrimitive: FunctionComponent<PrimitiveStyleProps> = ({
    children,
    style,
    bold,
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
}) => {
    const styles = StyleSheet.create({
        textStyle: {
            margin: margin || "auto",
            marginTop: marginTop || "auto",
            marginBottom: marginBottom || "auto",
            marginLeft: marginLeft || "auto",
            marginRight: marginRight || "auto",
            ...style,
            fontFamily: bold ? "Poppins-Bold" : "Poppins-Medium",
        },
    })

    return <Text style={styles.textStyle}>{children}</Text>
}

export default TextPrimitive
