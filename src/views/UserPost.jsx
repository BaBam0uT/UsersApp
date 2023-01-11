import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'

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
    return (
        <View>
            {props.loading ?
                <ActivityIndicator color="#6BA294"/>
            :
            <View style={styles.post}>
                <Text style={styles.title}>{props.item.title.toUpperCase()}</Text>
                <Text style={styles.body}>{props.item.body}</Text>
            </View>
            }

        </View>
    );
}

export default UserPost;