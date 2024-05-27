import { StyleSheet, View, Text, FlatList } from 'react-native';
import AlbumCategory from '@/components/AlbumCategory';
import albumCategories from '@/data/albumCategories';

export default function HomeScreen() {

  return (
    <View style={styles.container}>
     <FlatList
        data={albumCategories}
        renderItem={({item})=><AlbumCategory title={item.title} albums={item.albums} />}
        keyExtractor={(item)=>item.id}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop:25,
    marginBottom:25,
    height:"98%",
  }
});
