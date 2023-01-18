import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    album: {
        backgroundColor: "#C02823",
        margin: 10,
        borderRadius: 10
    },
    title: {
        color: "white",
        margin: 10,
        fontSize: 18
    }
});

const UserAlbum = (props) => {
    navigation = useNavigation();
    return (
        <View>
            {props.loading ?
                <ActivityIndicator color="#C02823"/>
            :
            <TouchableOpacity style={styles.album} onPress={() => navigation.navigate("UserPhotos", {id: props.item.id})}>
                <Text style={styles.title}>{props.item.title.toUpperCase()}</Text>
            </TouchableOpacity>
            }

        </View>
    );
}

export default UserAlbum;