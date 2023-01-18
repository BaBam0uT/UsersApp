import React from 'react';
import { Text, View, FlatList } from 'react-native'
import UserAlbum from './UserAlbum';

const UserAlbumsList = (props) => {
    return (
        <View>
            <FlatList data={props.albums}
            renderItem={({item}) => <UserAlbum item={item} loading={props.loading}></UserAlbum>}
            keyExtractor={(item) => item.id}></FlatList>
        </View>
    );
}

export default UserAlbumsList;