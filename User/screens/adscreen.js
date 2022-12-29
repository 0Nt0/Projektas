import { StyleSheet, TouchableOpacity, View, Text, KeyboardAvoidingView } from "react-native";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { FlatList } from "react-native";
import {ref, set, get, child, onValue} from "firebase/database";
import { useRoute } from "@react-navigation/native";

import { db } from "../config";


export default function AdScreen({navigation}) {
    const auth = getAuth();

    const route = useRoute();
    const [ad, setAd] = useState([]);

    const reference = ref(db, 'TestInfo/');
    
    const handleSignOut = () => {
        auth.signOut()
        .then(() =>{
            navigation.navigate("Login")
        })
        .catch(error => alert(error.message))
    }

    useEffect(() => {
        onValue(reference, (snapshot) => {
                setAd([]);
                snapshot.forEach((element) => {
                    const readObj = {
                        description: element.val().description,
                        id: element.val().id,
                        name: element.val().name,
                        price: element.val().price,
                    };
                    setAd(emptyArray => [...emptyArray, readObj]);
                })
                console.log(JSON.stringify(ad));
            })
    }, []);

    return(
        <KeyboardAvoidingView style={styles.container}>
            <Text>E-mail: {auth.currentUser?.email}</Text>

            <FlatList
                keyExtractor={(item) => item.id}
                data={ad}
                renderItem={({item}) => (
                    <View style={styles.listStyle}>
                            <Text>{item.id}</Text>
                            <Text>{item.name}, {item.price} </Text>
                            <Text>{item.description}</Text>
                                <TouchableOpacity
                                style={styles.button}
                                onPress={ () => {navigation.navigate("OrderScreen", item.id)} }
                                >
                                    <Text>Pirkti</Text>
                                </TouchableOpacity>
                    </View>
  


                )}/>

            <TouchableOpacity 
            onPress={handleSignOut}
            styles={styles.button}>
                <Text>Sign Out</Text>
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
    text: {
        color: 'blue',
        fontSize: 20,
        fontWeight: 'bold',
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
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
    listStyle: {
        height:100,
        width: 300,
        borderWidth:5,
        borderColor:'black',
        backgroundColor: 'red',    
        margin:12
        },
});