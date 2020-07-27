import React from 'react';
import { StyleSheet, View } from 'react-native';

const Row = props => {
    const styles = StyleSheet.create({
        rowStyle: {
            flexDirection: 'row',
            ...props.style,
        },
    });
    return <View style={styles.rowStyle}>{props.children}</View>;
};
export default Row;
