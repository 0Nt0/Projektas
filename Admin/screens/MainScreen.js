import { Alert, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Animated } from "react-native";
import { useEffect, useState,useRef } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from "react";
import MaskedView from '@react-native-masked-view/masked-view';
import {auth} from '../config';

import {signInWithEmailAndPassword} from "firebase/auth";



export default function MaintScreen({navigation}) {



    
    return(
    <SafeAreaView style={styles.ViewStyle}>
            

            
    


     </SafeAreaView>
     
           
               


    
    )


};
const styles = StyleSheet.create({
    ViewStyle:{
        flex: 1,
        backgroundColor: '#fff',
    },
    InputStileView:{
        height:'30%',
        width:'90%',
        marginTop:'30%',
        marginLeft:'10%'
    },
   
    

 });