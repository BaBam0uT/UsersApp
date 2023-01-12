import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    post: {
        backgroundColor: "#6BA294",
        margin: 10,
        borderRadius: 10,
        alignItems: "center"
    },
    title: {
        color: "white",
        margin: 10,
        fontSize: 20},
    body: {
        color: "white",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    }
});

const UserCard = (props) => {
    const navigation = useNavigation();

    return (
        <View>
            {props.loading ?
                <ActivityIndicator color="#6BA294"/>
            :
            <TouchableOpacity style={styles.post} onPress={() => navigation.navigate("UsersInterface", { id: props.item.id})}>
                <Text style={styles.title}>{props.item.name}</Text>
            </TouchableOpacity>
            }

        </View>
    );
}

export default UserCard;