import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react'; // Removed useEffect since it's not used
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function CreateUserScreen({ navigation  }){

      const [login, setLogin] = useState('');
      const [senha, setSenha] = useState('');
      const [nome, setNome] = useState('');
      const [confirmasenha, setConfirmasenha] = useState('');


    const cadastrar = async () => {
        try {
          
          const valor = {
            'login': login,
            'senha': senha,
            'nome': nome,
            'confirmasenha': confirmasenha
          }

        const jsonValue = JSON.stringify(valor);
        await AsyncStorage.setItem(login, jsonValue)
        alert("Usuario cadastrado!")
        navigation.navigate('Usuarios')
      }  catch (e) {
        console.log(e)
      }
    }

    return (
        <View style={styles.container}>
          <TextInput
            secureTextEntry={false} // Login field is usually not obscured
            style={styles.input}
            placeholder={"nome"}
            value={nome}
            onChangeText={setNome} // Simplified syntax
          />
          <TextInput
            secureTextEntry={false} // Login field is usually not obscured
            style={styles.input}
            placeholder={"login"}
            value={login}
            onChangeText={setLogin} // Simplified syntax
          />
          <TextInput
            secureTextEntry={true} // Password field is obscured
            style={styles.input}
            placeholder={"senha"}
            value={senha}
            onChangeText={setSenha} // Simplified syntax
          />
          <TextInput
            secureTextEntry={true} // Password field is obscured
            style={styles.input}
            placeholder={"confirmar senha"}
            value={confirmasenha}
            onChangeText={setConfirmasenha} // Simplified syntax
          />
          <Button
            title="Cadastrar"
            onPress={cadastrar} // Calls the navigation functio
          />
        </View>
      );
    }

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      padding: 20
  },
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#000000ff',
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
    padding: 10
  },
  text: {
    backgroundColor: '#fff'
  }
});