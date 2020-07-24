import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';

import Theme from '../../theme';
import { Row, Column, Text } from '../../primitives';
import LocationHeader from '../locationHeader/locationHeader';

interface LocaleProps {
    userLocation: any;
}

const Locale = (props: LocaleProps) => {
    const theDate = new Date();
    return (
        <Row style={styles.rowStyle}>
            <Column style={styles.colStyle}>
                <LinearGradient
                    colors={[
                        Theme.Colours.DarkBlue_dark,
                        Theme.Colours.DarkBlue_darker,
                    ]}
                    style={styles.linearGradient}>
                    <Text style={{ ...styles.textCenter, ...styles.time }}>
                        {`${moment().format('h:mma')}`}
                    </Text>
                    <Text style={styles.textCenter} marginBottom={12}>
                        {`${moment().format('dddd')} ${moment().format(
                            'Do MMMM',
                        )}`}
                    </Text>
                    <LocationHeader location={props.userLocation.title} />
                </LinearGradient>
            </Column>
        </Row>
    );
};

const styles: any = StyleSheet.create({
    colStyle: {
        margin: 12,
        flex: 1,
        display: 'flex',
        borderRadius: 8,
        textAlign: 'center',
        alignItems: 'center',
    },
    linearGradient: {
        width: '100%',
        borderRadius: 8,
        height: '100%',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        padding: 12,
    },
    textCenter: {
        textAlign: 'center',
        color: '#fff',
    },
    time: {
        fontSize: 28,
    },
    temp: {
        fontSize: 68,
    },
});

export default Locale;
