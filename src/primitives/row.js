import React from 'react';
import { StyleSheet, View } from 'react-native';

const Row = props => {
    return <View styles={styles.rowStyle}>{props.children}</View>;
};

const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: 'row',
    },
});

export default Row;
