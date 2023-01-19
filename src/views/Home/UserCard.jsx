import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {UserContext} from '../../context/UserContext';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#6BA294',
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    margin: 10,
    fontSize: 20,
  },
  body: {
    color: 'white',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
});

const UserCard = props => {
  const navigation = useNavigation();
  const {state} = React.useContext(UserContext);
  const {dispatch} = React.useContext(UserContext);
  return (
    <View>
      {props.loading ? (
        <ActivityIndicator color="#6BA294" />
      ) : (
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            dispatch({type: 'SET_ID', payload: props.item.id});
            navigation.navigate('UserInterface', {id: state.id});
          }}>
          <Text style={styles.title}>{props.item.name}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UserCard;
