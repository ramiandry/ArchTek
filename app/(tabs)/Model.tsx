// app/(tabs)/model.js
import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import Ionicons from '@expo/vector-icons/MaterialIcons';
import { Avatar, Searchbar, Text } from 'react-native-paper';

export default function ModelScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <View style={styles.container}>
      <View style={styles.container_header}>
        <View style={styles.headerTop}>
          <View>
            <Text variant="bodyMedium">Good Morning</Text>
            <Text variant="titleLarge">Aina Fanatenana</Text>
          </View>
          <View>
            <Avatar.Image size={50} source={require('../../assets/images/avatar.png')} />
          </View>
        </View>
        
        <View style={styles.searchContainer}>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={styles.searchbar}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  container_header: {
    width: "100%",
    padding: 20,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  searchContainer: {
    width: "100%",
  },
  searchbar: {
    elevation: 0,
    backgroundColor: "white",
  },
});