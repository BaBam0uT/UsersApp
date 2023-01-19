import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, Modal, StyleSheet, TextInput, View, Button} from 'react-native';
import {UserContext} from '../../context/UserContext';

const styles = StyleSheet.create({
  form: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 50,
  },
  textInput: {
    backgroundColor: 'lightgrey',
    width: 350,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  field: {
    margin: 15,
  },
});

const UserModal = props => {
  const {dispatch} = React.useContext(UserContext);
  const {state} = React.useContext(UserContext);
  const [name, setName] = useState(state.user.name);
  const [email, setEmail] = useState(state.user.email);
  const [street, setStreet] = useState(state.user.address?.street);
  const [company, setCompany] = useState(state.user.company?.name);

  async function putData() {
    const requestOptions = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: name,
        email: email,
        address: street,
        company: company,
      }),
    };
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${state.id}`,
      requestOptions,
    )
      .then(async response => {
        const res = await response.json();
        dispatch({
            type: 'SET_USER',
            payload: {
              ...state.user,
              name: res?.name,
              email: res?.email,
              address: {street: res?.address},
              company: {name: res?.company},
            },
          })
      })
    props.setIsVisible(false);
  }

  return (
    <Modal
      animationType="slide"
      visible={props.isVisible}
      onRequestClose={() => {
        props.setIsVisible(false);
      }}>
      <View style={styles.form}>
        <View style={styles.field}>
          <Text>Nom: </Text>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={v => setName(v)}></TextInput>
        </View>
        <View style={styles.field}>
          <Text>Email: </Text>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={v => setEmail(v)}></TextInput>
        </View>
        <View style={styles.field}>
          <Text>Rue: </Text>
          <TextInput
            style={styles.textInput}
            value={street}
            onChangeText={v => setStreet(v)}></TextInput>
        </View>
        <View style={styles.field}>
          <Text>Entreprise: </Text>
          <TextInput
            style={styles.textInput}
            value={company}
            onChangeText={v => setCompany(v)}></TextInput>
        </View>
        <View style={styles.field}>
          <Button title="Submit" onPress={() => putData()}></Button>
        </View>
      </View>
    </Modal>
  );
};

export default UserModal;
