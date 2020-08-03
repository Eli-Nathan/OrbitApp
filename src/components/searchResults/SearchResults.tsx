import React, { FunctionComponent } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TextStyle,
    ViewStyle,
    View,
} from 'react-native';

interface SearchResultsProps {
    query: string;
    results: any;
}

const SearchResults: FunctionComponent<SearchResultsProps> = ({
    query,
    results,
}) => {
    const getHighlightedText = (text: string, highlight: string) => {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return (
            <Text>
                {parts.map(part =>
                    part.toLowerCase() === highlight.toLowerCase() ? (
                        <Text
                            key={`HIGHLIGHT_SEARCH_${part
                                .replace(' ', '')
                                .toUpperCase()}`}
                            style={styles.highlightText}>
                            {part}
                        </Text>
                    ) : (
                        part
                    ),
                )}
            </Text>
        );
    };
    const renderResults = () =>
        results.slice(0, 5).map((result: any) => (
            <View style={styles.result} key={`${result.woeid}`}>
                {getHighlightedText(result.title, query)}
            </View>
        ));
    return (
        <ScrollView style={styles.results}>
            {results.length > 0 ? (
                renderResults()
            ) : query.length > 0 ? (
                <Text style={styles.result}>No cities found</Text>
            ) : (
                <Text style={styles.result}>Search for your city</Text>
            )}
        </ScrollView>
    );
};

interface Styles {
    highlightText: TextStyle;
    results: ViewStyle;
    result: ViewStyle;
}

const styles: any = StyleSheet.create<Styles>({
    highlightText: {
        color: 'red',
    },
    results: {
        paddingBottom: 20,
        paddingLeft: 14,
        paddingRight: 14,
    },
    result: {
        paddingTop: 20,
        paddingBottom: 20,
    },
});

export default SearchResults;
