import React from 'react';
import { StyleSheet, Text } from 'react-native';

const TextPrimitive = props => {
    const styles = StyleSheet.create({
        columnStyle: {
            margin: props.margin || 'auto',
            marginTop: props.marginTop || 'auto',
            marginBottom: props.marginBottom || 'auto',
            marginLeft: props.marginLeft || 'auto',
            marginRight: props.marginRight || 'auto',
            ...props.style,
        },
    });

    return <Text style={styles.columnStyle}>{props.children}</Text>;
};

export default TextPrimitive;
