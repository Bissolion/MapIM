import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, Alert } from 'react-native';
import { Ionicons } from 'react-native-vector-icons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}>

      <Tab.Screen name="Tela inicial" component={HomeScreen}
        options={{
          title: 'Tela inicial',
          tabBarIcon: () => {
            return (
              <Ionicons
                name='home'
                size={18}
                color='#284b8c'
              />
            )
          }
        }}
      />

      <Tab.Screen name="Mapa" component={MapScreen}
        options={{
          title: 'Mapa',
          tabBarIcon: () => {
            return (
              <Ionicons
                name='map'
                size={18}
                color='#284b8c'
              />
            )
          }
        }}
      />

      <Tab.Screen name="Anúncios" component={AnnouncementScreen}
        options={{
          title: 'Anúncios',
          tabBarIcon: () => {
            return (
              <Ionicons
                name='megaphone'
                size={18}
                color='#284b8c'
              />
            )
          }
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}

function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Mapa aqui</Text>
    </View>
  );
}

function AnnouncementScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Anúncios aqui</Text>
    </View>
  )
}

function HomeScreen() {

  return (
    <View style={styles.page}>
      <StatusBar style="auto" />
      <Image source={require("./assets/rural_logosplash.png")}
        style={styles.backgroundimage}
      />

      <View style={styles.maincontainer}>

        <Image
          source={require("./assets/rural_logo03.png")}
          style={styles.mainlogo} />

        <View style={[styles.searchcontainer, styles.boxshadow]}>
          <TextInput
            style={{ justifyContent: 'flex-end', flex: 9 }}
            placeholder='Sala, professor, bloco...'
          />
          <Ionicons
            name='search'
            size={25}
            color="#284b8c"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    height: "100%",
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  maincontainer: {
    height: '70 %',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  mainlogo: {
    height: 180,
    width: 180,
    resizeMode: 'contain',
    marginTop: '10%'
  },

  backgroundimage: {
    height: '83%',
    width: '100%',
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

  boxshadow: {
    elevation: 5,
    shadowColor: 'black'
  }

});
