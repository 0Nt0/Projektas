import React, { useEffect } from 'react';

import {
    SafeAreaView,
	StyleSheet,
    Text,
    View
} from 'react-native';

import {
    ref,
    onValue
} from 'firebase/database';

import {
    db
} from '../../config';

function InfoPage({ navigation: { navigate } }, { route }) {
    const [id, setId] = useState("");
    const [user, setUser] = useState("");
    const [userCity, setUserCity] = useState("");
    const [userCode, setUserCode] = useState("");
    const [userHouse, setUserHouse] = useState("");
    const [userStreet, setUserStreet] = useState("");
    const [itemId, setItemId] = useState("");

    const order = route.params;

    const reference = ref(db, '/OrderInfo/' + order.usersOrderId);

    useEffect(() => {
        onValue(reference, (snapshot) => {
            const key = snapshot.key;
            const data = snapshot.val();

            setId(key);
            setUser(data.user);
            setUserCity(data.userCity);
            setUserCode(data.userCode);
            setUserHouse(data.userHouse);
            setUserStreet(data.userStreet);
            setItemId(data.itemID);
        })
    });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text>Info Page</Text>
            </View>
            <View>
                <Text>{id}</Text>
                <Text>{user}</Text>
                <Text>{userCity}</Text>
                <Text>{userCode}</Text>
                <Text>{userHouse}</Text>
                <Text>{userStreet}</Text>
                <Text>{itemId}</Text>
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