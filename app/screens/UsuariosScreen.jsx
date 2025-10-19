import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const DATA = [];

const Item = ({ nome, login }) => (

  <View style={styles.item}>
    <Text style={styles.title}>{nome}</Text>
    <Text style={styles.title}>{login}</Text>
  </View>
);


const carregarValores = async () => {
  let keys = []

  keys = await AsyncStorage.getAllKeys()

  keys.forEach(async (user) => {
    const userP = JSON.parse(await AsyncStorage.getItem(user))
    DATA.push(userP)
  })
}


export default function UsuariosScreen({ navigation }) {
  carregarValores();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item nome={item.nome} login={item.login} />}
          keyExtractor={item => item.login}
        />

        <Button
          title="cadastrar novo usuario"
          onPress={() => navigation.navigate('Cadastro')}
        />
        <Button
          title="Home"
          onPress={() => navigation.navigate('Acesso')}
        />
      </SafeAreaView>
    </SafeAreaProvider>
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
  text: {
    backgroundColor: '#000000ff',
    color: '#ffffffff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
    padding: 10
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
  item: {
    backgroundColor: '#cececeff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});