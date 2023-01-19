import React, {useContext, useEffect, useState} from 'react';
import { View } from 'react-native'
import UserPostsList from './UserPostsList';
import { UserContext } from '../../context/UserContext';

const UserPosts = ({route}) => {
    const [posts, setPosts] = useState();
    const [loading, setLoading] = useState(false);
    const {state} = React.useContext(UserContext);

    useEffect(() => {
      const handlerSearchPosts = async id => {
        try {
          setLoading(true);
          const responsePosts = await fetch(
            'https://jsonplaceholder.typicode.com/users/' + id + '/posts',
          );
          setPosts(await responsePosts.json());
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      handlerSearchPosts(state.id);
    }, []);

    return (
        <View>
            <UserPostsList posts={posts} loading={loading}></UserPostsList>
        </View>
    );
}

export default UserPosts;