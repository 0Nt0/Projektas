import React from 'react';

import {
    SafeAreaView,
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

export default InfoPage;