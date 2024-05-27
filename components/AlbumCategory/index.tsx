import React from "react";
import {View,Text} from 'react-native';
import { Album } from "@/types";
import styles from "./styles"
import { FlatList } from "react-native";
import AlbumComponent from "../Album";

export type AlbumCategoryProps={
    title: string,
    albums: Album[]
}

const AlbumCategory = (props: AlbumCategoryProps)=>(
    <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <FlatList
            data={props.albums}
            renderItem={({item})=>
                <AlbumComponent album={{
                    id: item.id,
                    imageUri: item.imageUri,
                    artistsHeadline: item.artistsHeadline
                }}/>
            }
            keyExtractor={(item)=> item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    </View>
)

export default AlbumCategory;