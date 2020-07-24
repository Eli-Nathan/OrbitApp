import React from 'react';
import { StyleSheet, View } from 'react-native';

const Column = props => {
    const styles = StyleSheet.create({
        columnStyle: {
            flexDirection: 'column',
            ...props.style,
        },
    });

    return <View style={styles.columnStyle}>{props.children}</View>;
};

export default Column;
