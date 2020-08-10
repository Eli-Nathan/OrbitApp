import React, { FunctionComponent } from "react"
import { StyleSheet, Text } from "react-native"

interface TextProps {
    style?: any
    children?: any
    bold?: boolean
    margin?: number
    marginTop?: number
    marginRight?: number
    marginBottom?: number
    marginLeft?: number
}

const TextPrimitive: FunctionComponent<TextProps> = ({
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
