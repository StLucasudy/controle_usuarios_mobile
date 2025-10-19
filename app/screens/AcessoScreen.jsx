import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react'; // Removed useEffect since it's not used
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function AcessoScreen({ navigation }) {

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
  const salvarUsuarioPadrao = async () => {
    const value = {
      nome: 'Ramon sosa',
      login: 'sosaRamon',
      senha: '1234',
      confirmasenha: '1234'
    };
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(value.login, jsonValue);
  };

  salvarUsuarioPadrao();
}, []);

  const execLogin = async () => {
    const valueL = await AsyncStorage.getItem(login)

    if (valueL !== null) {
      const jValue = JSON.parse(valueL)
      if (jValue.login === login && jValue.senha === senha) {
        console.log("--------------------------Login efetuado")
        navigation.navigate('Usuarios')
      } else {
        console.log("--------------------------Login incorreto")
      }
    } else {
      console.log('usuario não localizado')
    }
  }

  return (
    <View style={styles.container}>

      <TextInput
        secureTextEntry={false}
        style={styles.input}
        placeholder={"login"}
        value={login}
        onChangeText={setLogin}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder={"senha"}
        value={senha}
        onChangeText={setSenha}
      />
      <Button
        title="Entrar"
        onPress={execLogin}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000ff',
    padding: 20
  },
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#888888ff',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  topBarText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: 450,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#ffffffff',
  }
});