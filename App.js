import * as React from 'react';
import UserDetails from './src/views/Details/UserDetails'
import UsersList from './src/views/Home/UsersList'
import UserPosts from './src/views/Posts/UserPosts';
import UserAlbums from './src/views/Albums/UserAlbums';
import UserComments from './src/views/Posts/Comments/UserComments';
import UserPhotos from './src/views/Albums/Photos/UserPhotos';
import UserContext from './src/context/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const PostsInterface = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="UserPosts" component={UserPosts} options={{title : "Posts"}}/>
        <Stack.Screen name="UserComments" component={UserComments} options={{title : "Comments"}}/>
      </Stack.Navigator>
  );
}

const AlbumsInterface = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="UserAlbums" component={UserAlbums} options={{title : "Albums"}}/>
        <Stack.Screen name="UserPhotos" component={UserPhotos} options={{title : "Photos"}}/>
      </Stack.Navigator>
  );
}

const UsersInterface = ({ route }) => {
  return (
    <UserContext.Provider value={{ id: route?.params?.id || null }}>
      <Tab.Navigator>
        <Tab.Screen name="UserDetails" component={UserDetails}/>
        <Tab.Screen name="PostsInterface" component={PostsInterface} options={{title : "Posts", headerShown: false}}/>
        <Tab.Screen name="AlbumsInterface" component={AlbumsInterface} options={{title : "Albums", headerShown: false}}/>
      </Tab.Navigator>
    </UserContext.Provider >
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UsersList" component={UsersList} options={() => ({ title: "Liste des utilisateurs" })} />
        <Stack.Screen name="UserInterface" component={UsersInterface} options={() => ({ headerShown: false })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
