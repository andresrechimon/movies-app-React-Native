/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {ImageBackground, Button, TextInput, StyleSheet} from 'react-native';

const Login = ({navigation}) => {
  const [inputU, setInputU] = useState();
  const [inputP, setInputP] = useState();

  const login = () => {
    if (inputU === 'arechimon' && inputP === '123456') {
      navigation.navigate('List');
      setInputU('');
      setInputP('');
    } else {
      setInputU('');
      setInputP('');
    }
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/theater.jpg')}>
      <TextInput
        style={styles.inputU}
        placeholder="Usuario"
        onChangeText={setInputU}
        value={inputU}
      />
      <TextInput
        style={styles.inputP}
        placeholder="Contraseña"
        secureTextEntry={true}
        onChangeText={setInputP}
        value={inputP}
      />
      <Button
        style={styles.buttonL}
        title="Entrar"
        color="#841584"
        onPress={login}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  inputU: {
    marginTop: 150,
    height: 50,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    textAlign: 'center',
    backgroundColor: 'white',
  },
  inputP: {
    marginTop: 12,
    height: 50,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    textAlign: 'center',
    backgroundColor: 'white',
  },
});

export default Login;
