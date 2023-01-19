import React, {useContext, useEffect, useState} from 'react';
import { View } from 'react-native'
import UserAlbumsList from './UserAlbumsList';
import { UserContext } from '../../context/UserContext';

const UserAlbums = () => {
    const [albums, setAlbums] = useState();
    const [loading, setLoading] = useState(false);
    const {state} = React.useContext(UserContext);

    useEffect(() => {
      const handlerSearchAlbums = async id => {
        try {
          setLoading(true);
          const responseAlbums = await fetch(
            'https://jsonplaceholder.typicode.com/users/' + id + '/albums',
          );
          setAlbums(await responseAlbums.json());
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      handlerSearchAlbums(state.id);
    }, []);

    return (
        <View>
            <UserAlbumsList albums={albums} loading={loading}></UserAlbumsList>
        </View>
    );
}

export default UserAlbums;