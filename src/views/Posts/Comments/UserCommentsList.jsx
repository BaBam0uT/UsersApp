import React from 'react';
import { View, FlatList } from 'react-native'
import UserComment from './UserComment';

const UserCommentsList = (props) => {
    return (
        <View>
            <FlatList data={props.comments}
            renderItem={({item}) => <UserComment item={item} loading={props.loading}></UserComment>}
            keyExtractor={(item) => item.id}></FlatList>
        </View>
    );
}

export default UserCommentsList;