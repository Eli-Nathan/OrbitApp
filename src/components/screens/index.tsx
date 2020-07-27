import React, { FunctionComponent } from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from 'react-navigation';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { Row } from '../../primitives';

interface ScreenProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    light?: boolean;
    hasTopLinks?: boolean;
}

const Screen: FunctionComponent<ScreenProps> = ({
    hasTopLinks,
    children,
    navigation,
    light,
}) => {
    const styles = StyleSheet.create({
        safeAreaView: {
            backgroundColor: light ? '#fff' : '#223B51',
            height: '100%',
        },
        rowStyles: {
            justifyContent: 'space-between',
            padding: 12,
        },
        navItem: {
            color: '#fff',
        },
    });
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <StatusBar barStyle="light-content" />
            <View>
                {hasTopLinks && (
                    <Row style={styles.rowStyles}>
                        <TouchableWithoutFeedback
                            onPress={() => navigation.navigate('Search')}>
                            <Text style={styles.navItem}>Search</Text>
                        </TouchableWithoutFeedback>
                    </Row>
                )}
                {children}
            </View>
        </SafeAreaView>
    );
};

export default Screen;
