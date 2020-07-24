import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Theme from '../../theme';

const LocationHeader = props => {
    return (
        <View styles={styles.headerView}>
            <Text style={styles.headerViewTextStyle}>{props.location}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 12,
    },
    headerViewTextStyle: {
        color: Theme.Colours.White,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default LocationHeader;
