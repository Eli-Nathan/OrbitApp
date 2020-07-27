import React, { useState, FunctionComponent } from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from 'react-navigation';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { Row } from '../../primitives';
import Screen from '../../components/screens';

interface SearchScreenProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const SearchScreen: FunctionComponent<SearchScreenProps> = ({ navigation }) => {
    const [searchValue, setSearchValue] = useState('Search...');
    return (
        <Screen navigation={navigation} light>
            <Row style={styles.rowStyles}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <Text style={styles.navItem}>Back</Text>
                </TouchableWithoutFeedback>
            </Row>
            <Row style={{ paddingLeft: 12, paddingRight: 12 }}>
                <TextInput
                    style={{
                        height: 40,
                        borderColor: '#000',
                        color: '#000',
                        borderWidth: 1,
                        paddingLeft: 6,
                        width: '100%',
                        borderRadius: 8,
                    }}
                    autoFocus
                    onFocus={() => setSearchValue('')}
                    onChangeText={text => setSearchValue(text)}
                    value={searchValue}
                />
            </Row>
        </Screen>
    );
};

const styles = StyleSheet.create({
    rowStyles: {
        alignItems: 'center',
        display: 'flex',
        padding: 12,
    },
    navItem: {
        color: '#000',
    },
});

export default SearchScreen;
