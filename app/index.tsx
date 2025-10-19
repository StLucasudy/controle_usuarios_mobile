import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AcessoScreen from "./screens/AcessoScreen";
import CreateUserScreen from "./screens/CreateUserScreen";
import UsuariosScreen from "./screens/UsuariosScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
      <Stack.Navigator initialRouteName="Acesso">
        <Stack.Screen name="Acesso" component={AcessoScreen} />
        <Stack.Screen name="Cadastro" component={CreateUserScreen} />
        <Stack.Screen name="Usuarios" component={UsuariosScreen} />
      </Stack.Navigator>
    
  );
}
