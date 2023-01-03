import { Alert, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import {firebase} from '../config'
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
//import firestore from 'firebase/firestore';


export default function LoginScreen({navigation}) {

    const auth = getAuth();

    const ref= firebase.firestore().collection('users');

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log(email);
    console.log(password);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            console.log(user)
            if (user) {
                navigation.navigate("AdScreen")
            }
        })
        return unsubscribe
    }, [])

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                const data={
                    email:email,
                    password:password,
                    id:auth.currentUser.uid
                };
                ref.add(data).then(()=> {

                }).catch((error)=>{alert(error)})
            })
            .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with:' , user.email);
        })
        .catch(error => alert(error.message))
    }

    return(
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="E-mail"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />
            </View>
           <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
            >
                <Text>Login</Text>

            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={handleSignUp}
            >
                <Text>Register</Text>

            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

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
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonContainer: {

    }
});