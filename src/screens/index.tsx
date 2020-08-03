import React, { FunctionComponent } from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from 'react-navigation';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { Row } from '../primitives';

interface ScreenProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    light?: boolean;
    hasSearch?: boolean;
    nightTheme: boolean;
}

const Screen: FunctionComponent<ScreenProps> = ({
    hasSearch,
    children,
    navigation,
    light,
    nightTheme,
}) => {
    const styles = StyleSheet.create({
        safeAreaView: {
            backgroundColor: light || !nightTheme ? '#fff' : '#223B51',
            height: '100%',
        },
        rowStyles: {
            justifyContent: 'space-between',
            padding: 12,
        },
        navItem: {
            color: nightTheme ? '#fff' : '#000',
        },
    });
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <StatusBar barStyle="light-content" />
            <View>
                {hasSearch && (
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
