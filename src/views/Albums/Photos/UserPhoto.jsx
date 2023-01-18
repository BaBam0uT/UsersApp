import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    body: {
        width: 200,
        height: 200
    }
});

const UserPhoto = (props) => {
    navigation = useNavigation();
    return (
        <View>
            {props.loading ?
                <ActivityIndicator color="#C02823"/>
            :
            <View>
                <Image style={styles.body} source={{uri: props.item.url}}></Image>
            </View>
            }

        </View>
    );
}

export default UserPhoto;