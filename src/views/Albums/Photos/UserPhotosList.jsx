import React from 'react';
import { View, FlatList } from 'react-native'
import UserPhoto from './UserPhoto';

const UserPhotosList = (props) => {
    return (
        <View>
            <FlatList data={props.photos}
            numColumns={2}
            renderItem={({item}) => <UserPhoto item={item} loading={props.loading}></UserPhoto>}
            keyExtractor={(item) => item.id}></FlatList>
        </View>
    );
}

export default UserPhotosList;