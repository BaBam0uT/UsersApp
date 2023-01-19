import React, {useContext, useEffect, useState} from 'react';
import { View } from 'react-native'
import UserPhotosList from './UserPhotosList';
import { UserContext } from '../../../context/UserContext';

const UserPhotos = () => {
    const [photos, setPhotos] = useState();
    const [loading, setLoading] = useState(false);
    const {state} = React.useContext(UserContext);

    useEffect(() => {
      const handlerSearchPhotos = async id => {
        try {
          setLoading(true);
          const responsePhotos = await fetch(
            'https://jsonplaceholder.typicode.com/albums/' + id + '/photos',
          );
          setPhotos(await responsePhotos.json());
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      handlerSearchPhotos(state.id);
    }, []);

    return (
        <View>
            <UserPhotosList photos={photos} loading={loading}></UserPhotosList>
        </View>
    );
}

export default UserPhotos;