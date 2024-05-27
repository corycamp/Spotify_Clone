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
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container:{
    marginTop:25,
    marginBottom:25,
    // display:"flex",
    // alignItems:"center",
    // justifyContent:"center",
    height:"98%",
  }
});
