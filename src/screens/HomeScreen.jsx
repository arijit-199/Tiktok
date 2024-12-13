import { Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react';
import styles from "./../styles";
import Post from '../components/Post';
import proPic from "./../../assets/images/profile_pic.jpg";


const HomeScreen = () => {

  const post = {
    id: 1,
    videoUri: "https://www.w3schools.com/html/movie.mp4",
    user: {
      id: 123,
      username: "arijit19",
      imageUri: proPic,
    },
    description: "hahaha my boy bharat",
    songName: "Nf - The search",
    songImage: "",
    likes: 123,
    comments: 123,
    shares: 123
  }

  const post2 = {
    id: 1,
    videoUri: "https://www.w3schools.com/html/movie.mp4",
    user: {
      id: 123,
      username: "arijit632",
      imageUri: proPic,
    },
    description: "Hello there",
    songName: "Nf - The search",
    songImage: "",
    likes: 123,
    comments: 123,
    shares: 123
  }

  return (
    <View style={styles.container}>
      <Post post={post2}/>
    </View>
  )
}

export default HomeScreen
