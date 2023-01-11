import React, { Component, useState } from 'react';
import UsersInput from './UsersInput';
import UserInfo from './UserInfo';
import UserPosts from './UserPosts'
import { ScrollView } from 'react-native';

const UsersInterface = () => {
    const [content, setContent] = useState();
    const [posts, setPosts] = useState();
    const [loading, setLoading] = useState(false);

    const handlerSearchIdAndPosts = async (text) => {
        try {
            setLoading(true)
            const responseUser = await fetch('https://jsonplaceholder.typicode.com/users/' + text);
            const responsePosts = await fetch('https://jsonplaceholder.typicode.com/users/' + text + "/posts");
            setContent(await responseUser.json());
            setPosts(await responsePosts.json());

        }
        catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <>
            <UsersInput handlerId={handlerSearchIdAndPosts}></UsersInput>
            <UserInfo content={content}></UserInfo>
            <UserPosts posts={posts} loading={loading}></UserPosts>
        </>
    );
}

export default UsersInterface;