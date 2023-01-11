import React from 'react';
import { Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    text: {
        color: 'black'
    }
});

const UserInfo = (props) => {
    return (
        <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 20, color: "black"}}>Utilisateur</Text>
            {props.content?.id ?
                <View style= {{ margin: 10 }}>
                    <Text style={styles.text}>ID : {props.content.id}</Text>
                    <Text style={styles.text}>Nom : {props.content.name}</Text>
                    <Text style={styles.text}>Email : {props.content.email}</Text>
                    <Text style={styles.text}>Rue : {props.content.address.street}</Text>
                    <Text style={styles.text}>Entreprise : {props.content.company.name}</Text>
                </View>
            :
                <Text>Aucun utilisateur trouvé</Text>
            }

        </View>
    );
}

export default UserInfo;