import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import styles from './styles'

export type AlbumProps={
    album:{
        id:string,
        imageUri:string,
        artistsHeadline:string,
    }
}

const AlbumComponent = (props: AlbumProps)=>(
    <View style={styles.container}>
        <Image style={styles.image} source={{ uri: props.album.imageUri}}/>
        <Text style={styles.text}>{props.album.artistsHeadline}</Text>
    </View>
)

export default AlbumComponent