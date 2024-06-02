import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import styles from './styles'
import { Album } from "@/types";
import { useNavigation, useRouter } from "expo-router";

export type AlbumProps={
    album: Album
}

const AlbumComponent = (props: AlbumProps)=>{
    const router = useRouter()

    const onPress = ()=>{
        router.push({pathname:"albumScreen", params:{id:props.album.id}})
    }

    return(
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: props.album.imageUri}}/>
                <Text style={styles.text}>{props.album.artistsHeadline}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default AlbumComponent