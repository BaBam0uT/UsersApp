import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import UserCard from './UserCard';
import { UserContext } from '../../context/UserContext';

const UsersList = () => {
    const {state} = React.useContext(UserContext);
    const {dispatch} = React.useContext(UserContext);
    const [loading, setLoading] = useState();
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        const handlerSearchUsers = async () => {
            try {
                setLoading(true)
                const responseUsers = await fetch('https://jsonplaceholder.typicode.com/users/');
                const res = await responseUsers.json();
                dispatch({type: 'SET_LIST', payload: res});
            }
            catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false)
                setRefreshing(false);
            }
        }
        handlerSearchUsers();
    }, [refreshing])

    return (
        <>
            <FlatList data={state.list}
            renderItem={({item}) => <UserCard item={item} loading={loading}></UserCard>}
            keyExtractor={(item) => item.id}
            onRefresh={() => setRefreshing(true)}
            refreshing={refreshing}></FlatList>
        </>
    );
}

export default UsersList;