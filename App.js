import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, 
  TouchableOpacity, TextInput, Alert } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Formulario from './src/login/Formulario';
import styles from './Estilo';

const Stack = createNativeStackNavigator();

// Janela 1
const Janela1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>PRIMEIRA JANELA</Text>
      <TouchableOpacity 
        onPress={()=>{navigation.navigate('Janela2')}}
        style={styles.botao}
        >
        <Text>TROCAR DE JANELA</Text>
      </TouchableOpacity>
    </View>
  )
}
// Janela 2
const Janela2 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Segunda Janela</Text>
      <TouchableOpacity 
        onPress={()=>{navigation.navigate('Formulario')}}
        style={styles.botao}
        >
        <Text>ACESSAR FORMULÁRIO</Text>
      </TouchableOpacity>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Janela1'>
        <Stack.Screen name="Janela1" component={Janela1}
          options={{title:"Primeira Janela", 
            headerTintColor:'#ff00ff55',
            statusBarColor:'blue', 
            navigationBarColor:'green'}} />
        <Stack.Screen name="Janela2" component={Janela2} />
        <Stack.Screen name="Formulario" component={Formulario} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


