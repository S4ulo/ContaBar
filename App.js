{/*Calculadora de Gorjeta: Faça uma calculadora de gorjeta que permita aos usuários inserir o valor da conta e a porcentagem 
de gorjeta desejada, exibindo o valor total a ser pago. */}

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

export default function App() {
  const [consumo, setConsumo] = useState('');
  const [porcento, setPorcento] = useState('');
  const [totalConta, setTotalConta] = useState('');

  function Calcular() {
    if (consumo && porcento) {
      const consumoDigitado = parseFloat(consumo);
      const porcentoDigitado = parseFloat(porcento);

      const gorjeta = (porcentoDigitado / 100) * consumoDigitado;
      const total = consumoDigitado + gorjeta;

      setTotalConta(`Total a pagar: R$ ${total.toFixed(2)}`);
    } else {
      setTotalConta('Insira valores válidos.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de Gorjeta</Text>

      <View style={styles.calculadora}>
        <TouchableOpacity onPress={Calcular}>
          <Image
            source={require('./dinheiro.png')}
            style={styles.calculadoraBotao}
          />
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.inputConta}
        placeholder='Valor da Conta'
        value={consumo}
        onChangeText={(text) => setConsumo(text)}
      />

      <TextInput
        style={styles.inputConta}
        placeholder='Porcentagem de Gorjeta'
        value={porcento}
        onChangeText={(text) => setPorcento(text)}
      />

      <Text style={styles.resultado}>{totalConta}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAA520',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  calculadora: {
    width: 100,
    height: 100,
  },
  calculadoraBotao: {
    width: 100,
    height: 100,
  },
  inputConta: {
    width: 150,
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    fontSize: 10,
  },
  resultado: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
