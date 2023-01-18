import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    comment: {
        backgroundColor: "#8A882C",
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

const UserComment = (props) => {
    navigation = useNavigation();
    return (
        <View>
            {props.loading ?
                <ActivityIndicator color="#8A882C"/>
            :
            <View style={styles.comment}>
                <Text style={styles.title}>{props.item.name.toUpperCase()}</Text>
                <Text style={styles.body}>{props.item.email}</Text>
                <Text style={styles.body}>{props.item.body}</Text>
            </View>
            }

        </View>
    );
}

export default UserComment;