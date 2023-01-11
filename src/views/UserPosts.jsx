import React from 'react';
import { Text, View, FlatList } from 'react-native'
import UserPost from './UserPost';

const UserPosts = (props) => {
    return (
        <View>
            <Text style={{ fontSize: 20, color: "black", margin: 10}}>Posts</Text>
            <FlatList data={props.posts}
            renderItem={({item}) => <UserPost item={item} loading={props.loading}></UserPost>}
            keyExtractor={(item) => item.id}></FlatList>
        </View>
    );
}

export default UserPosts;