import React, {useContext, useEffect, useState} from 'react';
import UserInfo from './UserInfo';
import {
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import UserContext from '../../context/UserContext';

const UserDetails = ({navigation}) => {
  const [content, setContent] = useState();
  const [loading, setLoading] = useState(false);
  const id = useContext(UserContext); 

  useEffect(() => {
    const handlerSearchUser = async id => {
      try {
        setLoading(true);
        const responseUser = await fetch(
          'https://jsonplaceholder.typicode.com/users/' + id,
        );
        const resultsUser = await responseUser.json();
        setContent(resultsUser);
        navigation.setOptions({title: resultsUser.name});
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    handlerSearchUser(id.id);
  }, []);

  return (
    <>
      <View style={{left: 300, margin: 20, position: 'absolute'}}>
        <TouchableOpacity style={{ width: 50, height: 50 }} onPress={() => navigation.goBack()}>
          <Image style={{width: 30, height: 30}}source={require('UsersApp/assets/img/close.png')}></Image>
        </TouchableOpacity>
      </View>
      {loading ? (
        <ActivityIndicator color="#6BA294" />
      ) : (
        <UserInfo content={content}></UserInfo>
      )}
    </>
  );
};

export default UserDetails;
