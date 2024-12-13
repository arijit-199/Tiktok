import { Image, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react';
import Video from 'react-native-video';
import styles from "./../styles";
import Entypo from "react-native-vector-icons/Entypo"
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Fontisto from "react-native-vector-icons/Fontisto"



const Post = ({ post }) => {
    const [paused, setPaused] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    console.log("post===>", post)

    const onPlayPausePress = () => {
        setPaused(!paused);
    }

    return (
        <View style={styles.postContainer}>
            <TouchableWithoutFeedback onPress={() => onPlayPausePress()}>
                <Video
                    source={{ uri: post.videoUri }}
                    style={styles.video}
                    resizeMode='contain'
                    repeat={true}
                    paused={paused}
                    onError={(error) => console.log("Video Error:", error)} // Logs errors
                />
            </TouchableWithoutFeedback>

            <View style={styles.uiContainer}>
                <View style={styles.rightContainer}>
                    <View style={styles.iconView}>
                        <Image source={post.user.imageUri} style={styles.proPic} />
                    </View>

                    <View style={styles.iconView}>
                        {!isLiked ?
                            <AntDesign name={"hearto"} size={24} color={"white"} onPress={() => setIsLiked(!isLiked)} />
                            :
                            <AntDesign name={"heart"} size={24} color={"red"} onPress={() => setIsLiked(!isLiked)} />
                        }
                        <Text style={{ color: "white" }}>{post.likes}</Text>
                    </View>

                    <View style={styles.iconView}>
                        <FontAwesome name={"commenting"} size={24} color={"white"} />
                        <Text style={{ color: "white" }}>{post.comments}</Text>
                    </View>

                    <View style={styles.iconView}>
                        <Fontisto name={"share-a"} size={24} color={"white"} />
                        <Text style={{ color: "white" }}>{post.shares}</Text>
                    </View>
                </View>

                <View style={styles.videoDetails}>
                    <View style={styles.profileDetailsContainer}>
                        <Text style={{ color: "white", fontWeight: "bold" }}>{post.user.username}</Text>
                    </View>

                    <Text style={{ color: "white", marginTop: 6 }}>{post.description}</Text>

                    <View style={styles.songDetailsContainer}>

                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 8, marginTop: 12 }}>
                            <Fontisto name={"music-note"} size={24} color={"white"} />
                            <Text style={{ color: "white", }}>{post.songName}</Text>
                        </View>

                        <View style={styles.iconView}>
                            <Image source={post.user.imageUri} style={styles.proPic} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Post