import { Alert, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from "react";
import MaskedView from '@react-native-masked-view/masked-view';

export default function LoginScreen({navigation}) {


    return(
    <SafeAreaView style={styles.ViewStyle}>
            <MaskedView maskElement={<Text style={[styles.LogInText,{backgroundColor:'transparent'}]}>
                     LOG IN
                 </Text>}>
              <LinearGradient
                start={{x:0,y:0}}
                end={{x:1,y:1}}
                colors={['#FF4B25','#FFFB01']}>
                 <Text style={[styles.LogInText,{opacity:0}]}>
                     LOG IN
                 </Text>
              </LinearGradient>
            </MaskedView>

            
            <View style={styles.InputStileView}>
            <View style={{marginLeft:'35%'}}>
                <Text style={{fontSize:15, color:'#FF4B25'}}>
                    Admin
                </Text>
            </View>
             <View style={styles.InputStyle}>
            <TextInput
                    placeholder="Email"
                    
                />
            </View >
            <View style={styles.InputStyle}>
            <TextInput
                    placeholder="Password"
                    secureTextEntry
                />
            </View>
            </View>

            <View style={styles.ButtonStyle}>
            <MaskedView  maskElement={<Text style={[{backgroundColor:'transparent', marginLeft:'25%',fontSize:20}]}>
                     LOG IN
                 </Text>}>
              <LinearGradient
                start={{x:0,y:0}}
                end={{x:1,y:1}}
                colors={['#FF4B25','#FFFB01']}>
                 <Text style={[{opacity:0, marginBottom:10 }]}>
                     LOG IN
                 </Text>
              </LinearGradient>
            </MaskedView>
            </View>


     </SafeAreaView>
     
           
               


    
    )


};
const styles = StyleSheet.create({
    ViewStyle:{
        flex: 1,
        backgroundColor: '#fff',
    },
    LogInText:{
        fontSize:50,
        marginTop:5,
        marginLeft:5,
        fontWeight: 'bold'
    },
    InputStileView:{
        height:'30%',
        width:'90%',
        marginTop:'30%',
        marginLeft:'10%'
    },
    InputStyle:{
        height:'30%',
        width:'90%',
        borderWidth:5,
        borderColor:'#CACACA',
        backgroundColor: '#ffffff',
        borderRadius:30,
        margin:5,
        alignContent:'center',
        textAlign:'center',
        justifyContent: 'center',
    },
    ButtonStyle:{
    height:'9%',
    width:'40%',
    borderWidth:5,
    backgroundColor: '#ffffff',
    borderColor:'#FF4B25',
    borderRadius:30,
    alignContent:'center',
    textAlign:'center',
    justifyContent: 'center',
    marginLeft:'30%'
    }
    

 });