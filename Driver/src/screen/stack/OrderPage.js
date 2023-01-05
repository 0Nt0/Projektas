import React, {
    useState,
    useEffect
} from 'react';

import {
    View,
    Text,
    FlatList,
    StyleSheet,
    SafeAreaView
} from 'react-native';

import {
    ref,
    onValue
} from 'firebase/database';

import {
    database
} from '../../config';

function OrderPage({ navigation: { navigate } }) {
    const [driverOrders, setDriverOrders] = useState([]);
    const driverOrderReference = ref(database, '/DriversOrders');

    useEffect(() => {
        onValue(driverOrderReference, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                const childData = childSnapshot.val();

                const driverOrder = {
                    id: childKey,
                    driver: childData.driver,
                    usersOrderId: childData.usersOrderId
                };

                setDriverOrders(emptyArray => [...emptyArray, driverOrder]);
            })
        })
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Order Page</Text>
            </View>

            <FlatList
                style={styles.list}
                data={driverOrders}
                renderItem={(item) => {
                    return (
                        <View style={styles.row} onPress={() => navigate('Info')} >
                            <Text style={styles.rowTitle}>Order Id: {item.item.usersOrderId}</Text>
                        </View>
                    )
                }}
                keyExtractor={item => item.id}
                scrollEnabled={true}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'slategray'
    },

    headerText: {
        fontSize: 22,
        fontWeight: 'bold'
    },

    list: {
        padding: 15
    },

    row: {
        padding: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 15,
        marginBottom: 5,
        backgroundColor: '#ffffff'
    },

    rowTitle: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15
    }
});

export default OrderPage;