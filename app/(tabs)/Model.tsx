// src/screens/ModelScreen.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ModelScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Model Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ModelScreen;
