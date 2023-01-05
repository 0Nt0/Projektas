import React from 'react';

import {
    SafeAreaView,
	StyleSheet,
    Text,
    View
} from 'react-native';

function InfoPage({ navigation: { navigate } }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text>Info Page</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 65,
        backgroundColor: 'peru',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default InfoPage;