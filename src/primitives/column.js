import React from 'react';
import { StyleSheet, View } from 'react-native';

const Column = props => {
    return <View styles={styles.columnStyle}>{props.children}</View>;
};

const styles = StyleSheet.create({
    columnStyle: {
        flexDirection: 'column',
    },
});

export default Column;
