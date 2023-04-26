import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, 
    ScrollView, TouchableOpacity} from 'react-native'
import styles from '../../Estilo';
import Entrada from '../componentes/Entrada';

const Formulario = () => {
    // estado
    const [nome, setNome] = useState('nome');
    const [sobrenome, setSobrenome] = useState('sobrenome');
    const [clicou, setClicou] = useState(false)
  
    useEffect(()=>{
      setNome()
    }, [clicou])
  
    return (
    <ScrollView>
      <View style={styles.container}>
        
        <Entrada tipo="nome" cor='red' />
        <Entrada tipo="email" cor='blue' />
        <Entrada tipo="idade" cor='red' />

        <TouchableOpacity 
          onPress={()=>{setClicou(true)}}
          style={styles.botao}
          >
          <Text>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    )
  }
  
  export default Formulario;