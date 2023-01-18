import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    post: {
        backgroundColor: "#6BA294",
        margin: 10,
        borderRadius: 10
    },
    title: {
        color: "white",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        fontSize: 18},
    body: {
        color: "white",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    }
});

const UserPost = (props) => {
    navigation = useNavigation();
    return (
        <View>
            {props.loading ?
                <ActivityIndicator color="#6BA294"/>
            :
            <TouchableOpacity style={styles.post} onPress={() => navigation.navigate("UserComments", {id: props.item.id})}>
                <Text style={styles.title}>{props.item.title.toUpperCase()}</Text>
                <Text style={styles.body}>{props.item.body}</Text>
            </TouchableOpacity>
            }

        </View>
    );
}

export default UserPost;