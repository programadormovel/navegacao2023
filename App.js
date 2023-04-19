import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, 
  TouchableOpacity, TextInput, Alert } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

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

const Formulario = () => {
  // estado
  const [nome, setNome] = useState('nome');
  const [sobrenome, setSobrenome] = useState('sobrenome');
  const [clicou, setClicou] = useState(false)

  useEffect(()=>{
    setNome()
  }, [clicou])

  return (
    <View style={styles.container}>
      <TextInput style={styles.caixa}
        placeholder='nome'
      />
      <TextInput style={styles.caixa}
        placeholder='sobrenome'
      />
      <TouchableOpacity 
        onPress={()=>{setClicou(true)}}
        style={styles.botao}
        >
        <Text>CADASTRAR</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {borderRadius:16, 
    borderWidth:1, borderColor:'blue', 
    padding: 16, margin: 20, 
    backgroundColor:'yellow'
  },
  caixa: {borderRadius:16, 
    borderWidth:1, borderColor:'blue', 
    padding: 16, margin: 20,
    minWidth: 200, maxWidth: 300
  }
});
