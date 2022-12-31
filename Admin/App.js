import { StatusBar } from 'expo-status-bar';
import { useEffect, useState,useRef } from "react";
import { StyleSheet, Text, View, Animated  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import LogInScreen from './screens/LogInScreen';
import MainScreen from './screens/MainScreen'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabScreens() {
  const animationStart=useRef(new Animated.Value(0)).current
  useEffect(()=>{
      animationStart.setValue(1);
        },[]);
        const SpringAnimation=(x)=>{
          x.setValue(0.4)
          Animated.spring(x,{
            toValue:1,
            bounciness:24,
            speed:20,
            useNativeDriver:true
          }).start();
        };
  return (
    <Tab.Navigator >
      <Tab.Screen name="main" 
                  component={MainScreen}
                  options={{headerShown:false, 
                            tabBarShowLabel:false,
                            tabBarIcon:({focused,size})=>(
                              <Animated.View style={{transform:[{scale:animationStart}]}}>
                              <Ionicons name={focused?  "home":"home-outline"} color='#FF4B25' size={size} onPress={()=>SpringAnimation(animationStart)}></Ionicons>
                              </Animated.View>
                            )}}/>
        
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
                    name="login"
                    component={LogInScreen}
                    options={{headerShown:false}}/>
      <Stack.Screen 
                    name="main"
                    component={TabScreens}
                    options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
