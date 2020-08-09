import React from "react"
import { StyleSheet, Text } from "react-native"

const TextPrimitive = (props) => {
    const styles = StyleSheet.create({
        textStyle: {
            margin: props.margin || "auto",
            marginTop: props.marginTop || "auto",
            marginBottom: props.marginBottom || "auto",
            marginLeft: props.marginLeft || "auto",
            marginRight: props.marginRight || "auto",
            ...props.style,
            fontFamily: props.bold ? "Poppins-Bold" : "Poppins-Medium",
        },
    })

    console.log(props.children)

    return <Text style={styles.textStyle}>{props.children}</Text>
}

export default TextPrimitive
