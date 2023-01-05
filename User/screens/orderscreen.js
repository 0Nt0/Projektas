import { StyleSheet, TouchableOpacity, View, Text, TextInput, KeyboardAvoidingView, Linking, Alert } from "react-native";
import {ref, set, get, child, onValue} from "firebase/database";
import React, { useState } from "react";
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import { db } from "../config";
import { auth } from "../config";



export default function OrderAd({ route, navigation}) {
    //const [isActiveState, setIsActiveState] = useState(false);
    const [userCity, setUserCity] = useState('');
    const [userStreet, setStreet] = useState('');
    const [userHouse, setHouse] = useState('');
    const [userCode, setUserCode] = useState('');
    const [purchaseID, setPurchaceID] = useState(uuidv4());
    

    sendOrder = () => {
       
       set(ref(db, 'OrderInfo/'+purchaseID), {
            userCity: userCity,
            userStreet: userStreet,
            userHouse: userHouse,
            userCode: userCode,
            id: purchaseID,
            user: auth.currentUser.email
        }).then(()=> {
            alert("Data is in!")
        });
        
        setUserCity('');
        setStreet('');
        setHouse('');
        setUserCode('');
        setPurchaceID('');
    }    

    return(
        <KeyboardAvoidingView style={styles.container}>
            
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Miestas"
                        value={userCity}
                        onChangeText={text => setUserCity(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Gatve:"
                        value={userStreet}
                        onChangeText={text => setStreet(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Namo numeris:"
                        value={userHouse}
                        onChangeText={text => setHouse(text)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Pasto kodas:"
                        value={userCode}
                        onChangeText={text => setUserCode(text)}
                        
                    />

                </View>

            
                <TouchableOpacity
                style={styles.button}
                onPress={sendOrder}
                >
                <Text>Irasyti</Text>

                </TouchableOpacity>
                <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
                >
                <Text>Back</Text>

                </TouchableOpacity>
        </KeyboardAvoidingView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: '60%',
        fontSize: 14,
        color: "red",
        backgroundColor: "white",
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginTop: 20,
        
    },
    button: {
        backgroundColor: 'blue',
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
});