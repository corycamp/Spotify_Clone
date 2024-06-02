import albumDetails from "@/data/albumDetails";
// import { useLocalSearchParams } from "expo-router";
import { View, StyleSheet, FlatList } from "react-native";
import SongListItem from "@/components/SongListItem";
import AlbumHeader from "@/components/AlbumHeader";

const AlbumScreen = ()=>{
    // const params = useLocalSearchParams();
    return(
        <View style={styles.container}>
            <FlatList
              data={albumDetails.songs}
              renderItem={({item})=> <SongListItem song={item}/> }
              keyExtractor={(item) => item.id}
              ListHeaderComponent={()=> <AlbumHeader album={albumDetails}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      marginTop:25,
      marginBottom:25,
      height:"98%",
    }
  });

export default AlbumScreen;