import * as React from 'react';
import UsersInterface from './src/views/UsersInterface'
import UsersList from './src/views/UsersList'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UsersList" component={UsersList} options={() => ({ title: "Liste des utilisateurs" })}/>
        <Stack.Screen name="UsersInterface" component={UsersInterface}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
