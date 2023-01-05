import { Alert, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Animated, FlatList } from "react-native";
import { useEffect, useState,useRef } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from "react";
import MaskedView from '@react-native-masked-view/masked-view';
import {auth} from '../config';
import { getAuth } from "firebase/auth";
import {ref, set, get, child, onValue} from "firebase/database";
import { useRoute } from "@react-navigation/native";
import { db } from "../config";



export default function MaintScreen({navigation}) {

    const auth = getAuth();

    const route = useRoute();
    const [ad, setAd] = useState([]);

    const reference = ref(db, 'OrderInfo/');
    


    useEffect(() => {
        onValue(reference, (snapshot) => {
                setAd([]);
                snapshot.forEach((element) => {
                    const readObj = {
                        description: element.val().description,
                        id: element.val().id,
                        userCity: element.val().userCity,
                        userCode: element.val().userCode,
                        userHouse: element.val().userHouse,
                        userStreet:element.val().userStreet,
                        user:element.val().user
                    };
                    setAd(emptyArray => [...emptyArray, readObj]);
                })
                console.log(JSON.stringify(ad));
            })
    }, []);

    return(
        <SafeAreaView style={styles.ViewStyle}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={ad}
                renderItem={({item}) => (
                    <View style={styles.listStyle}>
                            <Text>id= {item.id}</Text>
                            <Text style={{color:'#FF4B25'}}>_______________________________________</Text>
                            <Text>City= {item.userCity}</Text>
                            <Text>Postal code= {item.userCode} </Text>
                            <Text>House code= {item.userHouse}</Text>
                            <Text>Street= {item.userStreet}</Text>
                            <Text>User= {item.user}</Text>
                    </View>
  


                )}/>

        </SafeAreaView >
    )


};
const styles = StyleSheet.create({
    ViewStyle:{
        flex: 1,
        backgroundColor: '#fff',
        alignContent:'center',
        alignItems:'center'
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
        height:'90%',
        width: 300,
        borderWidth:5,
        borderColor:'#FF4B25',
        backgroundColor: '#ffffff',    
        margin:12
        },
    

 });