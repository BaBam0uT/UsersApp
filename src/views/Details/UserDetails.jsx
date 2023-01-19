import React, {useContext, useEffect, useState} from 'react';
import UserInfo from './UserInfo';
import {View, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import {UserContext} from '../../context/UserContext';
import UserModal from './UserModal';

const UserDetails = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const {dispatch} = React.useContext(UserContext);
  const {state} = React.useContext(UserContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handlerSearchUser = async id => {
      try {
        setLoading(true);
        const responseUser = await fetch(
          'https://jsonplaceholder.typicode.com/users/' + id,
        );
        const resultsUser = await responseUser.json();
        dispatch({type: 'SET_USER', payload: resultsUser});
        navigation.setOptions({title: resultsUser.name});
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    handlerSearchUser(state.id);
  }, [state.id]);

  return (
    <>
      <View style={{left: 300, margin: 20, position: 'absolute'}}>
        <TouchableOpacity
          style={{width: 100, height: 100, alignItems: 'center'}}
          hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
          onPress={() => navigation.goBack()}>
          <Image
            style={{width: 30, height: 30, right: 50}}
            source={require('UsersApp/assets/img/close.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={{width: 100, height: 100, alignItems: 'center'}}
          hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
          onPress={() => setIsVisible(true)}>
          <Image
            style={{width: 30, height: 30, right: 50}}
            source={require('UsersApp/assets/img/change.png')}></Image>
        </TouchableOpacity>
      </View>
      {loading ? (
        <ActivityIndicator color="#6BA294" />
      ) : (
        <View>
          <UserInfo content={state.user}></UserInfo>
          <UserModal
            isVisible={isVisible}
            setIsVisible={setIsVisible}></UserModal>
        </View>
      )}
    </>
  );
};

export default UserDetails;
