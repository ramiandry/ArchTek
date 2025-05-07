
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Favoris = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>User Screen</Text>
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

export default Favoris;
