import * as React from 'react';
import UserDetails from './src/views/Details/UserDetails'
import UsersList from './src/views/Home/UsersList'
import UserPosts from './src/views/Posts/UserPosts';
import UserAlbums from './src/views/Albums/UserAlbums';
import UserComments from './src/views/Posts/Comments/UserComments';
import UserPhotos from './src/views/Albums/Photos/UserPhotos';
import { StateProvider } from './src/context/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const PostsInterface = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserPosts" component={UserPosts} options={{ title: "Posts" }} />
      <Stack.Screen name="UserComments" component={UserComments} options={{ title: "Comments" }} />
    </Stack.Navigator>
  );
}

const AlbumsInterface = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserAlbums" component={UserAlbums} options={{ title: "Albums" }} />
      <Stack.Screen name="UserPhotos" component={UserPhotos} options={{ title: "Photos" }} />
    </Stack.Navigator>
  );
}

const UsersInterface = ({ route }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="UserDetails" component={UserDetails} options={{ tabBarLabel: "Détails", tabBarIcon: ({ color, size }) => (<Ionicons name="md-home" color={color} size={size} />), tabBarOptions: { showIcon: true, activeTintColor: '#e91e63' }}}/>
      <Tab.Screen name="PostsInterface" component={PostsInterface} options={{ title: "Posts", headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="md-home" color={color} size={size} />), tabBarOptions: { showIcon: true, activeTintColor: '#e91e63' }}} />
      <Tab.Screen name="AlbumsInterface" component={AlbumsInterface} options={{ title: "Albums", headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="md-home" color={color} size={size} />), tabBarOptions: { showIcon: true, activeTintColor: '#e91e63' }}} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <StateProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="UsersList" component={UsersList} options={() => ({ title: "Liste des utilisateurs" })} />
          <Stack.Screen name="UserInterface" component={UsersInterface} options={() => ({ headerShown: false })} />
        </Stack.Navigator>
      </NavigationContainer>
    </StateProvider>

  );
}
