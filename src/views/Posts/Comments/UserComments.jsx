import React, {useContext, useEffect, useState} from 'react';
import { View } from 'react-native'
import UserCommentsList from './UserCommentsList';
import { UserContext } from '../../../context/UserContext';

const UserComments = () => {
    const [comments, setComments] = useState();
    const [loading, setLoading] = useState(false);
    const {state} = React.useContext(UserContext);

    useEffect(() => {
      const handlerSearchComments = async id => {
        try {
          setLoading(true);
          const responseComments = await fetch(
            'https://jsonplaceholder.typicode.com/posts/' + id + '/comments',
          );
          setComments(await responseComments.json());
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      handlerSearchComments(state.id);
    }, []);

    return (
        <View>
            <UserCommentsList comments={comments} loading={loading}></UserCommentsList>
        </View>
    );
}

export default UserComments;