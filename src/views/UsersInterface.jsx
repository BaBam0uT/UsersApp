import React, {Component, useEffect, useState} from 'react';
import UserInfo from './UserInfo';
import UserPosts from './UserPosts';
import {View, Button, TouchableOpacity, Image} from 'react-native';

const UsersInterface = ({route, navigation}) => {
  const [content, setContent] = useState();
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handlerSearchUserAndPosts = async id => {
      try {
        setLoading(true);
        const responseUser = await fetch(
          'https://jsonplaceholder.typicode.com/users/' + id,
        );
        const responsePosts = await fetch(
          'https://jsonplaceholder.typicode.com/users/' + id + '/posts',
        );
        const resultsUser = await responseUser.json()
        setContent(resultsUser);
        setPosts(await responsePosts.json());
        navigation.setOptions({ title: resultsUser.name })
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    handlerSearchUserAndPosts(route.params.id);
  }, []);

  return (
    <>
      <View style={{ left: 300, margin: 20, position:"absolute"}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('UsersApp/assets/img/close.png')}></Image>
        </TouchableOpacity>
      </View>
      <UserInfo content={content}></UserInfo>
      <UserPosts posts={posts} loading={loading}></UserPosts>
    </>
  );
};

export default UsersInterface;
