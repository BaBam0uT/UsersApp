import React from 'react';
import { View, FlatList } from 'react-native'
import UserPost from './UserPost';

const UserPostsList = (props) => {
    return (
        <View>
            <FlatList data={props.posts}
            renderItem={({item}) => <UserPost item={item} loading={props.loading}></UserPost>}
            keyExtractor={(item) => item.id}></FlatList>
        </View>
    );
}

export default UserPostsList;