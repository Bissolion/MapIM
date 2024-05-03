import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableHighlight, Alert } from 'react-native';
import { Ionicons } from 'react-native-vector-icons'

export default function App() {

  const [text, setText] = useState("");
  const buttonPressed = () => {
    Alert.alert("Botão pressionado")
  };

  return (
    <View style={styles.maincontainer}>

      <Image source={require("./assets/rural_logosplash.png")}  //Miguel Esteves Acá
        style={styles.backgroundimage}
      />

      <View style={{ alignItems: 'center' }}>

        <StatusBar style="auto" />
        <Image
          source={require("./assets/rural_logo03.png")}
          style={styles.mainlogo} />

        <View style={[styles.searchcontainer, styles.boxshadow]}>
          <TextInput
            style={{ justifyContent: 'flex-end', flex: 9 }}
            placeholder='Sala, professor, bloco...'
            value={text}
            onChangeText={(value) => setText(value)}
          />

          <TouchableOpacity>
            <Ionicons
              name='search'
              size={25}
              color="#284b8c"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <TouchableHighlight
          style={styles.button}
          onPress={buttonPressed}
          underlayColor={"#416AB5"}
          activeOpacity={0.6}
        >
          <Text style={styles.buttonText}>
            Navegar pelo mapa
          </Text>
        </TouchableHighlight>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    height: "100%",
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  mainlogo: {
    height: 180,
    width: 180,
    resizeMode: 'contain',
    marginBottom: "10%",
    marginTop: '10%'
  },

  backgroundimage: {
    height: '80%',
    width: '80%',
    position: 'absolute',
    top: 20,
    opacity: 0.025
  },

  searchcontainer: {
    flexDirection: 'row',
    width: '75%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 16,
    paddingLeft: 12,
    padding: 4,
    borderRadius: 8,
  },

  button: {
    backgroundColor: '#284b8c',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    paddingLeft: 15,
    paddingRight: 15,
    padding: 15,
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 1,
  },

  buttonText: {
    color: 'white',
    fontSize: 18
  },

  boxshadow: {
    elevation: 5,
    shadowColor: 'black'
  }

});
