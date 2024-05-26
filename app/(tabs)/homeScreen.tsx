import { StyleSheet, View, Text } from 'react-native';
import Album from '@/components/Album';

export default function HomeScreen() {

  const album = {
    id:'1',
    imageUri:'https://reactnative.dev/img/tiny_logo.png',
    artistsHeadline:'Test'
  }
  return (
    <View style={styles.test}>
      <Album album={album} />
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
  test:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    height:"100%",
  }
});
