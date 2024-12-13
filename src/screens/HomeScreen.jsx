import { FlatList, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react';
import styles from "./../styles";
import Post from '../components/Post';
import posts from '../data/posts';



const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <FlatList 
      data={posts}
      renderItem={({item}) => <Post post={item}/>}
      showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default HomeScreen
