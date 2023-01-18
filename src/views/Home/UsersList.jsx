import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import UserCard from './UserCard';

const UsersList = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState();

    useEffect(() => {
        const handlerSearchUsers = async () => {
            try {
                setLoading(true)
                const responseUsers = await fetch('https://jsonplaceholder.typicode.com/users/');
                setData(await responseUsers.json());
            }
            catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false)
            }
        }
        handlerSearchUsers();
    }, [])

    return (
        <>
            <FlatList data={data}
            renderItem={({item}) => <UserCard item={item} loading={loading}></UserCard>}
            keyExtractor={(item) => item.id}></FlatList>
        </>
    );
}

export default UsersList;