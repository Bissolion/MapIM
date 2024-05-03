import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (


    <View style={styles.maincontainer}>

      <Image source={require("./assets/rural_logo03.png")}
        style={styles.backgroundimage}
      />

      <StatusBar style="auto" />
      <Image
        source={require("./assets/rural_logo03.png")}
        style={styles.mainlogo} />
      <Text>
        Searchbar aqui
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    height: "100%",

    alignItems: 'center',
    justifyContent: 'center',
  },

  mainlogo: {
    height: 180,
    width: 180,
    resizeMode: 'contain'
  },

  backgroundimage: {
    height: '80%',
    width: '80%',
    position: 'absolute',
    top: 20,
    opacity: 0.03
  }

});
